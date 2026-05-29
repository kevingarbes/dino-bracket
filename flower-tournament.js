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
const finalRoundNames = ["Fresh Four", "Championship"];
const flowerFactsPath = "tournament-pages/flowers/flowerFacts.txt";
const divisionData = [
  {
    "name": "Annuals",
    "imageFolder": "Annuals",
    "articleFolder": "annuals",
    "contenders": [
      {
        "seed": 1,
        "name": "Marigold",
        "factKey": "Marigold",
        "image": "Marigold.jpg",
        "slug": "Marigold"
      },
      {
        "seed": 2,
        "name": "Petunia",
        "factKey": "Petunia",
        "image": "Petunia.jpg",
        "slug": "Petunia"
      },
      {
        "seed": 3,
        "name": "Sunflower",
        "factKey": "Sunflower",
        "image": "Sunflower.jpg",
        "slug": "Sunflower"
      },
      {
        "seed": 4,
        "name": "Pansy",
        "factKey": "Pansy",
        "image": "Pansy.jpg",
        "slug": "Pansy"
      },
      {
        "seed": 5,
        "name": "Impatiens",
        "factKey": "Impatiens",
        "image": "Impatiens.jpg",
        "slug": "Impatiens"
      },
      {
        "seed": 6,
        "name": "Geranium",
        "factKey": "Geranium",
        "image": "Geranium.jpg",
        "slug": "Geranium"
      },
      {
        "seed": 7,
        "name": "Begonia",
        "factKey": "Begonia",
        "image": "Begonia.jpg",
        "slug": "Begonia"
      },
      {
        "seed": 8,
        "name": "Zinnia",
        "factKey": "Zinnia",
        "image": "Zinnia.jpg",
        "slug": "Zinnia"
      },
      {
        "seed": 9,
        "name": "Snapdragon",
        "factKey": "Snapdragon",
        "image": "Snapdragon.jpg",
        "slug": "Snapdragon"
      },
      {
        "seed": 10,
        "name": "Sweet Pea",
        "factKey": "Sweet Pea",
        "image": "Sweet Pea.jpg",
        "slug": "Sweet-Pea"
      },
      {
        "seed": 11,
        "name": "Nasturtium",
        "factKey": "Nasturtium",
        "image": "Nasturtium.jpg",
        "slug": "Nasturtium"
      },
      {
        "seed": 12,
        "name": "Morning Glory",
        "factKey": "Morning Glory",
        "image": "Morning Glory.jpg",
        "slug": "Morning-Glory"
      },
      {
        "seed": 13,
        "name": "California Poppy",
        "factKey": "California Poppy",
        "image": "California Poppy.jpg",
        "slug": "California-Poppy"
      },
      {
        "seed": 14,
        "name": "Bluebonnet",
        "factKey": "Bluebonnet",
        "image": "Bluebonnet.jpg",
        "slug": "Bluebonnet"
      },
      {
        "seed": 15,
        "name": "Sweet Alyssum",
        "factKey": "Sweet Alyssum",
        "image": "Sweet Alyssum.jpg",
        "slug": "Sweet-Alyssum"
      },
      {
        "seed": 16,
        "name": "Cornflower",
        "factKey": "Cornflower",
        "image": "Cornflower.jpg",
        "slug": "Cornflower"
      }
    ]
  },
  {
    "name": "Perennials",
    "imageFolder": "Perennials",
    "articleFolder": "perennials",
    "contenders": [
      {
        "seed": 1,
        "name": "Rose",
        "factKey": "Rose",
        "image": "Rose.jpg",
        "slug": "Rose"
      },
      {
        "seed": 2,
        "name": "Tulip",
        "factKey": "Tulip",
        "image": "Tulip.jpg",
        "slug": "Tulip"
      },
      {
        "seed": 3,
        "name": "Daffodil",
        "factKey": "Daffodil",
        "image": "Daffodil.jpg",
        "slug": "Daffodil"
      },
      {
        "seed": 4,
        "name": "Hydrangea",
        "factKey": "Hydrangea",
        "image": "Hydrangea.jpg",
        "slug": "Hydrangea"
      },
      {
        "seed": 5,
        "name": "Shasta Daisy",
        "factKey": "Shasta Daisy",
        "image": "Shasta Daisy.jpg",
        "slug": "Shasta-Daisy"
      },
      {
        "seed": 6,
        "name": "Lily",
        "factKey": "Lily",
        "image": "Lily.jpg",
        "slug": "Lily"
      },
      {
        "seed": 7,
        "name": "Lavender",
        "factKey": "Lavender",
        "image": "Lavender.jpg",
        "slug": "Lavender"
      },
      {
        "seed": 8,
        "name": "Peony",
        "factKey": "Peony",
        "image": "Peony.jpg",
        "slug": "Peony"
      },
      {
        "seed": 9,
        "name": "Iris",
        "factKey": "Iris",
        "image": "Iris.jpg",
        "slug": "Iris"
      },
      {
        "seed": 10,
        "name": "Daylily",
        "factKey": "Daylily",
        "image": "Daylily.jpg",
        "slug": "Daylily"
      },
      {
        "seed": 11,
        "name": "Dahlia",
        "factKey": "Dahlia",
        "image": "Dahlia.jpg",
        "slug": "Dahlia"
      },
      {
        "seed": 12,
        "name": "Chrysanthemum",
        "factKey": "Chrysanthemum",
        "image": "Chrysanthemum.jpg",
        "slug": "Chrysanthemum"
      },
      {
        "seed": 13,
        "name": "Coneflower",
        "factKey": "Coneflower",
        "image": "Coneflower.jpg",
        "slug": "Coneflower"
      },
      {
        "seed": 14,
        "name": "Columbine",
        "factKey": "Columbine",
        "image": "Columbine.jpg",
        "slug": "Columbine"
      },
      {
        "seed": 15,
        "name": "Milkweed",
        "factKey": "Milkweed",
        "image": "Milkweed.jpg",
        "slug": "Milkweed"
      },
      {
        "seed": 16,
        "name": "Bleeding Heart",
        "factKey": "Bleeding Heart",
        "image": "Bleeding Heart.jpg",
        "slug": "Bleeding-Heart"
      }
    ]
  },
  {
    "name": "Biennials",
    "imageFolder": "Biennials",
    "articleFolder": "biennials",
    "contenders": [
      {
        "seed": 1,
        "name": "Forget-Me-Not",
        "factKey": "Forget-Me-Not",
        "image": "Forget-Me-Not.jpg",
        "slug": "Forget-Me-Not"
      },
      {
        "seed": 2,
        "name": "Evening Primrose",
        "factKey": "Evening Primrose",
        "image": "Evening Primrose.jpg",
        "slug": "Evening-Primrose"
      },
      {
        "seed": 3,
        "name": "Foxglove",
        "factKey": "Foxglove",
        "image": "Foxglove.jpg",
        "slug": "Foxglove"
      },
      {
        "seed": 4,
        "name": "Hollyhock",
        "factKey": "Hollyhock",
        "image": "Hollyhock.jpg",
        "slug": "Hollyhock"
      },
      {
        "seed": 5,
        "name": "Sweet William",
        "factKey": "Sweet William",
        "image": "Sweet William.jpg",
        "slug": "Sweet-William"
      },
      {
        "seed": 6,
        "name": "Canterbury Bells",
        "factKey": "Canterbury Bells",
        "image": "Canterbury Bells.jpg",
        "slug": "Canterbury-Bells"
      },
      {
        "seed": 7,
        "name": "Black-Eyed Susan",
        "factKey": "Black-Eyed Susan",
        "image": "Black-Eyed Susan.jpg",
        "slug": "Black-Eyed-Susan"
      },
      {
        "seed": 8,
        "name": "Honesty",
        "factKey": "Honesty",
        "image": "Honesty.jpg",
        "slug": "Honesty"
      },
      {
        "seed": 9,
        "name": "Sweet Rocket",
        "factKey": "Sweet Rocket",
        "image": "Sweet Rocket.jpg",
        "slug": "Sweet-Rocket"
      },
      {
        "seed": 10,
        "name": "Queen Anne’s Lace",
        "factKey": "Queen Anne’s Lace",
        "image": "Queen Anne’s Lace.jpg",
        "slug": "Queen-Annes-Lace"
      },
      {
        "seed": 11,
        "name": "Wallflower",
        "factKey": "Wallflower",
        "image": "Wallflower.jpg",
        "slug": "Wallflower"
      },
      {
        "seed": 12,
        "name": "Teasel",
        "factKey": "Teasel",
        "image": "Teasel.jpg",
        "slug": "Teasel"
      },
      {
        "seed": 13,
        "name": "Angelica",
        "factKey": "Angelica",
        "image": "Angelica.jpg",
        "slug": "Angelica"
      },
      {
        "seed": 14,
        "name": "Cow Parsnip",
        "factKey": "Cow Parsnip",
        "image": "Cow Parsnip.jpg",
        "slug": "Cow-Parsnip"
      },
      {
        "seed": 15,
        "name": "Mullein",
        "factKey": "Mullein",
        "image": "Mullein.jpg",
        "slug": "Mullein"
      },
      {
        "seed": 16,
        "name": "Iceland Poppy",
        "factKey": "Iceland Poppy",
        "image": "Iceland Poppy.jpg",
        "slug": "Iceland-Poppy"
      }
    ]
  },
  {
    "name": "Ephemerals",
    "imageFolder": "Ephemerals",
    "articleFolder": "ephemerals",
    "contenders": [
      {
        "seed": 1,
        "name": "Virginia Bluebells",
        "factKey": "Virginia Bluebells",
        "image": "Virginia Bluebells.jpg",
        "slug": "Virginia-Bluebells"
      },
      {
        "seed": 2,
        "name": "Dutchman’s Breeches",
        "factKey": "Dutchman’s Breeches",
        "image": "Dutchman’s Breeches.jpg",
        "slug": "Dutchmans-Breeches"
      },
      {
        "seed": 3,
        "name": "Bloodroot",
        "factKey": "Bloodroot",
        "image": "Bloodroot.jpg",
        "slug": "Bloodroot"
      },
      {
        "seed": 4,
        "name": "Spring Beauty",
        "factKey": "Spring Beauty",
        "image": "Spring Beauty.jpg",
        "slug": "Spring-Beauty"
      },
      {
        "seed": 5,
        "name": "Trout Lily",
        "factKey": "Trout Lily",
        "image": "Trout Lily.JPG",
        "slug": "Trout-Lily"
      },
      {
        "seed": 6,
        "name": "Red Trillium",
        "factKey": "Red Trillium",
        "image": "Red Trillium.jpg",
        "slug": "Red-Trillium"
      },
      {
        "seed": 7,
        "name": "Lily-of-the-Valley",
        "factKey": "Lily-of-the-Valley",
        "image": "Lily-of-the-Valley.jpg",
        "slug": "Lily-of-the-Valley"
      },
      {
        "seed": 8,
        "name": "Crocus",
        "factKey": "Crocus",
        "image": "Crocus.jpg",
        "slug": "Crocus"
      },
      {
        "seed": 9,
        "name": "Snowdrop",
        "factKey": "Snowdrop",
        "image": "Snowdrop.jpg",
        "slug": "Snowdrop"
      },
      {
        "seed": 10,
        "name": "Desert Sunflower",
        "factKey": "Desert Sunflower",
        "image": "Desert Sunflower.jpg",
        "slug": "Desert-Sunflower"
      },
      {
        "seed": 11,
        "name": "Starflower",
        "factKey": "Starflower",
        "image": "Starflower.jpg",
        "slug": "Starflower"
      },
      {
        "seed": 12,
        "name": "Shooting Star",
        "factKey": "Shooting Star",
        "image": "Shooting Star.jpg",
        "slug": "Shooting-Star"
      },
      {
        "seed": 13,
        "name": "Hepatica",
        "factKey": "Hepatica",
        "image": "Hepatica.jpg",
        "slug": "Hepatica"
      },
      {
        "seed": 14,
        "name": "Pasque Flower",
        "factKey": "Pasque Flower",
        "image": "Pasque Flower.jpg",
        "slug": "Pasque-Flower"
      },
      {
        "seed": 15,
        "name": "Jack-in-the-Pulpit",
        "factKey": "Jack-in-the-Pulpit",
        "image": "Jack-in-the-Pulpit.jpg",
        "slug": "Jack-in-the-Pulpit"
      },
      {
        "seed": 16,
        "name": "Sand Verbena",
        "factKey": "Sand Verbena",
        "image": "Sand Verbena.jpg",
        "slug": "Sand-Verbena"
      }
    ]
  }
];

let state;
let history = [];
let flowerFacts = {};
let pendingWinner = null;
let popupMode = "confirm";

async function loadFlowerFacts() {
  try {
    const response = await fetch(flowerFactsPath);
    const text = await response.text();
    const objectText = text.replace(/^\s*const\s+flowerFacts\s*=\s*/, "").replace(/;\s*$/, "");
    flowerFacts = JSON.parse(objectText);
  } catch (error) {
    flowerFacts = {};
  }
}

function hydrateContender(contender, division) {
  const facts = flowerFacts[contender.factKey] || flowerFacts[contender.name] || {};

  return {
    ...contender,
    facts,
    division: division.name,
    image: "tournament-pages/flowers/images/" + division.imageFolder + "/" + contender.image,
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
    <button class="dino-card flower-card" type="button" data-index="${index}">
      <img src="${escapeHtml(contender.image)}" alt="${escapeHtml(contender.name)}">
      <span class="seed">#${contender.seed}</span>
      <h2>${escapeHtml(contender.name)}</h2>
      <p><strong>Division:</strong> ${escapeHtml(contender.division)}</p>
      <p><strong>About:</strong> ${escapeHtml(facts.About || "Choose this flower to advance it in the bracket.")}</p>
      <a class="learn-more" href="${escapeHtml(contender.article)}" target="_blank" rel="noreferrer">Learn More</a>
    </button>
  `;
}

function renderChampion() {
  const champion = state.champion;
  roundKicker.textContent = "Flower Bracket Champion";
  title.textContent = champion.name + " wins the Flower Bracket";
  instructions.textContent = "Restart the tournament to play again or review the completed bracket below.";
  matchupContainer.innerHTML = `
    <article class="champion-card flower-champion-card">
      <img src="${escapeHtml(champion.image)}" alt="${escapeHtml(champion.name)}">
      <p class="kicker">Champion</p>
      <h2>${escapeHtml(champion.name)}</h2>
      <p>${escapeHtml(champion.name)} bloomed through the full bracket and claimed the crown.</p>
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
  instructions.textContent = "Click on your favorite flower to advance it to the next round.";
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
      popupMessage.textContent = winner.name + " has won the " + division.name + " division and will advance to the Fresh Four!";
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
      <h3>Fresh Four</h3>
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

const factsReady = loadFlowerFacts();

