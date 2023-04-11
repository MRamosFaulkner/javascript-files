
const hands = ['rock', 'paper', 'scissors'];

function getHand(){
    let random = parseInt(Math.random()*10)%3;

    return random;
}

const player1 = {
    name: 'Todd',
    hand: hands[getHand()]
};

const player2 = {
    name: 'Mary',
    hand: hands[getHand()]
};

function playRound(a, b) {
    const player1Hand = a;
    const player2Hand = b;

    if (player1Hand === player2Hand) {
        console.log("It's a tie!");

        return null;
    }
    else if (
        (player1Hand === 'rock' && player2Hand === 'scissors' ) ||
        (player1Hand === 'paper' && player2Hand === 'rock') ||
        (player1Hand === 'scissors' && player2Hand === 'paper')
    ) {
        console.log(player1.name, "is the winner!");
        return player1.name;
    } else {
        console.log(player2.name, "is the winner!");
        return player2.name;
    }   

}

playRound(player1.hand, player2.hand);
