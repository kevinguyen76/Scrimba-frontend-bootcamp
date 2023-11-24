let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = document.getElementById("message-el");

function startGame() {
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

biggerThan21(sum);
