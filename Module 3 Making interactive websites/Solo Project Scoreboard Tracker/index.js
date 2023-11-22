let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

// Home score
function homePlusOne() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
}

function homePlusTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function homePlusThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

// Guest Score
function guestPlusOne() {
  guestScore++;
  guestScoreEl.textContent = guestScore;
}

function guestPlusTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function guestPlusThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  document.getElementById("winner").textContent = "";
}

function winner() {
  if (homeScore > guestScore) {
    document.getElementById("winner").textContent =
      "Home wins with " + homeScore;
  } else if (guestScore > homeScore) {
    document.getElementById("winner").textContent =
      "Guest wins with " + guestScore;
  } else {
    document.getElementById("winner").textContent = "Tied Game";
  }
}
