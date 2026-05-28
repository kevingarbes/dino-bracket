const intro = document.querySelector("#intro-screen");
const matchup = document.querySelector("#matchup-screen");
const popup = document.querySelector("#popup");
const popupMessage = document.querySelector("#popup-message");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-matchup");
const title = document.querySelector("#title");
const instructions = document.querySelector("#instructions");
const roundKicker = document.querySelector(".round-header .kicker");
const matchupContainer = document.querySelector("#matchup-container");
const liveBracket = document.querySelector("#live-bracket");

const seedOrder = [1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15];
const divisionRoundNames = ["Round 1", "Division Quarterfinals", "Division Semifinals", "Division Final"];
const finalRoundNames = ["Ferocious Four", "Championship"];

const divisionData = [
  {
    name: "Theropods",
    imageFolder: "Theropods",
    articleFolder: "theropods",
    contenders: [
      { seed: 1, name: "Tyrannosaurus rex", slug: "Tyrannosaurus-rex", image: "Tyrannosaurus rex.png" },
      { seed: 2, name: "Velociraptor" },
      { seed: 3, name: "Spinosaurus" },
      { seed: 4, name: "Dilophosaurus" },
      { seed: 5, name: "Carnotaurus" },
      { seed: 6, name: "Therizinosaurus" },
      { seed: 7, name: "Allosaurus" },
      { seed: 8, name: "Compsognathus" },
      { seed: 9, name: "Microraptor" },
      { seed: 10, name: "Archaeopteryx" },
      { seed: 11, name: "Deinonychus" },
      { seed: 12, name: "Gigantosaurus" },
      { seed: 13, name: "Oviraptor" },
      { seed: 14, name: "Carcharodontosaurus" },
      { seed: 15, name: "Dromaeosaurus" },
      { seed: 16, name: "Ceratosaurus" }
    ]
  },
  {
    name: "Cerapods",
    imageFolder: "Cerapods",
    articleFolder: "cerapods",
    contenders: [
      { seed: 1, name: "Triceratops" },
      { seed: 2, name: "Parasaurolophus" },
      { seed: 3, name: "Pachycephalosaurus" },
      { seed: 4, name: "Iguanodon" },
      { seed: 5, name: "Styracosaurus" },
      { seed: 6, name: "Corythosaurus" },
      { seed: 7, name: "Protoceratops" },
      { seed: 8, name: "Chasmosaurus" },
      { seed: 9, name: "Psittacosaurus" },
      { seed: 10, name: "Brachylophosaurus" },
      { seed: 11, name: "Heterodontosaurus" },
      { seed: 12, name: "Ouranosaurus" },
      { seed: 13, name: "Pachyrhinosaurus" },
      { seed: 14, name: "Stegoceras" },
      { seed: 15, name: "Utahceratops" },
      { seed: 16, name: "Camptosaurus" }
    ]
  },
  {
    name: "Sauropods",
    imageFolder: "Sauropods",
    articleFolder: "sauropods",
    contenders: [
      { seed: 1, name: "Brachiosaurus" },
      { seed: 2, name: "Brontosaurus" },
      { seed: 3, name: "Diplodocus" },
      { seed: 4, name: "Argentinosaurus" },
      { seed: 5, name: "Patagotitan" },
      { seed: 6, name: "Amargasaurus" },
      { seed: 7, name: "Sauroposeidon" },
      { seed: 8, name: "Bajadasaurus" },
      { seed: 9, name: "Shunosaurus" },
      { seed: 10, name: "Rebbachisaurus" },
      { seed: 11, name: "Agustinia" },
      { seed: 12, name: "Zhuchengtitan" },
      { seed: 13, name: "Daxiatitan" },
      { seed: 14, name: "Fukuititan" },
      { seed: 15, name: "Barapasaurus" },
      { seed: 16, name: "Massospondylus" }
    ]
  },
  {
    name: "Thyreophorans",
    imageFolder: "Thyreophorans",
    articleFolder: "thyreophorans",
    contenders: [
      { seed: 1, name: "Stegosaurus" },
      { seed: 2, name: "Ankylosaurus" },
      { seed: 3, name: "Edmontonia" },
      { seed: 4, name: "Kentrosaurus" },
      { seed: 5, name: "Gastonia" },
      { seed: 6, name: "Sauropelta" },
      { seed: 7, name: "Polacanthus" },
      { seed: 8, name: "Nodosaurus" },
      { seed: 9, name: "Tuojiangosaurus" },
      { seed: 10, name: "Minmi" },
      { seed: 11, name: "Scelidosaurus" },
      { seed: 12, name: "Gargoyleosaurus" },
      { seed: 13, name: "Wuerhosaurus" },
      { seed: 14, name: "Huayangosaurus" },
      { seed: 15, name: "Antarctopelta" },
      { seed: 16, name: "Mymoorapelta" }
    ]
  }
];

let state;
let history = [];
let dinoFacts = {};
let pendingWinner = null;
let popupMode = "confirm";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadDinoFacts() {
  try {
    const response = await fetch("tournament-pages/dinosaurs/dinofacts%20json.txt");
    const text = await response.text();
    const objectText = text.replace(/^\s*const\s+dinoFacts\s*=\s*/, "").replace(/;\s*$/, "");
    dinoFacts = JSON.parse(objectText);
  } catch (error) {
    dinoFacts = {};
  }
}

function slugFor(contender) {
  return contender.slug || contender.name;
}

function hydrateContender(contender, division) {
  const facts = dinoFacts[contender.name] || {};

  return {
    ...contender,
    facts,
    division: division.name,
    image: `tournament-pages/dinosaurs/images/${division.imageFolder}/${contender.image || `${contender.name}.png`}`,
    article: `tournament-pages/dinosaurs/articles/${division.articleFolder}/${slugFor(contender)}.html`
  };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function createMatch(id, slotA = null, slotB = null) {
  return { id, entrants: [slotA, slotB], winner: null };
}

function buildDivision(division, randomize) {
  const hydrated = division.contenders.map((contender) => hydrateContender(contender, division));
  const ordered = randomize ? shuffle(hydrated) : seedOrder.map((seed) => hydrated.find((contender) => contender.seed === seed));

  return {
    name: division.name,
    rounds: [
      Array.from({ length: 8 }, (_, index) => createMatch(`${division.name}-1-${index}`, ordered[index * 2], ordered[index * 2 + 1])),
      Array.from({ length: 4 }, (_, index) => createMatch(`${division.name}-2-${index}`)),
      Array.from({ length: 2 }, (_, index) => createMatch(`${division.name}-3-${index}`)),
      [createMatch(`${division.name}-4-0`)]
    ]
  };
}

function createState(randomize = false) {
  return {
    divisions: divisionData.map((division) => buildDivision(division, randomize)),
    finalRounds: [
      [createMatch("ferocious-0"), createMatch("ferocious-1")],
      [createMatch("championship-0")]
    ],
    current: null,
    champion: null
  };
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function findNextMatch() {
  for (let divisionIndex = 0; divisionIndex < state.divisions.length; divisionIndex += 1) {
    const division = state.divisions[divisionIndex];

    for (let roundIndex = 0; roundIndex < division.rounds.length; roundIndex += 1) {
      const matchIndex = division.rounds[roundIndex].findIndex((match) => match.entrants[0] && match.entrants[1] && !match.winner);
      if (matchIndex !== -1) return { type: "division", divisionIndex, roundIndex, matchIndex };
    }
  }

  for (let roundIndex = 0; roundIndex < state.finalRounds.length; roundIndex += 1) {
    const matchIndex = state.finalRounds[roundIndex].findIndex((match) => match.entrants[0] && match.entrants[1] && !match.winner);
    if (matchIndex !== -1) return { type: "final", roundIndex, matchIndex };
  }

  return null;
}

function getMatch(pointer = state.current) {
  if (!pointer) return null;
  if (pointer.type === "division") {
    return state.divisions[pointer.divisionIndex].rounds[pointer.roundIndex][pointer.matchIndex];
  }
  return state.finalRounds[pointer.roundIndex][pointer.matchIndex];
}

function getRoundLabel(pointer = state.current) {
  if (!pointer) return "Champion";
  if (pointer.type === "division") {
    return `${state.divisions[pointer.divisionIndex].name} - ${divisionRoundNames[pointer.roundIndex]}`;
  }
  return finalRoundNames[pointer.roundIndex];
}

function advanceWinner(winner) {
  const pointer = state.current;
  const match = getMatch(pointer);
  let divisionNotice = null;
  match.winner = winner;

  if (pointer.type === "division") {
    const nextRoundIndex = pointer.roundIndex + 1;
    const division = state.divisions[pointer.divisionIndex];

    if (nextRoundIndex < division.rounds.length) {
      const nextMatch = division.rounds[nextRoundIndex][Math.floor(pointer.matchIndex / 2)];
      nextMatch.entrants[pointer.matchIndex % 2] = winner;
    } else {
      const semiIndex = pointer.divisionIndex < 2 ? 0 : 1;
      const semiSlot = pointer.divisionIndex % 2;
      state.finalRounds[0][semiIndex].entrants[semiSlot] = winner;
      divisionNotice = `${winner.name} has won the ${division.name} division and will advance to the Ferocious Four!`;
    }
  } else if (pointer.roundIndex === 0) {
    state.finalRounds[1][0].entrants[pointer.matchIndex] = winner;
  } else {
    state.champion = winner;
  }

  state.current = findNextMatch();
  return divisionNotice;
}

function renderContenderCard(contender, index) {
  const facts = contender.facts || {};

  return `
    <button class="dino-card" type="button" data-index="${index}">
      <img src="${contender.image}" alt="${contender.name}">
      <span class="seed">#${contender.seed}</span>
      <h2>${contender.name}</h2>
      <p><strong>Size:</strong> ${escapeHtml(facts.Size || "Unknown")}</p>
      <p><strong>Period:</strong> ${escapeHtml(facts.Period || "Unknown")}</p>
      <p><strong>Fun Fact:</strong> ${escapeHtml(facts["Fun Fact"] || "Choose this dinosaur to advance it in the bracket.")}</p>
      <a class="learn-more" href="${contender.article}" target="_blank" rel="noreferrer">Learn More</a>
    </button>
  `;
}

function renderChampion() {
  const champion = state.champion;
  roundKicker.textContent = "Dinosaur Bracket Champion";
  title.textContent = `${champion.name} wins the Dinosaur Bracket`;
  instructions.textContent = "Restart the tournament to play again or review the completed bracket below.";
  matchupContainer.innerHTML = `
    <article class="champion-card">
      <img src="${champion.image}" alt="${champion.name}">
      <p class="kicker">Champion</p>
      <h2>${champion.name}</h2>
      <p>${champion.name} survived the full tournament and claimed the crown.</p>
      <a class="button button-primary" href="${champion.article}" target="_blank" rel="noreferrer">Learn More</a>
    </article>
  `;
}

function renderMatch() {
  if (state.champion) {
    renderChampion();
    renderBracket();
    previousButton.disabled = history.length === 0;
    return;
  }

  const match = getMatch();
  const [left, right] = match.entrants;
  roundKicker.textContent = getRoundLabel();
  title.textContent = `${left.name} vs ${right.name}`;
  instructions.textContent = "Click on your favorite dinosaur to advance them to the next round.";
  matchupContainer.innerHTML = [left, right].map(renderContenderCard).join("");

  matchupContainer.querySelectorAll(".dino-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      pendingWinner = match.entrants[Number(card.dataset.index)];
      popupMode = "confirm";
      popupMessage.textContent = `Advance ${pendingWinner.name}?`;
      backButton.classList.remove("hidden");
      nextButton.textContent = "Next";
      popup.classList.remove("hidden");
    });
  });

  previousButton.disabled = history.length === 0;
  renderBracket();
}

function renderBracketSlot(contender, winner, isActive) {
  const classes = ["bracket-slot"];
  if (winner && contender && winner.name === contender.name) classes.push("is-winner");
  if (isActive) classes.push("is-active");

  return `
    <div class="${classes.join(" ")}">
      ${contender ? `<span>#${contender.seed}</span>${contender.name}` : "TBD"}
    </div>
  `;
}

function renderBracketMatch(match, activeMatch) {
  const isActive = activeMatch && activeMatch.id === match.id;
  return `
    <div class="bracket-match ${isActive ? "is-current" : ""}">
      ${renderBracketSlot(match.entrants[0], match.winner, isActive)}
      ${renderBracketSlot(match.entrants[1], match.winner, isActive)}
    </div>
  `;
}

function renderBracket() {
  const activeMatch = getMatch();
  const divisions = state.divisions.map((division) => `
    <article class="division-bracket">
      <h3>${division.name}</h3>
      <div class="bracket-rounds">
        ${division.rounds.map((round, index) => `
          <section class="bracket-round">
            <h4>${divisionRoundNames[index]}</h4>
            ${round.map((match) => renderBracketMatch(match, activeMatch)).join("")}
          </section>
        `).join("")}
      </div>
    </article>
  `).join("");

  const finals = `
    <article class="division-bracket finals-bracket">
      <h3>Ferocious Four</h3>
      <div class="bracket-rounds finals-rounds">
        ${state.finalRounds.map((round, index) => `
          <section class="bracket-round">
            <h4>${finalRoundNames[index]}</h4>
            ${round.map((match) => renderBracketMatch(match, activeMatch)).join("")}
          </section>
        `).join("")}
      </div>
    </article>
  `;

  liveBracket.innerHTML = `<div class="live-bracket-grid">${divisions}${finals}</div>`;
}

async function startTournament(randomize = false) {
  if (Object.keys(dinoFacts).length === 0) await loadDinoFacts();
  state = createState(randomize);
  history = [];
  pendingWinner = null;
  popupMode = "confirm";
  state.current = findNextMatch();
  intro.classList.add("hidden");
  matchup.classList.remove("hidden");
  popup.classList.add("hidden");
  renderMatch();
}

document.querySelector("#default-seeds").addEventListener("click", () => startTournament(false));
document.querySelector("#random-seeds").addEventListener("click", () => startTournament(true));

backButton.addEventListener("click", () => {
  popup.classList.add("hidden");
  pendingWinner = null;
  popupMode = "confirm";
});

nextButton.addEventListener("click", () => {
  if (popupMode === "divisionNotice") {
    popupMode = "confirm";
    pendingWinner = null;
    popup.classList.add("hidden");
    backButton.classList.remove("hidden");
    nextButton.textContent = "Next";
    renderMatch();
    return;
  }

  if (!pendingWinner) return;
  history.push(cloneState(state));
  const divisionNotice = advanceWinner(pendingWinner);
  pendingWinner = null;

  if (divisionNotice) {
    popupMode = "divisionNotice";
    popupMessage.textContent = divisionNotice;
    backButton.classList.add("hidden");
    nextButton.textContent = "Continue";
    renderBracket();
    return;
  }

  popup.classList.add("hidden");
  renderMatch();
});

document.querySelector("#previous-matchup").addEventListener("click", () => {
  if (history.length === 0) return;
  state = history.pop();
  pendingWinner = null;
  popupMode = "confirm";
  popup.classList.add("hidden");
  backButton.classList.remove("hidden");
  nextButton.textContent = "Next";
  renderMatch();
});

document.querySelector("#restart-tournament").addEventListener("click", () => {
  state = null;
  history = [];
  pendingWinner = null;
  popupMode = "confirm";
  matchup.classList.add("hidden");
  intro.classList.remove("hidden");
  popup.classList.add("hidden");
  backButton.classList.remove("hidden");
  nextButton.textContent = "Next";
  previousButton.disabled = true;
});

loadDinoFacts();
