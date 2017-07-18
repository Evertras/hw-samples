var words = [
  'hanzo',
  'genji',
  'symmetra',
  'junkrat',
  'roadhog',
  'mei',
  'pharah',
  'ana',
  'lucio',
  'mercy',
  'zenyatta'
];

var wins = 0;
var currentGuess = [];
var lettersGuessed = [];
var wrongGuessesRemaining = 5;
var currentAnswer = '';

var winsElement = document.getElementById('wins');
var gameAreaElement = document.getElementById('game-area');
var pressAnyKeyMessageElement = document.getElementById('press-any-key');
var currentGuessElement = document.getElementById('current-guess');
var guessesRemainingElement = document.getElementById('guesses-remaining');
var lettersGuessedElement = document.getElementById('letters-guessed');

function initializeGame() {
  currentGuess = [];
  currentAnswer = words[Math.floor(Math.random() * words.length)].toUpperCase();
  currentGuess = [];
  lettersGuessed = [];
  wrongGuessesRemaining = 5;
  for (var i = 0; i < currentAnswer.length; i++) {
    currentGuess.push("_");
  }

  updateDisplay();
  gameStarted = true;
}


function isLetterCode(code) {
  return code >= 65 && code <= 90;
}

function isLetterInAnswer(letter) {
  return currentAnswer.indexOf(letter) !== -1;
}

function alreadyGuessed(letter) {
  return lettersGuessed.indexOf(letter) !== -1;
}

function isGuessComplete() {
  return currentGuess.indexOf('_') === -1;
}

function updateDisplay() {
  currentGuessElement.innerHTML = currentGuess.join(' ');
  guessesRemainingElement.innerHTML = wrongGuessesRemaining;
  lettersGuessedElement.innerHTML = lettersGuessed.join(', ');
  winsElement.innerHTML = wins;
}

function updateGuess() {
  currentGuess = [];
  for (var i = 0; i < currentAnswer.length; i++) {
    var letter = currentAnswer[i];
    if (alreadyGuessed(letter)) {
      currentGuess.push(letter);
    } else {
      currentGuess.push('_');
    }
  }
}

function processCompleteState() {
  if (wrongGuessesRemaining === 0) {
    initializeGame();
  } else if (isGuessComplete()) {
    wins++;
    initializeGame();
  }
}

document.onkeydown = function(event) {
  var letter = String.fromCharCode(event.keyCode);
  if (isLetterCode(event.keyCode) && !alreadyGuessed(letter)) {
    lettersGuessed.push(letter);

    if (!isLetterInAnswer(letter)) {
      wrongGuessesRemaining--;
    }

    updateGuess();
    processCompleteState();
    updateDisplay();
  }
};

initializeGame();