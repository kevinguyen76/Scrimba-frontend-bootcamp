let sum = 0;
let cardsArr = [];
let hasBlackJack = false;
let isAlive = false;
let message = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Kevin",
  chips: 888,
};

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  hasBlackJack = false;

  if (isAlive && cardsArr.length === 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArr.push(firstCard);
    cardsArr.push(secondCard);
    sum = firstCard + secondCard;

    renderGame();
  } else {
    cardsArr.length = 0;
    startGame();
  }
}

function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cardsArr.length; i++) {
    cardsEl.textContent += cardsArr[i] + " ";
  }

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
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cardsArr.push(card);
    renderGame();
  }
}
