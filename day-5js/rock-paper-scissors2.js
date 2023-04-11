

let hands = ["rock", "paper", "scissors"];
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}
let player1 = {
  name: "Player 1",
  getHand: getHand,
};
let player2 = {
  name: "Player 2",
  getHand: getHand,
};
let player3 = {
  name: "Player 3",
  getHand: getHand,
};
let player4 = {
  name: "Player 4",
  getHand: getHand,
};
function playRound(player1, player2) {
  let player1Hand = player1.getHand();
  let player2Hand = player2.getHand();

  console.log(player1.name + " hand = " + player1Hand);
  console.log(player2.name + " hand = " + player2Hand);

  if (player1Hand == player2Hand) {
    console.log("it's a tie");
    return null;
  } else if (
    (player1Hand === "rock" && player2Hand === "scissors") ||
    (player1Hand === "scissors" && player2Hand === "paper") ||
    (player1Hand === "paper" && player2Hand === "rock")
  ) {
    console.log(player1.name + " Wins");
    return player1;
  } else if (
    (player2Hand === "rock" && player1Hand === "scissors") ||
    (player2Hand === "scissors" && player1Hand === "paper") ||
    (player2Hand === "paper" && player1Hand === "rock")
  ) {
    console.log(player2.name + " Wins");
    return player2;
  }
}
function playGame(player1, player2, playUntil) {
  let p1Win = 0;
  let p2Win = 0;
  while (p1Win < playUntil && p2Win < playUntil) {
    console.log(
      player1.name +
        " Wins: " +
        p1Win +
        " | " +
        player2.name +
        " Wins: " +
        p2Win
    );
    let roundWinner = playRound(player1, player2);
    if (roundWinner === null) {
    } else if (roundWinner.name === player1.name) {
      p1Win += 1;
    } else if (roundWinner.name === player2.name) {
      p2Win += 1;
    }
  }
  if (p1Win == playUntil) {
    return player1;
  } else if (p2Win == playUntil) {
    return player2;
  }
}
function playTournament(player1, player2, player3, player4, playUntil) {
  let group1Winner = playGame(player1, player2, playUntil);
  let group2Winner = playGame(player3, player4, playUntil);
  let tournamentWinner = playGame(group1Winner, group2Winner, playUntil);
  return tournamentWinner;
}
// playRound(player1,player2);
console.log("Winner is " + playGame(player1, player2, 3).name);
// playGame (player1, player2, 5);
console.log();
console.log();
console.log(
  playTournament(player1, player2, player3, player4, 3).name +
    " is the world champion!"
);