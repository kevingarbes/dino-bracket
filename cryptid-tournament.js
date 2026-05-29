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
const finalRoundNames = ["Phantom Four", "Championship"];
const cryptidFactsPath = "tournament-pages/cryptids/CryptidFacts.txt";
const divisionData = [
  {
    "name": "Humanoids",
    "imageFolder": "Humanoids",
    "articleFolder": "humanoids",
    "contenders": [
      {
        "seed": 1,
        "name": "Sasquatch",
        "factKey": "Sasquatch",
        "image": "Sasquatch.jpg",
        "slug": "Sasquatch"
      },
      {
        "seed": 2,
        "name": "Yeti",
        "factKey": "Yeti",
        "image": "Yeti.jpg",
        "slug": "Yeti"
      },
      {
        "seed": 3,
        "name": "Skunk Ape",
        "factKey": "Skunk Ape",
        "image": "Skunk Ape.jpg",
        "slug": "Skunk Ape"
      },
      {
        "seed": 4,
        "name": "Yowie",
        "factKey": "Yowie",
        "image": "Yowie.jpg",
        "slug": "Yowie"
      },
      {
        "seed": 5,
        "name": "Orang Pendek",
        "factKey": "Orang Pendek",
        "image": "Orang Pendek.jpg",
        "slug": "Orang Pendek"
      },
      {
        "seed": 6,
        "name": "Yeren",
        "factKey": "Yeren",
        "image": "Yeren.jpg",
        "slug": "Yeren"
      },
      {
        "seed": 7,
        "name": "Almas",
        "factKey": "Almas",
        "image": "Almas.jpg",
        "slug": "Almas"
      },
      {
        "seed": 8,
        "name": "Dover Demon",
        "factKey": "Dover Demon",
        "image": "Dover Demon.jpg",
        "slug": "Dover Demon"
      },
      {
        "seed": 9,
        "name": "Loveland Frogman",
        "factKey": "Loveland Frogman",
        "image": "Loveland Frogman.jpg",
        "slug": "Loveland Frogman"
      },
      {
        "seed": 10,
        "name": "Lizard Man of Scape Ore Swamp",
        "factKey": "Lizard Man of Scape Ore Swamp",
        "image": "Lizard Man of Scape Ore Swamp.jpg",
        "slug": "Lizard Man of Scape Ore Swamp"
      },
      {
        "seed": 11,
        "name": "Goatman",
        "factKey": "Goatman",
        "image": "Goatman.jpg",
        "slug": "Goatman"
      },
      {
        "seed": 12,
        "name": "Michigan Dogman",
        "factKey": "Michigan Dogman",
        "image": "Michigan Dogman.jpg",
        "slug": "Michigan Dogman"
      },
      {
        "seed": 13,
        "name": "Beast of Bray Road",
        "factKey": "Beast of Bray Road",
        "image": "Beast of Bray Road.jpg",
        "slug": "Beast of Bray Road"
      },
      {
        "seed": 14,
        "name": "Fouke Monster",
        "factKey": "Fouke Monster",
        "image": "Fouke Monster.jpg",
        "slug": "Fouke Monster"
      },
      {
        "seed": 15,
        "name": "Menehune",
        "factKey": "Menehune",
        "image": "Menehune.jpg",
        "slug": "Menehune"
      },
      {
        "seed": 16,
        "name": "Flatwoods Monster",
        "factKey": "Flatwoods Monster",
        "image": "Flatwoods Monster.jpg",
        "slug": "Flatwoods Monster"
      }
    ]
  },
  {
    "name": "Water Monsters",
    "imageFolder": "Water Monsters",
    "articleFolder": "water-monsters",
    "contenders": [
      {
        "seed": 1,
        "name": "Loch Ness Monster",
        "factKey": "Loch Ness Monster",
        "image": "Loch Ness Monster.jpg",
        "slug": "Loch Ness Monster"
      },
      {
        "seed": 2,
        "name": "Kraken",
        "factKey": "Kraken",
        "image": "Kraken.jpg",
        "slug": "Kraken"
      },
      {
        "seed": 3,
        "name": "Ogopogo",
        "factKey": "Ogopogo",
        "image": "Ogopogo.jpg",
        "slug": "Ogopogo"
      },
      {
        "seed": 4,
        "name": "Champ",
        "factKey": "Champ",
        "image": "Champ.jpg",
        "slug": "Champ"
      },
      {
        "seed": 5,
        "name": "Bunyip",
        "factKey": "Bunyip",
        "image": "Bunyip.jpg",
        "slug": "Bunyip"
      },
      {
        "seed": 6,
        "name": "Lusca",
        "factKey": "Lusca",
        "image": "Lusca.jpg",
        "slug": "Lusca"
      },
      {
        "seed": 7,
        "name": "Cadborosaurus",
        "factKey": "Cadborosaurus",
        "image": "Cadborosaurus.jpg",
        "slug": "Cadborosaurus"
      },
      {
        "seed": 8,
        "name": "Mokele-mbembe",
        "factKey": "Mokele-mbembe",
        "image": "Mokele-mbembe.jpg",
        "slug": "Mokele-mbembe"
      },
      {
        "seed": 9,
        "name": "Altamaha-ha",
        "factKey": "Altamaha-ha",
        "image": "Altamaha-ha.jpg",
        "slug": "Altamaha-ha"
      },
      {
        "seed": 10,
        "name": "Nahuelito",
        "factKey": "Nahuelito",
        "image": "Nahuelito.jpg",
        "slug": "Nahuelito"
      },
      {
        "seed": 11,
        "name": "Bear Lake Monster",
        "factKey": "Bear Lake Monster",
        "image": "Bear Lake Monster.jpg",
        "slug": "Bear Lake Monster"
      },
      {
        "seed": 12,
        "name": "Lake Tianchi Monster",
        "factKey": "Lake Tianchi Monster",
        "image": "Lake Tianchi Monster.jpg",
        "slug": "Lake Tianchi Monster"
      },
      {
        "seed": 13,
        "name": "Issie",
        "factKey": "Issie",
        "image": "Issie.jpg",
        "slug": "Issie"
      },
      {
        "seed": 14,
        "name": "Ningen",
        "factKey": "Ningen",
        "image": "Ningen.jpg",
        "slug": "Ningen"
      },
      {
        "seed": 15,
        "name": "Devil's Lake Monster",
        "factKey": "Devil’s Lake Monster",
        "image": "Devil's Lake Monster.jpg",
        "slug": "Devil's Lake Monster"
      },
      {
        "seed": 16,
        "name": "Morgawr",
        "factKey": "Morgawr",
        "image": "Morgawr.jpg",
        "slug": "Morgawr"
      }
    ]
  },
  {
    "name": "Land Monsters",
    "imageFolder": "Land Monsters",
    "articleFolder": "land-monsters",
    "contenders": [
      {
        "seed": 1,
        "name": "Chupacabra",
        "factKey": "Chupacabra",
        "image": "Chupacabra.jpg",
        "slug": "Chupacabra"
      },
      {
        "seed": 2,
        "name": "Beast of Gevaudan",
        "factKey": "Beast of Gevaudan",
        "image": "Beast of Gevaudan.jpg",
        "slug": "Beast of Gevaudan"
      },
      {
        "seed": 3,
        "name": "Mongolian Death Worm",
        "factKey": "Mongolian Death Worm",
        "image": "Mongolian Death Worm.jpg",
        "slug": "Mongolian Death Worm"
      },
      {
        "seed": 4,
        "name": "Nandi Bear",
        "factKey": "Nandi Bear",
        "image": "Nandi Bear.jpg",
        "slug": "Nandi Bear"
      },
      {
        "seed": 5,
        "name": "Wendigo",
        "factKey": "Wendigo",
        "image": "Wendigo.jpg",
        "slug": "Wendigo"
      },
      {
        "seed": 6,
        "name": "Grootslang",
        "factKey": "Grootslang",
        "image": "Grootslang.jpg",
        "slug": "Grootslang"
      },
      {
        "seed": 7,
        "name": "Beast of Bodmin Moor",
        "factKey": "Beast of Bodmin Moor",
        "image": "Beast of Bodmin Moor.jpg",
        "slug": "Beast of Bodmin Moor"
      },
      {
        "seed": 8,
        "name": "Black Shuck",
        "factKey": "Black Shuck",
        "image": "Black Shuck.jpg",
        "slug": "Black Shuck"
      },
      {
        "seed": 9,
        "name": "Kasai Rex",
        "factKey": "Kasai Rex",
        "image": "Kasai Rex.jpg",
        "slug": "Kasai Rex"
      },
      {
        "seed": 10,
        "name": "Adjule",
        "factKey": "Adjule",
        "image": "Adjule.jpg",
        "slug": "Adjule"
      },
      {
        "seed": 11,
        "name": "Jackalope",
        "factKey": "Jackalope",
        "image": "Jackalope.jpg",
        "slug": "Jackalope"
      },
      {
        "seed": 12,
        "name": "Mngwa",
        "factKey": "Mngwa",
        "image": "Mngwa.jpg",
        "slug": "Mngwa"
      },
      {
        "seed": 13,
        "name": "Beast of Bladenboro",
        "factKey": "Beast of Bladenboro",
        "image": "Beast of Bladenboro.jpg",
        "slug": "Beast of Bladenboro"
      },
      {
        "seed": 14,
        "name": "Hodag",
        "factKey": "Hodag",
        "image": "Hodag.jpg",
        "slug": "Hodag"
      },
      {
        "seed": 15,
        "name": "American Hyena",
        "factKey": "American Hyena",
        "image": "American Hyena.jpg",
        "slug": "American Hyena"
      },
      {
        "seed": 16,
        "name": "Not-deer",
        "factKey": "Not-deer",
        "image": "Not-deer.jpg",
        "slug": "Not-deer"
      }
    ]
  },
  {
    "name": "Flying Beasts",
    "imageFolder": "Flying Beasts",
    "articleFolder": "flying-beasts",
    "contenders": [
      {
        "seed": 1,
        "name": "Mothman",
        "factKey": "Mothman",
        "image": "Mothman.jpg",
        "slug": "Mothman"
      },
      {
        "seed": 2,
        "name": "Jersey Devil",
        "factKey": "Jersey Devil",
        "image": "Jersey Devil.jpg",
        "slug": "Jersey Devil"
      },
      {
        "seed": 3,
        "name": "Thunderbird",
        "factKey": "Thunderbird",
        "image": "Thunderbird.jpg",
        "slug": "Thunderbird"
      },
      {
        "seed": 4,
        "name": "Ahool",
        "factKey": "Ahool",
        "image": "Ahool.jpg",
        "slug": "Ahool"
      },
      {
        "seed": 5,
        "name": "Kongamato",
        "factKey": "Kongamato",
        "image": "Kongamato.jpg",
        "slug": "Kongamato"
      },
      {
        "seed": 6,
        "name": "Ropen",
        "factKey": "Ropen",
        "image": "Ropen.jpg",
        "slug": "Ropen"
      },
      {
        "seed": 7,
        "name": "Owlman",
        "factKey": "Owlman",
        "image": "Owlman.jpg",
        "slug": "Owlman"
      },
      {
        "seed": 8,
        "name": "Snallygaster",
        "factKey": "Snallygaster",
        "image": "Snallygaster.jpg",
        "slug": "Snallygaster"
      },
      {
        "seed": 9,
        "name": "Van Meter Visitor",
        "factKey": "Van Meter Visitor",
        "image": "Van Meter Visitor.jpg",
        "slug": "Van Meter Visitor"
      },
      {
        "seed": 10,
        "name": "Texas Pterodactyl",
        "factKey": "Texas Pterodactyl",
        "image": "Texas Pterodactyl.jpg",
        "slug": "Texas Pterodactyl"
      },
      {
        "seed": 11,
        "name": "Batsquatch",
        "factKey": "Batsquatch",
        "image": "Batsquatch.jpg",
        "slug": "Batsquatch"
      },
      {
        "seed": 12,
        "name": "Australian Raptor",
        "factKey": "Australian Raptor",
        "image": "Australian Raptor.jpg",
        "slug": "Australian Raptor"
      },
      {
        "seed": 13,
        "name": "La Lechuza",
        "factKey": "La Lechuza",
        "image": "La Lechuza.jpg",
        "slug": "La Lechuza"
      },
      {
        "seed": 14,
        "name": "Kitinga",
        "factKey": "Kitinga",
        "image": "Kitinga.jpg",
        "slug": "Kitinga"
      },
      {
        "seed": 15,
        "name": "Manananggal",
        "factKey": "Manananggal",
        "image": "Manananggal.jpg",
        "slug": "Manananggal"
      },
      {
        "seed": 16,
        "name": "Piasa Bird",
        "factKey": "Piasa Bird",
        "image": "Piasa Bird.jpg",
        "slug": "Piasa Bird"
      }
    ]
  }
];

let state;
let history = [];
let cryptidFacts = {};
let pendingWinner = null;
let popupMode = "confirm";

async function loadCryptidFacts() {
  try {
    const response = await fetch(cryptidFactsPath);
    const text = await response.text();
    const objectText = text.replace(/^\s*const\s+cryptidFacts\s*=\s*/, "").replace(/;\s*$/, "");
    cryptidFacts = JSON.parse(objectText);
  } catch (error) {
    cryptidFacts = {};
  }
}

function hydrateContender(contender, division) {
  const facts = cryptidFacts[contender.factKey] || cryptidFacts[contender.name] || {};

  return {
    ...contender,
    facts,
    division: division.name,
    image: "tournament-pages/cryptids/images/" + division.imageFolder + "/" + contender.image,
    article: "tournament-pages/cryptids/articles/" + division.articleFolder + "/" + contender.slug + ".html"
  };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function createMatch(id, slotA = null, slotB = null) {
  return { id, entrants: [slotA, slotB], winner: null };
}

function buildDivision(division, randomize) {
  const contenders = (randomize ? shuffle(division.contenders) : [...division.contenders])
    .map((contender, index) => ({ ...contender, seed: randomize ? index + 1 : contender.seed }))
    .sort((a, b) => a.seed - b.seed)
    .map((contender) => hydrateContender(contender, division));

  const seeded = seedOrder.map((seed) => contenders.find((contender) => contender.seed === seed));
  const rounds = [[], [], [], []];

  for (let i = 0; i < seeded.length; i += 2) {
    rounds[0].push(createMatch(division.name + "-R1-" + (i / 2 + 1), seeded[i], seeded[i + 1]));
  }

  for (let round = 1; round < rounds.length; round += 1) {
    const matchCount = rounds[round - 1].length / 2;
    for (let i = 0; i < matchCount; i += 1) {
      rounds[round].push(createMatch(division.name + "-R" + (round + 1) + "-" + (i + 1)));
    }
  }

  return { ...division, rounds, champion: null };
}

function buildState(randomize = false) {
  const divisions = divisionData.map((division) => buildDivision(division, randomize));
  const finals = [
    [createMatch("Final-1"), createMatch("Final-2")],
    [createMatch("Championship")]
  ];

  return {
    divisions,
    finals,
    phase: "division",
    divisionIndex: 0,
    roundIndex: 0,
    matchIndex: 0,
    champion: null,
    randomize
  };
}

function currentMatch() {
  if (state.phase === "division") {
    return state.divisions[state.divisionIndex].rounds[state.roundIndex][state.matchIndex];
  }

  return state.finals[state.roundIndex][state.matchIndex];
}

function snapshotState() {
  return JSON.parse(JSON.stringify(state));
}

function restoreState(snapshot) {
  state = snapshot;
  renderMatch();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function divisionRoundName(roundIndex) {
  return divisionRoundNames[roundIndex] || "Division Round";
}

function finalRoundName(roundIndex) {
  return finalRoundNames[roundIndex] || "Final Round";
}

function getRoundLabel() {
  if (state.phase === "division") {
    const division = state.divisions[state.divisionIndex];
    return division.name + " - " + divisionRoundName(state.roundIndex);
  }

  return finalRoundName(state.roundIndex);
}

function renderContenderCard(contender, index) {
  const facts = contender.facts || {};

  return `
    <button class="dino-card cryptid-card" type="button" data-index="${index}">
      <img src="${escapeHtml(contender.image)}" alt="${escapeHtml(contender.name)}">
      <span class="seed">#${contender.seed}</span>
      <h2>${escapeHtml(contender.name)}</h2>
      <p><strong>Division:</strong> ${escapeHtml(contender.division)}</p>
      <p><strong>Cryptid File:</strong> ${escapeHtml(facts.About || "Choose this cryptid to advance it in the bracket.")}</p>
      <a class="learn-more" href="${escapeHtml(contender.article)}" target="_blank" rel="noreferrer">Learn More</a>
    </button>
  `;
}

function renderChampion() {
  const champion = state.champion;
  roundKicker.textContent = "Cryptid Bracket Champion";
  title.textContent = champion.name + " wins the Cryptid Bracket";
  instructions.textContent = "Restart the tournament to play again or review the completed bracket below.";
  matchupContainer.innerHTML = `
    <article class="champion-card cryptid-champion-card">
      <img src="${escapeHtml(champion.image)}" alt="${escapeHtml(champion.name)}">
      <p class="kicker">Champion</p>
      <h2>${escapeHtml(champion.name)}</h2>
      <p>${escapeHtml(champion.name)} outlasted the legends and claimed the cryptid crown.</p>
      <a class="button button-primary" href="${escapeHtml(champion.article)}" target="_blank" rel="noreferrer">Learn More</a>
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

  const match = currentMatch();
  const [left, right] = match.entrants;

  roundKicker.textContent = getRoundLabel();
  title.textContent = left.name + " vs " + right.name;
  instructions.textContent = "Click on your favorite cryptid to advance it to the next round.";
  matchupContainer.innerHTML = renderContenderCard(left, 0) + renderContenderCard(right, 1);
  previousButton.disabled = history.length === 0;
  renderBracket();
}

function advanceFinalsWinner(winner) {
  if (state.roundIndex === 0) {
    state.finals[1][0].entrants[state.matchIndex] = winner;
  } else {
    state.champion = winner;
  }
}

function advanceDivisionWinner(winner) {
  const division = state.divisions[state.divisionIndex];

  if (state.roundIndex < division.rounds.length - 1) {
    const nextMatchIndex = Math.floor(state.matchIndex / 2);
    const nextSlot = state.matchIndex % 2;
    division.rounds[state.roundIndex + 1][nextMatchIndex].entrants[nextSlot] = winner;
  } else {
    division.champion = winner;
    const finalSlot = state.divisionIndex;

    if (finalSlot < 2) {
      state.finals[0][0].entrants[finalSlot] = winner;
    } else {
      state.finals[0][1].entrants[finalSlot - 2] = winner;
    }
  }
}

function moveToNextMatch() {
  if (state.phase === "division") {
    const division = state.divisions[state.divisionIndex];
    const round = division.rounds[state.roundIndex];

    if (state.matchIndex < round.length - 1) {
      state.matchIndex += 1;
      return;
    }

    if (state.roundIndex < division.rounds.length - 1) {
      state.roundIndex += 1;
      state.matchIndex = 0;
      return;
    }

    if (state.divisionIndex < state.divisions.length - 1) {
      state.divisionIndex += 1;
      state.roundIndex = 0;
      state.matchIndex = 0;
      return;
    }

    state.phase = "finals";
    state.roundIndex = 0;
    state.matchIndex = 0;
    return;
  }

  const round = state.finals[state.roundIndex];

  if (state.matchIndex < round.length - 1) {
    state.matchIndex += 1;
    return;
  }

  if (state.roundIndex < state.finals.length - 1) {
    state.roundIndex += 1;
    state.matchIndex = 0;
  }
}

function chooseWinner(index) {
  const match = currentMatch();
  const winner = match.entrants[index];

  history.push(snapshotState());
  match.winner = winner;
  pendingWinner = winner;

  if (state.phase === "division") {
    const division = state.divisions[state.divisionIndex];
    const isDivisionFinal = state.roundIndex === division.rounds.length - 1;
    advanceDivisionWinner(winner);

    if (isDivisionFinal) {
      popupMode = "division";
      popupMessage.textContent = winner.name + " has won the " + division.name + " division and will advance to the Phantom Four!";
      popup.classList.remove("hidden");
      renderBracket();
      return;
    }
  } else {
    advanceFinalsWinner(winner);
  }

  popupMode = "confirm";
  popupMessage.textContent = "Advance " + winner.name + "?";
  popup.classList.remove("hidden");
  renderBracket();
}

function handleNext() {
  popup.classList.add("hidden");
  pendingWinner = null;

  if (popupMode === "confirm" || popupMode === "division") {
    moveToNextMatch();
  }

  popupMode = "confirm";
  renderMatch();
}

function undoMatch() {
  const snapshot = history.pop();
  if (!snapshot) {
    return;
  }

  pendingWinner = null;
  popupMode = "confirm";
  popup.classList.add("hidden");
  restoreState(snapshot);
}

function restartTournament() {
  state = buildState(state.randomize);
  history = [];
  pendingWinner = null;
  popupMode = "confirm";
  popup.classList.add("hidden");
  renderMatch();
}

function renderBracketSlot(contender, winner, isActive) {
  const classes = ["bracket-slot"];
  if (winner && contender && winner.name === contender.name) classes.push("is-winner");
  if (isActive) classes.push("is-active");

  return `
    <div class="${classes.join(" ")}">
      ${contender ? `<span>#${contender.seed}</span>${escapeHtml(contender.name)}` : "TBD"}
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
  const activeMatch = state.champion ? null : currentMatch();
  const divisions = state.divisions.map((division) => `
    <article class="division-bracket">
      <h3>${escapeHtml(division.name)}</h3>
      <div class="bracket-rounds">
        ${division.rounds.map((round, index) => `
          <section class="bracket-round">
            <h4>${escapeHtml(divisionRoundName(index))}</h4>
            ${round.map((match) => renderBracketMatch(match, activeMatch)).join("")}
          </section>
        `).join("")}
      </div>
    </article>
  `).join("");

  const finals = `
    <article class="division-bracket finals-bracket">
      <h3>Phantom Four</h3>
      <div class="bracket-rounds finals-rounds">
        ${state.finals.map((round, index) => `
          <section class="bracket-round">
            <h4>${escapeHtml(finalRoundName(index))}</h4>
            ${round.map((match) => renderBracketMatch(match, activeMatch)).join("")}
          </section>
        `).join("")}
      </div>
    </article>
  `;

  liveBracket.innerHTML = `<div class="live-bracket-grid">${divisions}${finals}</div>`;
}
async function startTournament(randomize = false) {
  await factsReady;
  state = buildState(randomize);
  history = [];
  intro.classList.add("hidden");
  matchup.classList.remove("hidden");
  renderMatch();
}

document.querySelector("#default-seeds").addEventListener("click", () => { startTournament(false); });
document.querySelector("#random-seeds").addEventListener("click", () => { startTournament(true); });
document.querySelector("#restart-tournament").addEventListener("click", restartTournament);
previousButton.addEventListener("click", undoMatch);

matchupContainer.addEventListener("click", (event) => {
  const articleLink = event.target.closest("a");
  if (articleLink) {
    event.stopPropagation();
    return;
  }

  const card = event.target.closest(".dino-card");
  if (!card) {
    return;
  }

  chooseWinner(Number(card.dataset.index));
});

backButton.addEventListener("click", undoMatch);
nextButton.addEventListener("click", handleNext);

const factsReady = loadCryptidFacts();
