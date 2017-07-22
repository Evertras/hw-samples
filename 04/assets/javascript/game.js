var targetScore;
var userScore;
var totalWins;
var totalLosses;
var crystalScores = [];

function startGame() {
  targetScore = Math.floor(Math.random() * 101 + 19);
  userScore = 0;

  for (var i = 0; i < 4; i++) {
    crystalScores[i] = Math.floor(Math.random() * 12 + 1);
  }
}

startGame();
