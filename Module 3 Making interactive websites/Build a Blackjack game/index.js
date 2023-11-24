let firstCard = 10;
let secondCard = 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let cardsArr = [firstCard, secondCard];

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cardsArr[0] + " " + cardsArr[1];
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message.textContent = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    hasBlackJack = true;
    message.textContent = "Woohoo! You've got Blackjack! 🥳";
  } else {
    isAlive = false;
    message.textContent = "You've busted... You're out of the game! 😭";
  }
}

function newCard() {
  console.log("Do you want to draw a new card?");

  // 1. Create a card variable, and hard code its value to a number (2-11)
  let extraCard = 9;

  // 2. Add the new card to the sum variable
  sum += extraCard;

  // 3. Call startGame()
  renderGame();
}
