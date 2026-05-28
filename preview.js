const intro = document.querySelector("#intro-screen");
const matchup = document.querySelector("#matchup-screen");
const popup = document.querySelector("#popup");
const popupMessage = document.querySelector("#popup-message");
const previousButton = document.querySelector("#previous-matchup");

let selectedName = "";

function startTournament() {
  intro.classList.add("hidden");
  matchup.classList.remove("hidden");
}

document.querySelector("#default-seeds").addEventListener("click", startTournament);
document.querySelector("#random-seeds").addEventListener("click", startTournament);

document.querySelectorAll(".dino-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    selectedName = card.querySelector("h2").textContent;
    popupMessage.textContent = `Advance ${selectedName}?`;
    popup.classList.remove("hidden");
    previousButton.disabled = false;
  });
});

document.querySelector("#back-button").addEventListener("click", () => {
  popup.classList.add("hidden");
});

document.querySelector("#next-button").addEventListener("click", () => {
  popupMessage.textContent = `${selectedName} advances. The live site continues to the next matchup here.`;
});

document.querySelector("#restart-tournament").addEventListener("click", () => {
  matchup.classList.add("hidden");
  intro.classList.remove("hidden");
  popup.classList.add("hidden");
  previousButton.disabled = true;
});
