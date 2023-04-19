let hands = ["rock", "paper", "scissors"];

let getHand = () => {
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
let player3 = {
  name: "Jim",
  winNumbers: 0,
  getHand: getHand,
};
let player4 = {
  name: "Anna",
  winNumbers: 0,
  getHand: getHand,
};
gamePlay = false;
roundsPlayed = 0;
playUntil =3;

const roundsPlayed = document.getElementById("roundsPlayed");

const playerName = document.getElementById("playerName");

const showRounds = document.getElementById("ul#rounds");

const historyOfGame = document.getElementById("ul#matches");

const rock = document.getElementById("rock");

const paper = document.getElementById("paper");

const scissors = document.getElementById("scissors");

const playGame = document.getElementById("playGame");

playerName.addEventListener("input", function(e) {
  player1.name = playerName.value;
});
roundsPlayed.addEventListener("change", function(e) {
  playUntil = roundsPlayed.value;
})

let chooseWinner = (p1Move, p2Move, p1, p2) => {
  switch (p1Move) {
    case 0:
      if (p2Move === 0) {
        return null;
      } else if (p2Move === 1) {
        p2.winNumbers++;
        return p2;
      } else if (p2Move === 2) {
        p1.winNumbers++;
        return p1;
      }  
      case 1:
        if (p2Move === 0) {
          p1.winNumbers++;
          return p1;
        } else if (p2Move === 1) {
          return null;
        } else if (p2Move === 2) {
          p2.winNumbers++;
          return p2;
        } 
      case 2:
        if (p2Move === 0) {
          p2.winNumbers++;
            return p2;
        } else if (p2Move === 1) {
            p1.winNumbers++;
            return p1;
        } else if (p2Move === 2) {
            return null;
        }
      default:
        return null;
      }        
}
let playRound = (move, p1,p2) => {
    if(roundsPlayed == 0) {
        showRounds.innerHTML = "";
    }
    p1.getHand = move;
    let p1Move = p1.getHand;
      
    p2.getHand = getHand();
    let p2Move = p2.getHand;
      
    let roundWinner = chooseWinner(p1Move, p2Move, p1, p2);
    if (roundWinner == null) {
          roundsPlayed++;
          let roundInfo = document.createElement("li");
          roundInfo.innerHTML = "It's a tie";
          roundInfo.className = "tied";
          if(showRounds.firstChild) {
            showRounds.insertBefore(roundInfo, showRounds.firstChild);
          } else {
            showRounds.appendChild(roundInfo);
          }
          return null;
    } else {
      if(p1.winNumbers < playUntil && p2.winNumbers < playUntil) {
        roundsPlayed++;
        let roundInfo.innerHTML = roundWinner.name + " Wins" + roundsPlayed;
        if(roundWinner.name == "Player 2") {
          roundInfo.className = "lost";
        } else {
          roundInfo.className = "won";
        }
        return roundWinner;
    } else {
        if(p1.winNumbers == playUntil) {
          roundsPlayed++;
          let roundInfo1.innerHTML = roundWinner.name + " Wins" + roundsPlayed;
          if(roundWinner.name == "Player 2") {
            roundInfo.className = "lost";
          } else {
            roundInfo1.className = "won";
          }
        let roundInfo = document.createElement("li");
        roundInfo.innerHTML = "\n" + p1.name + " Wins with " + p1.winNumbers + " - " + p2.name + " Wins with " + p2.winNumbers;
        roundInfo.className = "won";
        if(showRounds.firstChild) {
          showRounds.insertBefore(roundInfo1, showRounds.firstChild);
          showRounds.insertBefore(roundInfo, showRounds.firstChild);
        } else {
          showRounds.appendChild(roundInfo1);
    }
    let gameInfo = document.createElement("li");
    gameInfo.innerHTML = roundWinner.name + " Wins, with score of " + p1.winNumbers + " - " + p2.winNumbers;
    gameInfo.classList = "won";
    if(gamesPlayed.firstChild) {
      gamesPlayed.insertBefore(gameInfo, gamesPlayed.firstChild);
    } else {
      gamesPlayed.appendChild(gameInfo);
    }
    roundsPlayed = 0;
    p1.winNumbers = 0;
    p2.winNumbers = 0;
    return p1;
} else if (p2.winNumbers < playUntil) {  
  roundsPlayed++;
  let roundInfo1 = document.createElement("li");
  roundInfo1.innerHTML = roundWinner.name + " Wins" + roundsPlayed;
  if(roundWinner.name == "Player 2") {
    roundInfo1.className = "lost";
  } else {
    roundInfo1.className = "won";
  }
  let roundInfo = document.createElement("li");
  roundInfo.innerHTML = "\n" + p2.name + " Wins with " + p1.winNumbers + " - " + p2.winNumbers;
  roundInfo.className = "won";))
    }           



// function playRound(player1, player2) {
//   let player1Hand = player1.getHand();
//   let player2Hand = player2.getHand();

//   console.log(player1.name + " hand = " + player1Hand);
//   console.log(player2.name + " hand = " + player2Hand);

//   if (player1Hand == player2Hand) {
//     console.log("it's a tie");
//     return null;
//   } else if (
//     (player1Hand === "rock" && player2Hand === "scissors") ||
//     (player1Hand === "scissors" && player2Hand === "paper") ||
//     (player1Hand === "paper" && player2Hand === "rock")
//   ) {
//     console.log(player1.name + " Wins");
//     return player1;
//   } else if (
//     (player2Hand === "rock" && player1Hand === "scissors") ||
//     (player2Hand === "scissors" && player1Hand === "paper") ||
//     (player2Hand === "paper" && player1Hand === "rock")
//   ) {
//     console.log(player2.name + " Wins");
//     return player2;
//   }
// }
// let playRound = (move, p1,p2) => {
//   if(roundsPlayed == 0) {
//     showRounds.innerHTML = "";
//   }
//   p1.getHand = move;
//   let p1Move = p1.getHand;

//   p2.getHand = getHand();
//   let p2Move = p2.getHand;

//   let roundWinner = chooseWinner(p1Move, p2Move, p1, p2);
//   if (roundWinner!== null) {
//     roundsPlayed
// function playGame(player1, player2, playUntil) {
//   let p1Win = 0;
//   let p2Win = 0;
//   while (p1Win < playUntil && p2Win < playUntil) {
//     console.log(
//       player1.name +
//         " Wins: " +
//         p1Win +
//         " | " +
//         player2.name +
//         " Wins: " +
//         p2Win
//     );
//     let roundWinner = playRound(player1, player2);
//     if (roundWinner === null) {
//     } else if (roundWinner.name === player1.name) {
//       p1Win += 1;
//     } else if (roundWinner.name === player2.name) {
//       p2Win += 1;
//     }
//   }
//   if (p1Win == playUntil) {
//     return player1;
//   } else if (p2Win == playUntil) {
//     return player2;
//   }
// }
// function playTournament(player1, player2, player3, player4, playUntil) {
//   let group1Winner = playGame(player1, player2, playUntil);
//   let group2Winner = playGame(player3, player4, playUntil);
//   let tournamentWinner = playGame(group1Winner, group2Winner, playUntil);
//   return tournamentWinner;
// }
// // playRound(player1,player2);
// console.log("Winner is " + playGame(player1, player2, 3).name);
// // playGame (player1, player2, 5);
// console.log();
// console.log();
// console.log(
//   playTournament(player1, player2, player3, player4, 3).name +
//     " is the world champion!"
// );