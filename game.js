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
        t = setTimeout(yourFunction, 3000);
        timeOutPrompt.innerHTML = "";
    }
}
makeMove();



resetButton.addEventListener("click", function() {
      userPoint.innerHTML = "0";
      computerScore.innerHTML = "0";

     //do we need something with event listeners here?
    });
