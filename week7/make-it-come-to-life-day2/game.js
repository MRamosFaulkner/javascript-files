class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
    }
  }
  
  function getWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) return null;
  
    if (
      (player1Choice === 'rock' && player2Choice === 'scissors') ||
      (player1Choice === 'scissors' && player2Choice === 'paper') ||
      (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
      return 1;
    }
    return 2;
  }
  
  function playRound(player1, player2) {
    const choices = ['rock', 'paper', 'scissors'];
    const player1Choice = choices[Math.floor(Math.random() * 3)];
    const player2Choice = choices[Math.floor(Math.random() * 3)];
  
    const winner = getWinner(player1Choice, player2Choice);
  
    if (winner === 1) {
      player1.score++;
    } else if (winner === 2) {
      player2.score++;
    }
  }
  
  function playGame(player1, player2, playUntil) {
    while (player1.score < playUntil && player2.score < playUntil) {
      playRound(player1, player2);
    }
  
    return player1.score >= playUntil ? player1 : player2;
  }
  
  function playTournament(player1, player2, player3, player4, playUntil) {
    const semifinal1Winner = playGame(player1, player2, playUntil);
    const semifinal2Winner = playGame(player3, player4, playUntil);
    const champion = playGame(semifinal1Winner, semifinal2Winner, playUntil);
  
    console.log(`${champion.name} is the world champion`);
  }
  
  // Example usage
  const player1 = new Player("Alice");
  const player2 = new Player("Bob");
  const player3 = new Player("Charlie");
  const player4 = new Player("David");
  
  playTournament(player1, player2, player3, player4, 3);
  