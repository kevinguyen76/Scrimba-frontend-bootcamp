let firstCard = 10;
let secondCard = 34;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

function biggerThan21(number) {
  if (number <= 20) {
    console.log("Do you want to draw a new card? 🙂");
    message = "Do you want to draw a new card? 🙂";
  } else if (number === 21) {
    hasBlackJack = true;
    console.log("Woohoo! You've got Blackjack! 🥳");
    message = "Woohoo! You've got Blackjack! 🥳";
  } else {
    isAlive = false;
    console.log("You've busted... You're out of the game! 😭");
    message = "You've busted... You're out of the game! 😭";
  }
}

biggerThan21(sum);
