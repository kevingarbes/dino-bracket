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
const finalRoundNames = ["Final Cut", "Championship"];
const movieFactsPath = "tournament-pages/box-office-hits/movieFacts.txt";
const divisionData = [
    {
        "name":  "Action",
        "imageFolder":  "Action",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "Avatar",
                               "image":  "Avatar.jpg"
                           },
                           {
                               "seed":  2,
                               "name":  "Avengers: Endgame",
                               "image":  "Avengers Endgame.jpg"
                           },
                           {
                               "seed":  3,
                               "name":  "Star Wars: The Force Awakens",
                               "image":  "Star Wars The Force Awakens.jpg"
                           },
                           {
                               "seed":  4,
                               "name":  "Spider-Man: No Way Home",
                               "image":  "Spider-Man No Way Home.jpg"
                           },
                           {
                               "seed":  5,
                               "name":  "Jurassic World",
                               "image":  "Jurassic World.jpg"
                           },
                           {
                               "seed":  6,
                               "name":  "Furious 7",
                               "image":  "Furious 7.jpg"
                           },
                           {
                               "seed":  7,
                               "name":  "Black Panther",
                               "image":  "Black Panther.jpg"
                           },
                           {
                               "seed":  8,
                               "name":  "Iron Man 3",
                               "image":  "Iron Man 3.jpg"
                           },
                           {
                               "seed":  9,
                               "name":  "Transformers: Dark of the Moon",
                               "image":  "Transformers Dark of the Moon.jpg"
                           },
                           {
                               "seed":  10,
                               "name":  "The Dark Knight",
                               "image":  "The Dark Knight.jpg"
                           },
                           {
                               "seed":  11,
                               "name":  "Top Gun: Maverick",
                               "image":  "Top Gun Maverick.jpg"
                           },
                           {
                               "seed":  12,
                               "name":  "Independence Day",
                               "image":  "Independence Day.jpg"
                           },
                           {
                               "seed":  13,
                               "name":  "Skyfall",
                               "image":  "Skyfall.jpg"
                           },
                           {
                               "seed":  14,
                               "name":  "E.T. the Extra-Terrestrial",
                               "image":  "E.T. the Extra-Terrestrial.jpg"
                           },
                           {
                               "seed":  15,
                               "name":  "Captain America: Civil War",
                               "image":  "Captain America Civil War.jpg"
                           },
                           {
                               "seed":  16,
                               "name":  "Aquaman",
                               "image":  "Aquaman.jpg"
                           }
                       ]
    },
    {
        "name":  "Comedy",
        "imageFolder":  "Comedy",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "Barbie",
                               "image":  "Barbie.jpg"
                           },
                           {
                               "seed":  2,
                               "name":  "Deadpool \u0026 Wolverine",
                               "image":  "Deadpool \u0026 Wolverine.jpg"
                           },
                           {
                               "seed":  3,
                               "name":  "Men in Black",
                               "image":  "Men in Black.jpg"
                           },
                           {
                               "seed":  4,
                               "name":  "Meet the Fockers",
                               "image":  "Meet the Fockers.jpg"
                           },
                           {
                               "seed":  5,
                               "name":  "Home Alone",
                               "image":  "Home Alone.jpg"
                           },
                           {
                               "seed":  6,
                               "name":  "Bruce Almighty",
                               "image":  "Bruce Almighty.jpg"
                           },
                           {
                               "seed":  7,
                               "name":  "Mrs. Doubtfire",
                               "image":  "Mrs. Doubtfire.jpg"
                           },
                           {
                               "seed":  8,
                               "name":  "The Hangover Part II",
                               "image":  "The Hangover Part II.jpg"
                           },
                           {
                               "seed":  9,
                               "name":  "Ted",
                               "image":  "Ted.jpg"
                           },
                           {
                               "seed":  10,
                               "name":  "Back to the Future",
                               "image":  "Back to the Future.jpg"
                           },
                           {
                               "seed":  11,
                               "name":  "The Mask",
                               "image":  "The Mask.jpg"
                           },
                           {
                               "seed":  12,
                               "name":  "Sex and the City",
                               "image":  "Sex and the City.jpg"
                           },
                           {
                               "seed":  13,
                               "name":  "The Flintstones",
                               "image":  "The Flintstones.jpg"
                           },
                           {
                               "seed":  14,
                               "name":  "Crocodile Dundee",
                               "image":  "Crocodile Dundee.jpg"
                           },
                           {
                               "seed":  15,
                               "name":  "Beverly Hills Cop",
                               "image":  "Beverly Hills Cop.jpg"
                           },
                           {
                               "seed":  16,
                               "name":  "Austin Powers: The Spy Who Shagged Me",
                               "image":  "Austin Powers The Spy Who Shagged Me.jpg"
                           }
                       ]
    },
    {
        "name":  "Drama \u0026 Horror",
        "imageFolder":  "Drama",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "Titanic",
                               "image":  "Titanic.jpg"
                           },
                           {
                               "seed":  2,
                               "name":  "The Sixth Sense",
                               "image":  "The Sixth Sense.jpg"
                           },
                           {
                               "seed":  3,
                               "name":  "Jaws",
                               "image":  "Jaws.jpg"
                           },
                           {
                               "seed":  4,
                               "name":  "I Am Legend",
                               "image":  "I Am Legend.jpg"
                           },
                           {
                               "seed":  5,
                               "name":  "It",
                               "image":  "It.jpg"
                           },
                           {
                               "seed":  6,
                               "name":  "The Exorcist",
                               "image":  "The Exorcist.jpg"
                           },
                           {
                               "seed":  7,
                               "name":  "World War Z",
                               "image":  "World War Z.jpg"
                           },
                           {
                               "seed":  8,
                               "name":  "Signs",
                               "image":  "Signs.jpg"
                           },
                           {
                               "seed":  9,
                               "name":  "Rain Man",
                               "image":  "Rain Man.jpg"
                           },
                           {
                               "seed":  10,
                               "name":  "The Passion of the Christ",
                               "image":  "The Passion of the Christ.jpg"
                           },
                           {
                               "seed":  11,
                               "name":  "Hannibal",
                               "image":  "Hannibal.jpg"
                           },
                           {
                               "seed":  12,
                               "name":  "American Sniper",
                               "image":  "American Sniper.jpg"
                           },
                           {
                               "seed":  13,
                               "name":  "The Blair Witch Project",
                               "image":  "The Blair Witch Project.jpg"
                           },
                           {
                               "seed":  14,
                               "name":  "The Nun",
                               "image":  "The Nun.jpg"
                           },
                           {
                               "seed":  15,
                               "name":  "The Twilight Saga: New Moon",
                               "image":  "The Twilight Saga New Moon.jpg"
                           },
                           {
                               "seed":  16,
                               "name":  "The Village",
                               "image":  "The Village.jpg"
                           }
                       ]
    },
    {
        "name":  "Animated",
        "imageFolder":  "Animated",
        "contenders":  [
                           {
                               "seed":  1,
                               "name":  "Frozen 2",
                               "image":  "Frozen 2.jpg"
                           },
                           {
                               "seed":  2,
                               "name":  "The Lion King",
                               "image":  "The Lion King.jpg"
                           },
                           {
                               "seed":  3,
                               "name":  "Inside Out 2",
                               "image":  "Inside Out 2.jpg"
                           },
                           {
                               "seed":  4,
                               "name":  "Finding Nemo",
                               "image":  "Finding Nemo.jpg"
                           },
                           {
                               "seed":  5,
                               "name":  "Shrek 2",
                               "image":  "Shrek 2.jpg"
                           },
                           {
                               "seed":  6,
                               "name":  "Incredibles 2",
                               "image":  "Incredibles 2.jpg"
                           },
                           {
                               "seed":  7,
                               "name":  "Minions",
                               "image":  "Minions.jpg"
                           },
                           {
                               "seed":  8,
                               "name":  "Toy Story 3",
                               "image":  "Toy Story 3.jpg"
                           },
                           {
                               "seed":  9,
                               "name":  "Ice Age: Dawn of the Dinosaurs",
                               "image":  "Ice Age Dawn of the Dinosaurs.jpg"
                           },
                           {
                               "seed":  10,
                               "name":  "The Super Mario Bros. Movie",
                               "image":  "The Super Mario Bros. Movie.jpg"
                           },
                           {
                               "seed":  11,
                               "name":  "Zootopia",
                               "image":  "Zootopia.jpg"
                           },
                           {
                               "seed":  12,
                               "name":  "Up",
                               "image":  "Up.jpg"
                           },
                           {
                               "seed":  13,
                               "name":  "The Secret Life of Pets",
                               "image":  "The Secret Life of Pets.jpg"
                           },
                           {
                               "seed":  14,
                               "name":  "Coco",
                               "image":  "Coco.jpg"
                           },
                           {
                               "seed":  15,
                               "name":  "Madagascar 3: Europe\u0027s Most Wanted",
                               "image":  "Madagascar 3 Europe\u0027s Most Wanted.jpg"
                           },
                           {
                               "seed":  16,
                               "name":  "Moana 2",
                               "image":  "Moana 2.jpg"
                           }
                       ]
    }
];

let state;
let history = [];
let movieFacts = {};
let pendingWinner = null;
let popupMode = "confirm";

async function loadMovieFacts() {
  try {
    const response = await fetch(movieFactsPath);
    const text = await response.text();
    const objectText = text.replace(/^\s*const\s+movieFacts\s*=\s*/, "").replace(/;\s*$/, "");
    movieFacts = JSON.parse(objectText);
  } catch (error) {
    movieFacts = {};
  }
}

function hydrateContender(contender, division) {
  const facts = movieFacts[contender.name] || {};

  return {
    ...contender,
    facts,
    division: division.name,
    image: "tournament-pages/box-office-hits/images/" + division.imageFolder + "/" + contender.image,
    trailer: facts.Link || "https://www.youtube.com/"
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
    <button class="dino-card movie-card" type="button" data-index="${index}">
      <img src="${escapeHtml(contender.image)}" alt="${escapeHtml(contender.name)} poster">
      <span class="seed">#${contender.seed}</span>
      <h2>${escapeHtml(contender.name)}</h2>
      <p><strong>Division:</strong> ${escapeHtml(contender.division)}</p>
      <p><strong>Box Office:</strong> ${escapeHtml(facts.About || "Choose this movie to advance it in the bracket.")}</p>
      <a class="learn-more trailer-link" href="${escapeHtml(contender.trailer)}" target="_blank" rel="noreferrer">View Trailer</a>
    </button>
  `;
}

function renderChampion() {
  const champion = state.champion;
  roundKicker.textContent = "Box Office Hits Champion";
  title.textContent = champion.name + " wins the Box Office Hits Bracket";
  instructions.textContent = "Restart the tournament to play again or review the completed bracket below.";
  matchupContainer.innerHTML = `
    <article class="champion-card movie-champion-card">
      <img src="${escapeHtml(champion.image)}" alt="${escapeHtml(champion.name)} poster">
      <p class="kicker">Champion</p>
      <h2>${escapeHtml(champion.name)}</h2>
      <p>${escapeHtml(champion.name)} survived the full tournament and took the top spot.</p>
      <a class="button button-primary" href="${escapeHtml(champion.trailer)}" target="_blank" rel="noreferrer">View Trailer</a>
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
  instructions.textContent = "Click on your favorite movie to advance it to the next round.";
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
      popupMessage.textContent = winner.name + " has won the " + division.name + " division and will advance to the Final Cut!";
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

function renderBracketSlot(slot, fallback = "TBD") {
  const winnerClass = slot && slot.isWinner ? " bracket-slot-winner" : "";
  const label = slot && slot.name ? slot.name : fallback;
  return `<span class="bracket-slot${winnerClass}">${escapeHtml(label)}</span>`;
}

function matchToSlots(match) {
  return match.entrants.map((entrant) => ({
    name: entrant ? entrant.name : "TBD",
    isWinner: Boolean(match.winner && entrant && match.winner.name === entrant.name)
  }));
}

function renderBracketRound(label, matches) {
  return `
    <div class="bracket-round">
      <h3>${escapeHtml(label)}</h3>
      ${matches.map((match) => {
        const slots = matchToSlots(match);
        return `
          <div class="bracket-match">
            ${renderBracketSlot(slots[0])}
            ${renderBracketSlot(slots[1])}
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderDivisionBracket(division) {
  return `
    <section class="bracket-division">
      <h3>${escapeHtml(division.name)}</h3>
      <div class="live-bracket-grid division-grid">
        ${division.rounds.map((round, index) => renderBracketRound(divisionRoundName(index), round)).join("")}
      </div>
    </section>
  `;
}

function renderFinalsBracket() {
  return `
    <section class="bracket-division finals-bracket">
      <h3>Final Cut</h3>
      <div class="live-bracket-grid finals-grid">
        ${state.finals.map((round, index) => renderBracketRound(finalRoundName(index), round)).join("")}
      </div>
    </section>
  `;
}

function renderBracket() {
  liveBracket.innerHTML = state.divisions.map(renderDivisionBracket).join("") + renderFinalsBracket();
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
  const trailerLink = event.target.closest("a");
  if (trailerLink) {
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

const factsReady = loadMovieFacts();
