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
