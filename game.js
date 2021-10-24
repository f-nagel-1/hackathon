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
			result.innerHTML= "PAPER BEATS ROCK"
			console.log(userScore,compScore)
			if (userScore > 2){
				userWinner();}
			}
		} else if(userChoice === "scissor"){
			compScore++
			compPoint.innerHTML= compScore
			result.innerHTML= "ROCK BEATS SCISSOR"
			console.log(userScore,compScore)
			if (compScore > 2){
				compWinner();}
			}else if(compChoice === "paper"){
				if(userChoice === "scissor"){
					userScore++
					userPoint.innerHTML= userScore
					result.innerHTML= "SCISSOR BEATS PAPER"
					console.log(userScore,compScore)
					if (userScore > 2){
						userWinner();}
					} else if(userChoice === "rock"){
						compScore++
						compPoint.innerHTML= compScore
						result.innerHTML= "PAPER BEATS ROCK"
						console.log(userScore,compScore)
						if (compScore > 2){
							compWinner();}
						}
					}else if(compChoice === "scissor"){
						if(userChoice === "rock"){
							userScore++
							userPoint.innerHTML= userScore
							result.innerHTML= "ROCK BEATS SCISSOR"
							console.log(userScore,compScore)
							if (userScore > 2){
								userWinner();}
							}	else if(userChoice === "paper"){
								compScore++
								compPoint.innerHTML= compScore
								result.innerHTML= "SCISSOR BEATS PAPER"
								console.log(userScore,compScore)
								if (compScore > 2){
									compWinner();}
								}
							}return userScore;
							return compScore;
							return compChoice;
							return userChoice;
						};
						function userWinner(){
							choices.style.visibility = 'hidden';
							result.innerHTML = "YOU WIN!";
						}
						function compWinner(){
							choices.style.visibility = 'hidden';
							result.innerHTML = "SORRY, YOU LOSE!";
						}
						function makeMove() {
							var t;
							window.onload = resetTimer;
							window.onmousemove = resetTimer;

    let compChoice = options[getRandomInt(3)]
    console.log("computer pick is " + compChoice + " the user choice is " + userChoice)
        if(compChoice === userChoice){
        result.innerHTML= "It's a tie!"
    } else if(compChoice === "rock"){
        if(userChoice === "paper"){
                userScore++
                userPoint.innerHTML= userScore
                result.innerHTML= "PAPER BEATS ROCK"
                if (userScore > 2){
                    userWinner();}
            }
            } else if(userChoice === "scissor"){
                compScore++
                compPoint.innerHTML= compScore
                result.innerHTML= "ROCK BEATS SCISSOR"
                if (compScore > 2){
                compWinner();}
            }else if(compChoice === "paper"){
                if(userChoice === "scissor"){
                    userScore++
                    userPoint.innerHTML= userScore
                    result.innerHTML= "SCISSOR BEATS PAPER"
                    if (userScore > 2){
                        userWinner();}
                    } else if(userChoice === "rock"){
                        compScore++
                        compPoint.innerHTML= compScore
                        result.innerHTML= "PAPER BEATS ROCK"
                        if (compScore > 2){
                            compWinner();}
                            }
                    }else if(compChoice === "scissor"){
                        if(userChoice === "rock"){
                            userScore++
                            userPoint.innerHTML= userScore
                            result.innerHTML= "ROCK BEATS SCISSOR"
                            if (userScore > 2){
                                userWinner();}
                            }	else if(userChoice === "paper"){
                                compScore++
                                compPoint.innerHTML= compScore
                                result.innerHTML= "SCISSOR BEATS PAPER"
                                if (compScore > 2){
                                compWinner();}
                            }
                        }return userScore;
                                return compScore;
                                return compChoice;
                                return userChoice;
                        };



function userWinner(){
choices.style.visibility = 'hidden';
result.innerHTML = "YOU WIN!";

function compWinner(){
choices.style.visibility = 'hidden';
result.innerHTML = "SORRY, YOU LOSE!";}


function makeMove() {
var t;
window.onload = resetTimer;

window.onmousemove = resetTimer;
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
		t = setTimeout(yourFunction, 5000);
		timeOutPrompt.innerHTML = "";
	}
}

	function yourFunction() {
	timeOutPrompt.innerHTML = "Make your move!";
		// console.log("message appeared");
	}
	function resetTimer() {
	clearTimeout(t);
	t = setTimeout(yourFunction, 5000);
	timeOutPrompt.innerHTML = "";
	}}

  
  
function yourFunction() {
timeOutPrompt.innerHTML = "Make your move!";
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
	console.log(userScore,compScore)
	userScore = 0;
	compScore = 0;

	choices.style.visibility = 'visible';
	results.innerHTML = "Start the game by selecting a move. Good luck!" ;
});


userPoint.innerHTML = 0;
compPoint.innerHTML = 0;

choices.style.visibility = 'visible';
results.innerHTML = "Start the game by selecting a move. Good luck!" ;
                    });

choices.style.visibility = 'visible'; });


