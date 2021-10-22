let scoreBoard = document.getElementsByClassName("scoreboard");
let userPoint = document.getElementById("userScore");
let compPoint = document.getElementById("computerScore");
let result = document.getElementById("results");
let choices = document.getElementById("choices");
let logos = document.getElementsByClassName("logo");
let rock = document.getElementById("imageRock");
let paper = document.getElementById("imagePaper");
let scissor = document.getElementById("imageScissors");



let options = ["scissor", "rock", "paper"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var userScore = 0;
var compScore = 0;

function userPick(userChoice) {

	let compChoice = options[getRandomInt(3)]
	console.log("computer pick is " + compChoice + " the user choice is " + userChoice)
	if(compChoice === userChoice){
		result.innerHTML= "It's a tie!"
	} else if(compChoice === "rock"){
		if(userChoice === "paper"){
			userScore++
			userPoint.innerHTML= userScore
			result.innerHTML= "paper covers rock wooo"
		} else if(userChoice === "scissor"){
			compScore++
			compPoint.innerHTML= compScore
			result.innerHTML= "rock smashes scissor raa"
		}

	}else if(compChoice === "paper"){
		if(userChoice === "scissor"){
			userScore++
			userPoint.innerHTML= userScore
			result.innerHTML= "scissor cuts paper"
		} else if(userChoice === "rock"){
			compScore++
			compPoint.innerHTML= compScore
			result.innerHTML= "paper covers rock"
		}
		
	}else if(compChoice === "scissor"){
		if(userChoice === "rock"){
			userScore++
			userPoint.innerHTML= userScore
			result.innerHTML= "rock smashes scissor raa"
	}	else if(userChoice === "paper"){
			compScore++
			compPoint.innerHTML= compScore
			result.innerHTML= "scissor cuts paper"
		}
}};


// function play()


function checkWinner() {
  if (userScore > 2) {
        result.innerHTML= "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}


checkWinner()





// function winner() {
// 	if(userScore>2){
// 		result.innerHTML= "YOU ARE THE WINNER!"
// 	} else if(compScore>2){
// 		result.innerHTML= "YOU LOSE,TRY AGAIN!"
// 	} 
// }

// winner()