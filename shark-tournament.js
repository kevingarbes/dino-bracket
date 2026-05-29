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
const finalRoundNames = ["FIN-al Four", "Championship"];
const sharkFactsPath = "tournament-pages/sharks/sharkFacts.txt";
const divisionData = [
  {
    "name": "Coastal Killers",
    "imageFolder": "Coastal Killers",
    "articleFolder": "coastal-killers",
    "contenders": [
      {
        "seed": 1,
        "name": "Tiger Shark",
        "factKey": "Tiger Shark",
        "image": "Tiger Shark.jpg",
        "slug": "Tiger-Shark"
      },
      {
        "seed": 2,
        "name": "Bull Shark",
        "factKey": "Bull Shark",
        "image": "Bull Shark.jpg",
        "slug": "Bull-Shark"
      },
      {
        "seed": 3,
        "name": "Great Hammerhead Shark",
        "factKey": "Great Hammerhead Shark",
        "image": "Great Hammerhead Shark.jpg",
        "slug": "Great-Hammerhead-Shark"
      },
      {
        "seed": 4,
        "name": "Sand Tiger Shark",
        "factKey": "Sand Tiger Shark",
        "image": "Sand Tiger Shark.jpg",
        "slug": "Sand-Tiger-Shark"
      },
      {
        "seed": 5,
        "name": "Lemon Shark",
        "factKey": "Lemon Shark",
        "image": "Lemon Shark.jpg",
        "slug": "Lemon-Shark"
      },
      {
        "seed": 6,
        "name": "Blacktip Reef Shark",
        "factKey": "Blacktip Reef Shark",
        "image": "Blacktip Reef Shark.jpg",
        "slug": "Blacktip-Reef-Shark"
      },
      {
        "seed": 7,
        "name": "Caribbean Reef Shark",
        "factKey": "Caribbean Reef Shark",
        "image": "Caribbean Reef Shark.jpg",
        "slug": "Caribbean-Reef-Shark"
      },
      {
        "seed": 8,
        "name": "Whitetip Reef Shark",
        "factKey": "Whitetip Reef Shark",
        "image": "Whitetip Reef Shark.jpg",
        "slug": "Whitetip-Reef-Shark"
      },
      {
        "seed": 9,
        "name": "Blacktip Shark",
        "factKey": "Blacktip Shark",
        "image": "Blacktip Shark.jpg",
        "slug": "Blacktip-Shark"
      },
      {
        "seed": 10,
        "name": "Galapagos Shark",
        "factKey": "Galapagos Shark",
        "image": "Galapagos Shark.jpg",
        "slug": "Galapagos-Shark"
      },
      {
        "seed": 11,
        "name": "Bonnethead Shark",
        "factKey": "Bonnethead Shark",
        "image": "Bonnethead Shark.jpg",
        "slug": "Bonnethead-Shark"
      },
      {
        "seed": 12,
        "name": "Grey Reef Shark",
        "factKey": "Grey Reef Shark",
        "image": "Grey Reef Shark.jpg",
        "slug": "Grey-Reef-Shark"
      },
      {
        "seed": 13,
        "name": "Horn Shark",
        "factKey": "Horn Shark",
        "image": "Horn Shark.jpg",
        "slug": "Horn-Shark"
      },
      {
        "seed": 14,
        "name": "Spinner Shark",
        "factKey": "Spinner Shark",
        "image": "Spinner Shark.jpg",
        "slug": "Spinner-Shark"
      },
      {
        "seed": 15,
        "name": "Broadnose Sevengill Shark",
        "factKey": "Broadnose Sevengill Shark",
        "image": "Broadnose Sevengill Shark.jpg",
        "slug": "Broadnose-Sevengill-Shark"
      },
      {
        "seed": 16,
        "name": "Port Jackson Shark",
        "factKey": "Port Jackson Shark",
        "image": "Port Jackson Shark.jpg",
        "slug": "Port-Jackson-Shark"
      }
    ]
  },
  {
    "name": "Pelagic Predators",
    "imageFolder": "Pelagic Predators",
    "articleFolder": "pelagic-predators",
    "contenders": [
      {
        "seed": 1,
        "name": "Great White Shark",
        "factKey": "Great White Shark",
        "image": "Great White Shark.jpg",
        "slug": "Great-White-Shark"
      },
      {
        "seed": 2,
        "name": "Whale Shark",
        "factKey": "Whale Shark",
        "image": "Whale Shark.jpg",
        "slug": "Whale-Shark"
      },
      {
        "seed": 3,
        "name": "Shortfin Mako Shark",
        "factKey": "Shortfin Mako Shark",
        "image": "Shortfin Mako Shark.jpg",
        "slug": "Shortfin-Mako-Shark"
      },
      {
        "seed": 4,
        "name": "Blue Shark",
        "factKey": "Blue Shark",
        "image": "Blue Shark.jpg",
        "slug": "Blue-Shark"
      },
      {
        "seed": 5,
        "name": "Oceanic Whitetip Shark",
        "factKey": "Oceanic Whitetip Shark",
        "image": "Oceanic Whitetip Shark.jpg",
        "slug": "Oceanic-Whitetip-Shark"
      },
      {
        "seed": 6,
        "name": "Basking Shark",
        "factKey": "Basking Shark",
        "image": "Basking Shark.jpg",
        "slug": "Basking-Shark"
      },
      {
        "seed": 7,
        "name": "Common Thresher Shark",
        "factKey": "Common Thresher Shark",
        "image": "Common Thresher Shark.jpg",
        "slug": "Common-Thresher-Shark"
      },
      {
        "seed": 8,
        "name": "Scalloped Hammerhead Shark",
        "factKey": "Scalloped Hammerhead Shark",
        "image": "Scalloped Hammerhead Shark.jpg",
        "slug": "Scalloped-Hammerhead-Shark"
      },
      {
        "seed": 9,
        "name": "Silky Shark",
        "factKey": "Silky Shark",
        "image": "Silky Shark.jpg",
        "slug": "Silky-Shark"
      },
      {
        "seed": 10,
        "name": "Salmon Shark",
        "factKey": "Salmon Shark",
        "image": "Salmon Shark.jpg",
        "slug": "Salmon-Shark"
      },
      {
        "seed": 11,
        "name": "Porbeagle Shark",
        "factKey": "Porbeagle Shark",
        "image": "Porbeagle Shark.jpg",
        "slug": "Porbeagle-Shark"
      },
      {
        "seed": 12,
        "name": "Dusky Shark",
        "factKey": "Dusky Shark",
        "image": "Dusky Shark.jpg",
        "slug": "Dusky-Shark"
      },
      {
        "seed": 13,
        "name": "Silvertip Shark",
        "factKey": "Silvertip Shark",
        "image": "Silvertip Shark.jpg",
        "slug": "Silvertip-Shark"
      },
      {
        "seed": 14,
        "name": "Longfin Mako Shark",
        "factKey": "Longfin Mako Shark",
        "image": "Longfin Mako Shark.jpg",
        "slug": "Longfin-Mako-Shark"
      },
      {
        "seed": 15,
        "name": "Crocodile Shark",
        "factKey": "Crocodile Shark",
        "image": "Crocodile Shark.jpg",
        "slug": "Crocodile-Shark"
      },
      {
        "seed": 16,
        "name": "Bronze Whaler Shark",
        "factKey": "Bronze Whaler Shark",
        "image": "Bronze Whaler Shark.jpg",
        "slug": "Bronze-Whaler-Shark"
      }
    ]
  },
  {
    "name": "Deep Water Demons",
    "imageFolder": "Deep Water Demons",
    "articleFolder": "deep-water-demons",
    "contenders": [
      {
        "seed": 1,
        "name": "Goblin Shark",
        "factKey": "Goblin Shark",
        "image": "Goblin Shark.jpg",
        "slug": "Goblin-Shark"
      },
      {
        "seed": 2,
        "name": "Frilled Shark",
        "factKey": "Frilled Shark",
        "image": "Frilled Shark.jpg",
        "slug": "Frilled-Shark"
      },
      {
        "seed": 3,
        "name": "Megamouth Shark",
        "factKey": "Megamouth Shark",
        "image": "Megamouth Shark.jpg",
        "slug": "Megamouth-Shark"
      },
      {
        "seed": 4,
        "name": "Greenland Shark",
        "factKey": "Greenland Shark",
        "image": "Greenland Shark.jpg",
        "slug": "Greenland-Shark"
      },
      {
        "seed": 5,
        "name": "Cookiecutter Shark",
        "factKey": "Cookiecutter Shark",
        "image": "Cookiecutter Shark.jpg",
        "slug": "Cookiecutter-Shark"
      },
      {
        "seed": 6,
        "name": "Bluntnose Sixgill Shark",
        "factKey": "Bluntnose Sixgill Shark",
        "image": "Bluntnose Sixgill Shark.jpg",
        "slug": "Bluntnose-Sixgill-Shark"
      },
      {
        "seed": 7,
        "name": "Angular Roughshark",
        "factKey": "Angular Roughshark",
        "image": "Angular Roughshark.jpg",
        "slug": "Angular-Roughshark"
      },
      {
        "seed": 8,
        "name": "False Catshark",
        "factKey": "False Catshark",
        "image": "False Catshark.jpg",
        "slug": "False-Catshark"
      },
      {
        "seed": 9,
        "name": "Dwarf Lanternshark",
        "factKey": "Dwarf Lanternshark",
        "image": "Dwarf Lanternshark.jpg",
        "slug": "Dwarf-Lanternshark"
      },
      {
        "seed": 10,
        "name": "Viper Dogfish",
        "factKey": "Viper Dogfish",
        "image": "Viper Dogfish.jpg",
        "slug": "Viper-Dogfish"
      },
      {
        "seed": 11,
        "name": "Ninja Lanternshark",
        "factKey": "Ninja Lanternshark",
        "image": "Ninja Lanternshark.jpg",
        "slug": "Ninja-Lanternshark"
      },
      {
        "seed": 12,
        "name": "Pacific Sleeper Shark",
        "factKey": "Pacific Sleeper Shark",
        "image": "Pacific Sleeper Shark.jpg",
        "slug": "Pacific-Sleeper-Shark"
      },
      {
        "seed": 13,
        "name": "Japanese Sawshark",
        "factKey": "Japanese Sawshark",
        "image": "Japanese Sawshark.jpg",
        "slug": "Japanese-Sawshark"
      },
      {
        "seed": 14,
        "name": "American Pocket Shark",
        "factKey": "American Pocket Shark",
        "image": "American Pocket Shark.jpg",
        "slug": "American-Pocket-Shark"
      },
      {
        "seed": 15,
        "name": "Swell Shark",
        "factKey": "Swell Shark",
        "image": "Swell Shark.jpg",
        "slug": "Swell-Shark"
      },
      {
        "seed": 16,
        "name": "Velvet Belly Lanternshark",
        "factKey": "Velvet Belly Lanternshark",
        "image": "Velvet Belly Lanternshark.jpg",
        "slug": "Velvet-Belly-Lanternshark"
      }
    ]
  },
  {
    "name": "Carpet Sharks",
    "imageFolder": "Carpet Sharks",
    "articleFolder": "carpet-sharks",
    "contenders": [
      {
        "seed": 1,
        "name": "Nurse Shark",
        "factKey": "Nurse Shark",
        "image": "Nurse Shark.jpg",
        "slug": "Nurse-Shark"
      },
      {
        "seed": 2,
        "name": "Zebra Shark",
        "factKey": "Zebra Shark",
        "image": "Zebra Shark.jpg",
        "slug": "Zebra-Shark"
      },
      {
        "seed": 3,
        "name": "Tasselled Wobbegong",
        "factKey": "Tasselled Wobbegong",
        "image": "Tasselled Wobbegong.JPG",
        "slug": "Tasselled-Wobbegong"
      },
      {
        "seed": 4,
        "name": "Leopard Shark",
        "factKey": "Leopard Shark",
        "image": "Leopard Shark.JPG",
        "slug": "Leopard-Shark"
      },
      {
        "seed": 5,
        "name": "Epaulette Shark",
        "factKey": "Epaulette Shark",
        "image": "Epaulette Shark.JPG",
        "slug": "Epaulette-Shark"
      },
      {
        "seed": 6,
        "name": "Spotted Bamboo Shark",
        "factKey": "Spotted Bamboo Shark",
        "image": "Spotted Bamboo Shark.jpg",
        "slug": "Spotted-Bamboo-Shark"
      },
      {
        "seed": 7,
        "name": "Ornate Wobbegong",
        "factKey": "Ornate Wobbegong",
        "image": "Ornate Wobbegong.jpg",
        "slug": "Ornate-Wobbegong"
      },
      {
        "seed": 8,
        "name": "Tawny Nurse Shark",
        "factKey": "Tawny Nurse Shark",
        "image": "Tawny Nurse Shark.jpg",
        "slug": "Tawny-Nurse-Shark"
      },
      {
        "seed": 9,
        "name": "Blind Shark",
        "factKey": "Blind Shark",
        "image": "Blind Shark.jpg",
        "slug": "Blind-Shark"
      },
      {
        "seed": 10,
        "name": "Slender Bamboo Shark",
        "factKey": "Slender Bamboo Shark",
        "image": "Slender Bamboo Shark.jpg",
        "slug": "Slender-Bamboo-Shark"
      },
      {
        "seed": 11,
        "name": "Spotted Wobbegong",
        "factKey": "Spotted Wobbegong",
        "image": "Spotted Wobbegong.JPG",
        "slug": "Spotted-Wobbegong"
      },
      {
        "seed": 12,
        "name": "Short-Tail Nurse Shark",
        "factKey": "Short-Tail Nurse Shark",
        "image": "Short-Tail Nurse Shark.jpg",
        "slug": "Short-Tail-Nurse-Shark"
      },
      {
        "seed": 13,
        "name": "Japanese Wobbegong",
        "factKey": "Japanese Wobbegong",
        "image": "Japanese Wobbegong.jpg",
        "slug": "Japanese-Wobbegong"
      },
      {
        "seed": 14,
        "name": "Rusty Carpetshark",
        "factKey": "Rusty Carpetshark",
        "image": "Rusty Carpetshark.jpg",
        "slug": "Rusty-Carpetshark"
      },
      {
        "seed": 15,
        "name": "Cobbler Wobbegong",
        "factKey": "Cobbler Wobbegong",
        "image": "Cobbler Wobbegong.jpg",
        "slug": "Cobbler-Wobbegong"
      },
      {
        "seed": 16,
        "name": "Australian Marbled Catshark",
        "factKey": "Australian Marbled Catshark",
        "image": "Australian Marbled Catshark.jpg",
        "slug": "Australian-Marbled-Catshark"
      }
    ]
  }
];

let sharkFacts = {};
let state = null;
let history = [];
let pendingWinner = null;
let popupMode = "confirm";

async function loadSharkFacts() {
  try {
    const response = await fetch(sharkFactsPath);
    const text = await response.text();
    const objectText = text.replace(/^\s*const\s+sharkFacts\s*=\s*/, "").replace(/;\s*$/, "");
    sharkFacts = JSON.parse(objectText);
  } catch (error) {
    sharkFacts = {};
  }
}

function hydrateContender(contender, division) {
  const facts = sharkFacts[contender.factKey] || sharkFacts[contender.name] || {};
  return {
    ...contender,
    facts,
    division: division.name,
    image: "tournament-pages/sharks/images/" + division.imageFolder + "/" + contender.image,
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
  const finals = [[createMatch("Final-1"), createMatch("Final-2")], [createMatch("Championship")]];
  return { divisions, finals, phase: "division", divisionIndex: 0, roundIndex: 0, matchIndex: 0, champion: null, randomize };
}

function currentMatch() {
  if (state.phase === "division") return state.divisions[state.divisionIndex].rounds[state.roundIndex][state.matchIndex];
  return state.finals[state.roundIndex][state.matchIndex];
}
function snapshotState() { return JSON.parse(JSON.stringify(state)); }
function restoreState(snapshot) { state = snapshot; renderMatch(); }
function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function divisionRoundName(roundIndex) { return divisionRoundNames[roundIndex] || "Division Round"; }
function finalRoundName(roundIndex) { return finalRoundNames[roundIndex] || "Final Round"; }
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
    <button class="dino-card shark-card" type="button" data-index="${index}">
      <img src="${escapeHtml(contender.image)}" alt="${escapeHtml(contender.name)}">
      <span class="seed">#${contender.seed}</span>
      <h2>${escapeHtml(contender.name)}</h2>
      <p><strong>Division:</strong> ${escapeHtml(contender.division)}</p>
      <p><strong>About:</strong> ${escapeHtml(facts.About || "Choose this shark to advance it in the bracket.")}</p>
      <a class="learn-more" href="${escapeHtml(contender.article)}" target="_blank" rel="noreferrer">Learn More</a>
    </button>
  `;
}

function renderChampion() {
  const champion = state.champion;
  roundKicker.textContent = "Shark Bracket Champion";
  title.textContent = champion.name + " wins the Shark Bracket";
  instructions.textContent = "Restart the tournament to play again or review the completed bracket below.";
  matchupContainer.innerHTML = `
    <article class="champion-card shark-champion-card">
      <img src="${escapeHtml(champion.image)}" alt="${escapeHtml(champion.name)}">
      <p class="kicker">Champion</p>
      <h2>${escapeHtml(champion.name)}</h2>
      <p>${escapeHtml(champion.name)} swam through the full bracket and claimed the crown.</p>
      <a class="button button-primary" href="${escapeHtml(champion.article)}" target="_blank" rel="noreferrer">Learn More</a>
    </article>
  `;
}

function renderMatch() {
  if (state.champion) { renderChampion(); renderBracket(); previousButton.disabled = history.length === 0; return; }
  const match = currentMatch();
  const [left, right] = match.entrants;
  roundKicker.textContent = getRoundLabel();
  title.textContent = left.name + " vs " + right.name;
  instructions.textContent = "Click on your favorite shark to advance it to the next round.";
  matchupContainer.innerHTML = renderContenderCard(left, 0) + renderContenderCard(right, 1);
  previousButton.disabled = history.length === 0;
  renderBracket();
}

function advanceFinalsWinner(winner) {
  if (state.roundIndex === 0) state.finals[1][0].entrants[state.matchIndex] = winner;
  else state.champion = winner;
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
  if (state.champion) return;
  if (state.phase === "division") {
    const division = state.divisions[state.divisionIndex];
    const round = division.rounds[state.roundIndex];
    if (state.matchIndex < round.length - 1) { state.matchIndex += 1; return; }
    if (state.roundIndex < division.rounds.length - 1) { state.roundIndex += 1; state.matchIndex = 0; return; }
    if (state.divisionIndex < state.divisions.length - 1) { state.divisionIndex += 1; state.roundIndex = 0; state.matchIndex = 0; return; }
    state.phase = "finals"; state.roundIndex = 0; state.matchIndex = 0; return;
  }
  const round = state.finals[state.roundIndex];
  if (state.matchIndex < round.length - 1) { state.matchIndex += 1; return; }
  if (state.roundIndex < state.finals.length - 1) { state.roundIndex += 1; state.matchIndex = 0; }
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
      popupMessage.textContent = winner.name + " has won the " + division.name + " division and will advance to the FIN-al Four!";
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
  popup.classList.add("hidden"); pendingWinner = null;
  if (popupMode === "confirm" || popupMode === "division") moveToNextMatch();
  popupMode = "confirm"; renderMatch();
}
function undoMatch() {
  const snapshot = history.pop();
  if (!snapshot) return;
  pendingWinner = null; popupMode = "confirm"; popup.classList.add("hidden"); restoreState(snapshot);
}
function restartTournament() {
  state = buildState(state.randomize); history = []; pendingWinner = null; popupMode = "confirm"; popup.classList.add("hidden"); renderMatch();
}
function renderBracketSlot(contender, winner, isActive) {
  const classes = ["bracket-slot"];
  if (winner && contender && winner.name === contender.name) classes.push("is-winner");
  if (isActive) classes.push("is-active");
  return `<div class="${classes.join(" ")}">${contender ? `<span>#${contender.seed}</span>${escapeHtml(contender.name)}` : "TBD"}</div>`;
}
function renderBracketMatch(match, activeMatch) {
  const isActive = activeMatch && activeMatch.id === match.id;
  return `<div class="bracket-match ${isActive ? "is-current" : ""}">${renderBracketSlot(match.entrants[0], match.winner, isActive)}${renderBracketSlot(match.entrants[1], match.winner, isActive)}</div>`;
}
function renderBracket() {
  const activeMatch = state.champion ? null : currentMatch();
  const divisions = state.divisions.map((division) => `
    <article class="division-bracket">
      <h3>${escapeHtml(division.name)}</h3>
      <div class="bracket-rounds">
        ${division.rounds.map((round, index) => `<section class="bracket-round"><h4>${escapeHtml(divisionRoundName(index))}</h4>${round.map((match) => renderBracketMatch(match, activeMatch)).join("")}</section>`).join("")}
      </div>
    </article>
  `).join("");
  const finals = `<article class="division-bracket finals-bracket"><h3>FIN-al Four</h3><div class="bracket-rounds finals-rounds">${state.finals.map((round, index) => `<section class="bracket-round"><h4>${escapeHtml(finalRoundName(index))}</h4>${round.map((match) => renderBracketMatch(match, activeMatch)).join("")}</section>`).join("")}</div></article>`;
  liveBracket.innerHTML = `<div class="live-bracket-grid">${divisions}${finals}</div>`;
}
async function startTournament(randomize = false) {
  await factsReady; state = buildState(randomize); history = []; intro.classList.add("hidden"); matchup.classList.remove("hidden"); renderMatch();
}
document.querySelector("#default-seeds").addEventListener("click", () => { startTournament(false); });
document.querySelector("#random-seeds").addEventListener("click", () => { startTournament(true); });
document.querySelector("#restart-tournament").addEventListener("click", restartTournament);
previousButton.addEventListener("click", undoMatch);
matchupContainer.addEventListener("click", (event) => {
  const articleLink = event.target.closest("a");
  if (articleLink) { event.stopPropagation(); return; }
  const card = event.target.closest(".dino-card");
  if (!card) return;
  chooseWinner(Number(card.dataset.index));
});
backButton.addEventListener("click", undoMatch);
nextButton.addEventListener("click", handleNext);
const factsReady = loadSharkFacts();
