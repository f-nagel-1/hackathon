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
		}

	}else if(compChoice === "paper"){
		
	}else if(compChoice === "scissor"){
		if(userChoice === "paper"){
			
		}
	}






}











// function checkWinner(argument) {
	
// }


// let reset = document.getElementById("btn")
// reset.addEventListener("click", function(){
// 	startGame();
// })

// startGame()