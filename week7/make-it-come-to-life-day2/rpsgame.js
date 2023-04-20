let hands = ["rock", "paper", "scissors"];

const player1Choice=0;
const player2Choice=0;

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
};

let player1 = {
  name: "Todd",
  winNumbers: 0,
  getHand: getHand,
};
let player2 = {
  name: "Mary",
  winNumbers: 0,
  getHand: getHand,
};

function playRound(c, d) {
  const a = c;
  const b = d;

  if ((a === "rock" && b == "rock") || (a == "paper" && b == "paper") || (a == "scissors" && b == "scissors")) {
    console.log('Player1 hand:', a +  "Player 2 hand: " + b);
    console.log ("It's a tie!");
    return null;
  }
  else if ((a === "rock" && b == "scissors") || (a == "scissors" && b == "paper") || (a == "paper" && b == "rock")) {
    console.log('Player1 hand:', a +  "Player 2 hand: " + b);
    console.log (player1.name,"Wins!");
    return false;
  }
  else if ((a === "rock" && b == "rock") || (a == "paper" && b == "paper") || (a == "scissors" && b == "scissors")) {
    console.log('Player1 hand:', a +  "Player 2 hand: " + b);
    console.log (player2.name, "Wins!");
    return true;
  }
}


// const main = document.querySelector('section');

let player1Wins = 0;
let player2Wins = 0;

function playGame() {
  player1.hand = hands[getHand()];
  player2.hand = hands[getHand()];


let result = playRound(player1.hand, player2.hand);
let gameResult =document.getElementById("gameResult");

if (result === null) {
  gameResult.innerText = "It's a tie!";
} else if (result === false) {
  player1Wins++;
  gameResult.innerText = player1.name + " Wins!";
} else {
  player2Wins++;
  gameResult.innerText = player2.name + " Wins!";
}  
  updateScore();
}

function updateScore() {
  let scoreDisplay = document.getElementById('soreDisplay');
  scoreDisplay.innerText = player1Wins - player2Wins;
} 