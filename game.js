let scoreBoard = document.getElementsByClassName("scoreboard");
let userPoint = document.getElementById("userScore");
let compPoint = document.getElementById("computerScore");
let result = document.getElementById("results");
let choices = document.getElementById("choices");
let logos = document.getElementsByClassName("logo");
let rock = document.getElementById("imageRock");
let paper = document.getElementById("imagePaper");
let scissor = document.getElementById("imageScissors");


let timeOutPrompt = document.getElementsByTagName("p")[0];
let resetButton = document.getElementById("btn");



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

//
// function decideifexecute(){
//     if (compScore > 2){
//         result.innerHTML = "you lost!";
//     } else if (userScore > 2){
//         result.innerHTML = "you won!";
//     } else {
//         userPick();
//     }
// }
//
// decideifexecute();



function makeMove() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function yourFunction() {
        timeOutPrompt.innerHTML = "Make your move!";
        // console.log("message appeared");
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(yourFunction, 2000);
        timeOutPrompt.innerHTML = "";
    }
}
makeMove();



resetButton.addEventListener("click", function() {
      userPoint.innerHTML = 0;
      compPoint.innerHTML = 0;
    });
}
