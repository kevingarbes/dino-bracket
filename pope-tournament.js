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
const finalRoundNames = ["Holy Quadrinity", "Championship"];
const popeFactsPath = "tournament-pages/popes/popeFacts.txt";
const divisionData = [
  {
    "name": "Founders & Fathers",
    "articleFolder": "founders-fathers",
    "contenders": [
      {
        "seed": 1,
        "name": "Peter",
        "factKey": "Peter",
        "image": "Peter.png",
        "slug": "Peter"
      },
      {
        "seed": 2,
        "name": "Gregory I",
        "factKey": "Gregory I",
        "image": "Gregory I.png",
        "slug": "Gregory-I"
      },
      {
        "seed": 3,
        "name": "Leo I",
        "factKey": "Leo I",
        "image": "Leo I.png",
        "slug": "Leo-I"
      },
      {
        "seed": 4,
        "name": "Damasus I",
        "factKey": "Damasus I",
        "image": "Damasus I.png",
        "slug": "Damasus-I"
      },
      {
        "seed": 5,
        "name": "Clement I",
        "factKey": "Clement I",
        "image": "Clement I.png",
        "slug": "Clement-I"
      },
      {
        "seed": 6,
        "name": "Sylvester I",
        "factKey": "Sylvester I",
        "image": "Sylvester I.png",
        "slug": "Sylvester-I"
      },
      {
        "seed": 7,
        "name": "Gelasius I",
        "factKey": "Gelasius I",
        "image": "Gelasius I.png",
        "slug": "Gelasius-I"
      },
      {
        "seed": 8,
        "name": "Cornelius",
        "factKey": "Cornelius",
        "image": "Cornelius.png",
        "slug": "Cornelius"
      },
      {
        "seed": 9,
        "name": "Sixtus II",
        "factKey": "Sixtus II",
        "image": "Sixtus II.png",
        "slug": "Sixtus-II"
      },
      {
        "seed": 10,
        "name": "Felix I",
        "factKey": "Felix I",
        "image": "Felix I.png",
        "slug": "Felix-I"
      },
      {
        "seed": 11,
        "name": "Anicetus",
        "factKey": "Anicetus",
        "image": "Anicetus.png",
        "slug": "Anicetus"
      },
      {
        "seed": 12,
        "name": "Victor I",
        "factKey": "Victor I",
        "image": "Victor I.png",
        "slug": "Victor-I"
      },
      {
        "seed": 13,
        "name": "Callixtus I",
        "factKey": "Callixtus I",
        "image": "Callixtus I.png",
        "slug": "Callixtus-I"
      },
      {
        "seed": 14,
        "name": "Pontian",
        "factKey": "Pontian",
        "image": "Pontian.png",
        "slug": "Pontian"
      },
      {
        "seed": 15,
        "name": "Marcellinus",
        "factKey": "Marcellinus",
        "image": "Marcellinus.png",
        "slug": "Marcellinus"
      },
      {
        "seed": 16,
        "name": "Zephyrinus",
        "factKey": "Zephyrinus",
        "image": "Zephyrinus.png",
        "slug": "Zephyrinus"
      }
    ]
  },
  {
    "name": "Medieval Power Players",
    "articleFolder": "medieval-power-players",
    "contenders": [
      {
        "seed": 1,
        "name": "Innocent III",
        "factKey": "Innocent III",
        "image": "Innocent III.png",
        "slug": "Innocent-III"
      },
      {
        "seed": 2,
        "name": "Gregory VII",
        "factKey": "Gregory VII",
        "image": "Gregory VII.png",
        "slug": "Gregory-VII"
      },
      {
        "seed": 3,
        "name": "Urban II",
        "factKey": "Urban II",
        "image": "Urban II.png",
        "slug": "Urban-II"
      },
      {
        "seed": 4,
        "name": "Leo IX",
        "factKey": "Leo IX",
        "image": "Leo IX.png",
        "slug": "Leo-IX"
      },
      {
        "seed": 5,
        "name": "Alexander III",
        "factKey": "Alexander III",
        "image": "Alexander III.png",
        "slug": "Alexander-III"
      },
      {
        "seed": 6,
        "name": "Nicholas II",
        "factKey": "Nicholas II",
        "image": "Nicholas II.png",
        "slug": "Nicholas-II"
      },
      {
        "seed": 7,
        "name": "Sylvester II",
        "factKey": "Sylvester II",
        "image": "Sylvester II.png",
        "slug": "Sylvester-II"
      },
      {
        "seed": 8,
        "name": "Adrian IV",
        "factKey": "Adrian IV",
        "image": "Adrian IV.png",
        "slug": "Adrian-IV"
      },
      {
        "seed": 9,
        "name": "Celestine V",
        "factKey": "Celestine V",
        "image": "Celestine V.png",
        "slug": "Celestine-V"
      },
      {
        "seed": 10,
        "name": "Clement V",
        "factKey": "Clement V",
        "image": "Clement V.png",
        "slug": "Clement-V"
      },
      {
        "seed": 11,
        "name": "Boniface VIII",
        "factKey": "Boniface VIII",
        "image": "Boniface VIII.png",
        "slug": "Boniface-VIII"
      },
      {
        "seed": 12,
        "name": "John XXII",
        "factKey": "John XXII",
        "image": "John XXII.png",
        "slug": "John-XXII"
      },
      {
        "seed": 13,
        "name": "Benedict IX",
        "factKey": "Benedict IX",
        "image": "Benedict IX.png",
        "slug": "Benedict-IX"
      },
      {
        "seed": 14,
        "name": "Stephen VI",
        "factKey": "Stephen VI",
        "image": "Stephen VI.png",
        "slug": "Stephen-VI"
      },
      {
        "seed": 15,
        "name": "Formosus",
        "factKey": "Formosus",
        "image": "Formosus.png",
        "slug": "Formosus"
      },
      {
        "seed": 16,
        "name": "Honorius I",
        "factKey": "Honorius I",
        "image": "Honorius I.png",
        "slug": "Honorius-I"
      }
    ]
  },
  {
    "name": "Reform & Revolution",
    "articleFolder": "reform-revolution",
    "contenders": [
      {
        "seed": 1,
        "name": "Pius V",
        "factKey": "Pius V",
        "image": "Pius V.png",
        "slug": "Pius-V"
      },
      {
        "seed": 2,
        "name": "Paul III",
        "factKey": "Paul III",
        "image": "Paul III.png",
        "slug": "Paul-III"
      },
      {
        "seed": 3,
        "name": "Sixtus V",
        "factKey": "Sixtus V",
        "image": "Sixtus V.png",
        "slug": "Sixtus-V"
      },
      {
        "seed": 4,
        "name": "Gregory XIII",
        "factKey": "Gregory XIII",
        "image": "Gregory XIII.png",
        "slug": "Gregory-XIII"
      },
      {
        "seed": 5,
        "name": "Clement VIII",
        "factKey": "Clement VIII",
        "image": "Clement VIII.png",
        "slug": "Clement-VIII"
      },
      {
        "seed": 6,
        "name": "Urban VIII",
        "factKey": "Urban VIII",
        "image": "Urban VIII.png",
        "slug": "Urban-VIII"
      },
      {
        "seed": 7,
        "name": "Leo XI",
        "factKey": "Leo XI",
        "image": "Leo XI.png",
        "slug": "Leo-XI"
      },
      {
        "seed": 8,
        "name": "Pius III",
        "factKey": "Pius III",
        "image": "Pius III.png",
        "slug": "Pius-III"
      },
      {
        "seed": 9,
        "name": "Benedict XIV",
        "factKey": "Benedict XIV",
        "image": "Benedict XIV.png",
        "slug": "Benedict-XIV"
      },
      {
        "seed": 10,
        "name": "Innocent XI",
        "factKey": "Innocent XI",
        "image": "Innocent XI.png",
        "slug": "Innocent-XI"
      },
      {
        "seed": 11,
        "name": "Benedict XIII",
        "factKey": "Benedict XIII",
        "image": "Benedict XIII.png",
        "slug": "Benedict-XIII"
      },
      {
        "seed": 12,
        "name": "Alexander VI",
        "factKey": "Alexander VI",
        "image": "Alexander VI.png",
        "slug": "Alexander-VI"
      },
      {
        "seed": 13,
        "name": "Julius II",
        "factKey": "Julius II",
        "image": "Julius II.png",
        "slug": "Julius-II"
      },
      {
        "seed": 14,
        "name": "Paul V",
        "factKey": "Paul V",
        "image": "Paul V.png",
        "slug": "Paul-V"
      },
      {
        "seed": 15,
        "name": "Marcellus II",
        "factKey": "Marcellus II",
        "image": "Marcellus II.png",
        "slug": "Marcellus-II"
      },
      {
        "seed": 16,
        "name": "Clement XI",
        "factKey": "Clement XI",
        "image": "Clement XI.png",
        "slug": "Clement-XI"
      }
    ]
  },
  {
    "name": "Modern Era",
    "articleFolder": "modern-era",
    "contenders": [
      {
        "seed": 1,
        "name": "John Paul II",
        "factKey": "John Paul II",
        "image": "John Paul II.png",
        "slug": "John-Paul-II"
      },
      {
        "seed": 2,
        "name": "Francis",
        "factKey": "Francis",
        "image": "Francis.png",
        "slug": "Francis"
      },
      {
        "seed": 3,
        "name": "Pius IX",
        "factKey": "Pius IX",
        "image": "Pius IX.png",
        "slug": "Pius-IX"
      },
      {
        "seed": 4,
        "name": "Benedict XVI",
        "factKey": "Benedict XVI",
        "image": "Benedict XVI.png",
        "slug": "Benedict-XVI"
      },
      {
        "seed": 5,
        "name": "Leo XIII",
        "factKey": "Leo XIII",
        "image": "Leo XIII.png",
        "slug": "Leo-XIII"
      },
      {
        "seed": 6,
        "name": "John XXIII",
        "factKey": "John XXIII",
        "image": "John XXIII.png",
        "slug": "John-XXIII"
      },
      {
        "seed": 7,
        "name": "Paul VI",
        "factKey": "Paul VI",
        "image": "Paul VI.png",
        "slug": "Paul-VI"
      },
      {
        "seed": 8,
        "name": "Pius X",
        "factKey": "Pius X",
        "image": "Pius X.png",
        "slug": "Pius-X"
      },
      {
        "seed": 9,
        "name": "Pius XII",
        "factKey": "Pius XII",
        "image": "Pius XII.png",
        "slug": "Pius-XII"
      },
      {
        "seed": 10,
        "name": "Pius XI",
        "factKey": "Pius XI",
        "image": "Pius XI.png",
        "slug": "Pius-XI"
      },
      {
        "seed": 11,
        "name": "Pius VII",
        "factKey": "Pius VII",
        "image": "Pius VII.png",
        "slug": "Pius-VII"
      },
      {
        "seed": 12,
        "name": "John Paul I",
        "factKey": "John Paul I",
        "image": "John Paul I.png",
        "slug": "John-Paul-I"
      },
      {
        "seed": 13,
        "name": "Clement XIV",
        "factKey": "Clement XIV",
        "image": "Clement XIV.png",
        "slug": "Clement-XIV"
      },
      {
        "seed": 14,
        "name": "Gregory XVI",
        "factKey": "Gregory XVI",
        "image": "Gregory XVI.png",
        "slug": "Gregory-XVI"
      },
      {
        "seed": 15,
        "name": "Leo XII",
        "factKey": "Leo XII",
        "image": "Leo XII.png",
        "slug": "Leo-XII"
      },
      {
        "seed": 16,
        "name": "Benedict XV",
        "factKey": "Benedict XV",
        "image": "Benedict XV.png",
        "slug": "Benedict-XV"
      }
    ]
  }
];

let popeFacts = {};
let state = null;
let history = [];
let pendingWinner = null;
let popupMode = "confirm";

async function loadPopeFacts() {
  try {
    const response = await fetch(popeFactsPath);
    const text = await response.text();
    const objectText = text.replace(/^\s*const\s+popeFacts\s*=\s*/, "").replace(/;\s*$/, "");
    popeFacts = JSON.parse(objectText);
  } catch (error) {
    popeFacts = {};
  }
}

function papacyFromAbout(about) {
  const match = String(about || "").match(/Served as Pope from ([^.]+)\./);
  return match ? match[1] : "Notable papacy";
}

function hydrateContender(contender, division) {
  const facts = popeFacts[contender.factKey] || popeFacts[contender.name] || {};

  return {
    ...contender,
    facts,
    division: division.name,
    papacy: papacyFromAbout(facts.About),
    image: "tournament-pages/popes/images/popes/" + contender.image,
    article: "/" + contender.slug + "/"
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
    <button class="dino-card pope-card" type="button" data-index="${index}">
      <img src="${escapeHtml(contender.image)}" alt="${escapeHtml(contender.name)}">
      <span class="seed">#${contender.seed}</span>
      <h2>${escapeHtml(contender.name)}</h2>
      <p><strong>Division:</strong> ${escapeHtml(contender.division)}</p>
      <p><strong>Papacy:</strong> ${escapeHtml(contender.papacy)}</p>
      <p><strong>About:</strong> ${escapeHtml(facts.About || "Choose this pope to advance him in the bracket.")}</p>
      <a class="learn-more" href="${escapeHtml(contender.article)}" target="_blank" rel="noreferrer">Learn More</a>
    </button>
  `;
}

function renderChampion() {
  const champion = state.champion;
  roundKicker.textContent = "Pope Bracket Champion";
  title.textContent = champion.name + " wins the Pope Bracket";
  instructions.textContent = "Restart the tournament to play again or review the completed bracket below.";
  matchupContainer.innerHTML = `
    <article class="champion-card pope-champion-card">
      <img src="${escapeHtml(champion.image)}" alt="${escapeHtml(champion.name)}">
      <p class="kicker">Champion</p>
      <h2>${escapeHtml(champion.name)}</h2>
      <p>${escapeHtml(champion.name)} advanced through the full bracket and claimed the papal crown.</p>
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
  instructions.textContent = "Click on your favorite pope to advance him to the next round.";
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
    state.finals[0][Math.floor(finalSlot / 2)].entrants[finalSlot % 2] = winner;
  }
}

function moveToNextMatch() {
  if (state.champion) {
    return;
  }

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
      popupMessage.textContent = winner.name + " has won the " + division.name + " division and will advance to the Holy Quadrinity!";
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
      <h3>Holy Quadrinity</h3>
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

const factsReady = loadPopeFacts();
