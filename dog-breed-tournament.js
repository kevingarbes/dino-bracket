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
const finalRoundNames = ["Faithful Four", "Championship"];
const dogFactsPath = "tournament-pages/dog-breeds/dogFacts.txt";
const divisionData = [
    {
        "name":  "Small Dogs",
        "imageFolder":  "Small",
        "articleFolder":  "small-dogs",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "French Bulldog",
                               "factKey":  "French Bulldog",
                               "image":  "French Bulldog.jpg",
                               "slug":  "French-Bulldog"
                           },
                           {
                               "seed":  2,
                               "name":  "Dachshund",
                               "factKey":  "Dachshund",
                               "image":  "Dachshund.jpg",
                               "slug":  "Dachshund"
                           },
                           {
                               "seed":  3,
                               "name":  "Beagle",
                               "factKey":  "Beagle",
                               "image":  "Beagle.jpg",
                               "slug":  "Beagle"
                           },
                           {
                               "seed":  4,
                               "name":  "Yorkshire Terrier",
                               "factKey":  "Yorkshire Terrier",
                               "image":  "Yorkshire Terrier.jpg",
                               "slug":  "Yorkshire-Terrier"
                           },
                           {
                               "seed":  5,
                               "name":  "Cavalier King Charles Spaniel",
                               "factKey":  "Cavalier King Charles Spaniel",
                               "image":  "Cavalier King Charles Spaniel.jpg",
                               "slug":  "Cavalier-King-Charles-Spaniel"
                           },
                           {
                               "seed":  6,
                               "name":  "Pembroke Welsh Corgi",
                               "factKey":  "Pembroke Welsh Corgi",
                               "image":  "Pembroke Welsh Corgi.jpg",
                               "slug":  "Pembroke-Welsh-Corgi"
                           },
                           {
                               "seed":  7,
                               "name":  "Miniature Schnauzer",
                               "factKey":  "Miniature Schnauzer",
                               "image":  "Miniature Schnauzer.jpg",
                               "slug":  "Miniature-Schnauzer"
                           },
                           {
                               "seed":  8,
                               "name":  "Shih Tzu",
                               "factKey":  "Shih Tzu",
                               "image":  "Shih Tzu.jpg",
                               "slug":  "Shih-Tzu"
                           },
                           {
                               "seed":  9,
                               "name":  "Pomeranian",
                               "factKey":  "Pomeranian",
                               "image":  "Pomeranian.jpg",
                               "slug":  "Pomeranian"
                           },
                           {
                               "seed":  10,
                               "name":  "Boston Terrier",
                               "factKey":  "Boston Terrier",
                               "image":  "Boston Terrier.jpg",
                               "slug":  "Boston-Terrier"
                           },
                           {
                               "seed":  11,
                               "name":  "Havanese",
                               "factKey":  "Havanese",
                               "image":  "Havanese.jpg",
                               "slug":  "Havanese"
                           },
                           {
                               "seed":  12,
                               "name":  "Chihuahua",
                               "factKey":  "Chihuahua",
                               "image":  "Chihuahua.jpg",
                               "slug":  "Chihuahua"
                           },
                           {
                               "seed":  13,
                               "name":  "Shetland Sheepdog",
                               "factKey":  "Shetland Sheepdog",
                               "image":  "Shetland Sheepdog.jpg",
                               "slug":  "Shetland-Sheepdog"
                           },
                           {
                               "seed":  14,
                               "name":  "Cocker Spaniel",
                               "factKey":  "Cocker Spaniel",
                               "image":  "Cocker Spaniel.jpg",
                               "slug":  "Cocker-Spaniel"
                           },
                           {
                               "seed":  15,
                               "name":  "Maltese",
                               "factKey":  "Maltese",
                               "image":  "Maltese.jpg",
                               "slug":  "Maltese"
                           },
                           {
                               "seed":  16,
                               "name":  "Pug",
                               "factKey":  "Pug",
                               "image":  "Pug.jpg",
                               "slug":  "Pug"
                           }
                       ]
    },
    {
        "name":  "Medium Dogs",
        "imageFolder":  "Medium",
        "articleFolder":  "medium-dogs",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "Poodle",
                               "factKey":  "Poodle",
                               "image":  "Poodle.jpg",
                               "slug":  "Poodle"
                           },
                           {
                               "seed":  2,
                               "name":  "Bulldog",
                               "factKey":  "Bulldog",
                               "image":  "Bulldog.jpg",
                               "slug":  "Bulldog"
                           },
                           {
                               "seed":  3,
                               "name":  "German Shorthaired Pointer",
                               "factKey":  "German Shorthaired Pointer",
                               "image":  "German Shorthaired Pointer.jpg",
                               "slug":  "German-Shorthaired-Pointer"
                           },
                           {
                               "seed":  4,
                               "name":  "Australian Shepherd",
                               "factKey":  "Australian Shepherd",
                               "image":  "Australian Shepherd.jpg",
                               "slug":  "Australian-Shepherd"
                           },
                           {
                               "seed":  5,
                               "name":  "Miniature American Shepherd",
                               "factKey":  "Miniature American Shepherd",
                               "image":  "Miniature American Shepherd.jpg",
                               "slug":  "Miniature-American-Shepherd"
                           },
                           {
                               "seed":  6,
                               "name":  "Siberian Husky",
                               "factKey":  "Siberian Husky",
                               "image":  "Siberian Husky.jpg",
                               "slug":  "Siberian-Husky"
                           },
                           {
                               "seed":  7,
                               "name":  "English Springer Spaniel",
                               "factKey":  "English Springer Spaniel",
                               "image":  "English Springer Spaniel.jpg",
                               "slug":  "English-Springer-Spaniel"
                           },
                           {
                               "seed":  8,
                               "name":  "Border Collie",
                               "factKey":  "Border Collie",
                               "image":  "Border Collie.jpg",
                               "slug":  "Border-Collie"
                           },
                           {
                               "seed":  9,
                               "name":  "Brittany",
                               "factKey":  "Brittany",
                               "image":  "Brittany.jpg",
                               "slug":  "Brittany"
                           },
                           {
                               "seed":  10,
                               "name":  "Basset Hound",
                               "factKey":  "Basset Hound",
                               "image":  "Basset Hound.jpg",
                               "slug":  "Basset-Hound"
                           },
                           {
                               "seed":  11,
                               "name":  "Vizsla",
                               "factKey":  "Vizsla",
                               "image":  "Vizsla.jpg",
                               "slug":  "Vizsla"
                           },
                           {
                               "seed":  12,
                               "name":  "English Cocker Spaniel",
                               "factKey":  "English Cocker Spaniel",
                               "image":  "English Cocker Spaniel.jpg",
                               "slug":  "English-Cocker-Spaniel"
                           },
                           {
                               "seed":  13,
                               "name":  "Collie",
                               "factKey":  "Collie",
                               "image":  "Collie.jpg",
                               "slug":  "Collie"
                           },
                           {
                               "seed":  14,
                               "name":  "Portuguese Water Dog",
                               "factKey":  "Portuguese Water Dog",
                               "image":  "Portuguese Water Dog.jpg",
                               "slug":  "Portuguese-Water-Dog"
                           },
                           {
                               "seed":  15,
                               "name":  "Dalmatian",
                               "factKey":  "Dalmatian",
                               "image":  "Dalmatian.jpg",
                               "slug":  "Dalmatian"
                           },
                           {
                               "seed":  16,
                               "name":  "Australian Cattle Dog",
                               "factKey":  "Australian Cattle Dog",
                               "image":  "Australian Cattle Dog.jpg",
                               "slug":  "Australian-Cattle-Dog"
                           }
                       ]
    },
    {
        "name":  "Large Dogs",
        "imageFolder":  "Large",
        "articleFolder":  "large-dogs",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "Labrador Retriever",
                               "factKey":  "Labrador Retriever",
                               "image":  "Labrador Retriever.jpg",
                               "slug":  "Labrador-Retriever"
                           },
                           {
                               "seed":  2,
                               "name":  "Golden Retriever",
                               "factKey":  "Golden Retriever",
                               "image":  "Golden Retriever.jpg",
                               "slug":  "Golden-Retriever"
                           },
                           {
                               "seed":  3,
                               "name":  "German Shepherd Dog",
                               "factKey":  "German Shepherd Dog",
                               "image":  "German Shepherd Dog.jpg",
                               "slug":  "German-Shepherd-Dog"
                           },
                           {
                               "seed":  4,
                               "name":  "Rottweiler",
                               "factKey":  "Rottweiler",
                               "image":  "Rottweiler.jpg",
                               "slug":  "Rottweiler"
                           },
                           {
                               "seed":  5,
                               "name":  "Cane Corso",
                               "factKey":  "Cane Corso",
                               "image":  "Cane Corso.jpg",
                               "slug":  "Cane-Corso"
                           },
                           {
                               "seed":  6,
                               "name":  "Doberman Pinscher",
                               "factKey":  "Doberman Pinscher",
                               "image":  "Doberman Pinscher.jpg",
                               "slug":  "Doberman-Pinscher"
                           },
                           {
                               "seed":  7,
                               "name":  "Boxer",
                               "factKey":  "Boxer",
                               "image":  "Boxer.jpg",
                               "slug":  "Boxer"
                           },
                           {
                               "seed":  8,
                               "name":  "Belgian Malinois",
                               "factKey":  "Belgian Malinois",
                               "image":  "Belgian Malinois.jpg",
                               "slug":  "Belgian-Malinois"
                           },
                           {
                               "seed":  9,
                               "name":  "Rhodesian Ridgeback",
                               "factKey":  "Rhodesian Ridgeback",
                               "image":  "Rhodesian Ridgeback.jpg",
                               "slug":  "Rhodesian-Ridgeback"
                           },
                           {
                               "seed":  10,
                               "name":  "Chesapeake Bay Retriever",
                               "factKey":  "Chesapeake Bay Retriever",
                               "image":  "Chesapeake Bay Retriever.jpg",
                               "slug":  "Chesapeake-Bay-Retriever"
                           },
                           {
                               "seed":  11,
                               "name":  "Weimaraner",
                               "factKey":  "Weimaraner",
                               "image":  "Weimaraner.jpg",
                               "slug":  "Weimaraner"
                           },
                           {
                               "seed":  12,
                               "name":  "Giant Schnauzer",
                               "factKey":  "Giant Schnauzer",
                               "image":  "Giant Schnauzer.jpg",
                               "slug":  "Giant-Schnauzer"
                           },
                           {
                               "seed":  13,
                               "name":  "Bloodhound",
                               "factKey":  "Bloodhound",
                               "image":  "Bloodhound.jpg",
                               "slug":  "Bloodhound"
                           },
                           {
                               "seed":  14,
                               "name":  "Airedale Terrier",
                               "factKey":  "Airedale Terrier",
                               "image":  "Airedale Terrier.jpg",
                               "slug":  "Airedale-Terrier"
                           },
                           {
                               "seed":  15,
                               "name":  "Alaskan Malamute",
                               "factKey":  "Alaskan Malamute",
                               "image":  "Alaskan Malamute.jpg",
                               "slug":  "Alaskan-Malamute"
                           },
                           {
                               "seed":  16,
                               "name":  "Irish Setter",
                               "factKey":  "Irish Setter",
                               "image":  "Irish Setter.jpg",
                               "slug":  "Irish-Setter"
                           }
                       ]
    },
    {
        "name":  "Extra Large Dogs",
        "imageFolder":  "Extra Large",
        "articleFolder":  "extra-large-dogs",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "Bernese Mountain Dog",
                               "factKey":  "Bernese Mountain Dog",
                               "image":  "Bernese Mountain Dog.jpg",
                               "slug":  "Bernese-Mountain-Dog"
                           },
                           {
                               "seed":  2,
                               "name":  "Great Dane",
                               "factKey":  "Great Dane",
                               "image":  "Great Dane.jpg",
                               "slug":  "Great-Dane"
                           },
                           {
                               "seed":  3,
                               "name":  "Mastiff",
                               "factKey":  "Mastiff",
                               "image":  "Mastiff.jpg",
                               "slug":  "Mastiff"
                           },
                           {
                               "seed":  4,
                               "name":  "Newfoundland",
                               "factKey":  "Newfoundland",
                               "image":  "Newfoundland.jpg",
                               "slug":  "Newfoundland"
                           },
                           {
                               "seed":  5,
                               "name":  "Akita",
                               "factKey":  "Akita",
                               "image":  "Akita.jpg",
                               "slug":  "Akita"
                           },
                           {
                               "seed":  6,
                               "name":  "Saint Bernard",
                               "factKey":  "Saint Bernard",
                               "image":  "Saint Bernard.jpg",
                               "slug":  "Saint-Bernard"
                           },
                           {
                               "seed":  7,
                               "name":  "Bullmastiff",
                               "factKey":  "Bullmastiff",
                               "image":  "Bullmastiff.jpg",
                               "slug":  "Bullmastiff"
                           },
                           {
                               "seed":  8,
                               "name":  "Great Pyrenees",
                               "factKey":  "Great Pyrenees",
                               "image":  "Great Pyrenees.jpg",
                               "slug":  "Great-Pyrenees"
                           },
                           {
                               "seed":  9,
                               "name":  "Irish Wolfhound",
                               "factKey":  "Irish Wolfhound",
                               "image":  "Irish Wolfhound.jpg",
                               "slug":  "Irish-Wolfhound"
                           },
                           {
                               "seed":  10,
                               "name":  "Greater Swiss Mountain Dog",
                               "factKey":  "Greater Swiss Mountain Dog",
                               "image":  "Greater Swiss Mountain Dog.jpg",
                               "slug":  "Greater-Swiss-Mountain-Dog"
                           },
                           {
                               "seed":  11,
                               "name":  "Anatolian Shepherd Dog",
                               "factKey":  "Anatolian Shepherd Dog",
                               "image":  "Anatolian Shepherd Dog.jpg",
                               "slug":  "Anatolian-Shepherd-Dog"
                           },
                           {
                               "seed":  12,
                               "name":  "Dogue de Bordeaux",
                               "factKey":  "Dogue de Bordeaux",
                               "image":  "Dogue de Bordeaux.jpg",
                               "slug":  "Dogue-de-Bordeaux"
                           },
                           {
                               "seed":  13,
                               "name":  "Leonberger",
                               "factKey":  "Leonberger",
                               "image":  "Leonberger.jpg",
                               "slug":  "Leonberger"
                           },
                           {
                               "seed":  14,
                               "name":  "Borzoi",
                               "factKey":  "Borzoi",
                               "image":  "Borzoi.jpg",
                               "slug":  "Borzoi"
                           },
                           {
                               "seed":  15,
                               "name":  "Boerboel",
                               "factKey":  "Boerboel",
                               "image":  "Boerboel.jpg",
                               "slug":  "Boerboel"
                           },
                           {
                               "seed":  16,
                               "name":  "Neopolitan Mastiff",
                               "factKey":  "Neopolitan Mastiff",
                               "image":  "Neopolitan Mastiff.jpg",
                               "slug":  "Neopolitan-Mastiff"
                           }
                       ]
    }
];

let state;
let history = [];
let dogFacts = {};
let pendingWinner = null;
let popupMode = "confirm";

async function loadDogFacts() {
  try {
    const response = await fetch(dogFactsPath);
    const text = await response.text();
    const objectText = text.replace(/^\s*const\s+dogFacts\s*=\s*/, "").replace(/;\s*$/, "");
    dogFacts = JSON.parse(objectText);
  } catch (error) {
    dogFacts = {};
  }
}

function hydrateContender(contender, division) {
  const facts = dogFacts[contender.factKey] || dogFacts[contender.name] || {};

  return {
    ...contender,
    facts,
    division: division.name,
    image: "tournament-pages/dog-breeds/images/" + division.imageFolder + "/" + contender.image,
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
    <button class="dino-card dog-card" type="button" data-index="${index}">
      <img src="${escapeHtml(contender.image)}" alt="${escapeHtml(contender.name)}">
      <span class="seed">#${contender.seed}</span>
      <h2>${escapeHtml(contender.name)}</h2>
      <p><strong>Division:</strong> ${escapeHtml(contender.division)}</p>
      <p><strong>Breed File:</strong> ${escapeHtml(facts.About || "Choose this breed to advance it in the bracket.")}</p>
      <a class="learn-more" href="${escapeHtml(contender.article)}" target="_blank" rel="noreferrer">Learn More</a>
    </button>
  `;
}

function renderChampion() {
  const champion = state.champion;
  roundKicker.textContent = "Dog Breed Bracket Champion";
  title.textContent = champion.name + " wins the Dog Breed Bracket";
  instructions.textContent = "Restart the tournament to play again or review the completed bracket below.";
  matchupContainer.innerHTML = `
    <article class="champion-card dog-champion-card">
      <img src="${escapeHtml(champion.image)}" alt="${escapeHtml(champion.name)}">
      <p class="kicker">Top Dog</p>
      <h2>${escapeHtml(champion.name)}</h2>
      <p>${escapeHtml(champion.name)} won the full bracket and earned Top Dog honors.</p>
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
  instructions.textContent = "Click on your favorite dog breed to advance it to the next round.";
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
      popupMessage.textContent = winner.name + " has won the " + division.name + " division and will advance to the Faithful Four!";
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
      <h3>Faithful Four</h3>
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

const factsReady = loadDogFacts();
