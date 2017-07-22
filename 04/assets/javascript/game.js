var targetScore = 0;
var userScore = 0;
var totalWins = 0;
var totalLosses = 0;
var crystalScores = [];

function startGame() {
  targetScore = Math.floor(Math.random() * 101 + 19);
  userScore = 0;

  for (var i = 0; i < 4; i++) {
    crystalScores[i] = Math.floor(Math.random() * 12 + 1);
  }
}

function updateDisplays() {
  document.getElementById('wins').innerHTML = totalWins;
  document.getElementById('losses').innerHTML = totalLosses;
  document.getElementById('target-score').innerHTML = targetScore;
  document.getElementById('user-score').innerHTML = userScore;
}

function addScore(score) {
  userScore += score;

  if (userScore === targetScore) {
    totalWins++;
    startGame();
  } else if (userScore > targetScore) {
    totalLosses++;
    startGame();
  }

  updateDisplays();
}

for (var i = 0; i < 4; i++) {
  (function(index) {
    document.getElementById('crystal-' + (index + 1)).addEventListener('click', function() {
      addScore(crystalScores[index]);
    });
  })(i);
}

startGame();
updateDisplays();