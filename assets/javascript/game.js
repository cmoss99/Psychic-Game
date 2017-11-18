// Letters Array to be randomly selected by computer
 var myLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;

 var guessedSoFar = [];

 var playerGuess = null;

 var letterToBeGuessed = myLetters[Math.floor(Math.random() * myLetters.length)];
 console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessedSoFar + " Computer picked: " + letterToBeGuessed);

 document.onkeyup = function(event) {

var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

 	if (guessedSoFar.indexOf(playerGuess) < 0 && myLetters.indexOf(playerGuess) >= 0) {
 		guessedSoFar[guessedSoFar.length] = playerGuess;
 		guessesLeft--;
 	}

 	if (letterToBeGuessed == playerGuess) {
  	wins++;
  		guessesLeft = 9;
  		guessedSoFar = [];
  		letterToBeGuessed = myLetters[Math.floor(Math.random() * myLetters.length)];
 	}


 	if (guessesLeft == 0) {
  		losses++;
    	guessesLeft = 9;
  		guessedSoFar = [];
  		letterToBeGuessed = myLetters[Math.floor(Math.random() * myLetters.length)];
  	}

	var html = "<p><h1>My Psychic Game</h1></p>" + "<p><h4> Can You Guess What Letter I\'m Thinking Of ???</h4></p>" + "<p><h4>Your Total Wins: " + wins + "</h4></p>" + "<p><h4>Your Total Losses: " + losses + "</h4></p>" + "<p><h4>Your Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your Guesses So Far: " + guessedSoFar + "</h4></p>";
 	document.querySelector("#game").innerHTML = html;

 }
