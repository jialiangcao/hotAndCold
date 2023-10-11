let answer = Math.floor(Math.random() * 100) + 1
let turnsTaken = 0
let userGuess = 50;
var siteWidth = 1280;
let wincount = 0;

function calculate() {
    turnsTaken++;
    userGuess = parseInt(document.getElementById("inputbox").value)
    if (isNaN(userGuess) || (userGuess > 100 || userGuess < 0)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    } else {
        let difference = Math.abs(answer - userGuess);
        if (userGuess > answer) {
            increment = " Try to go a bit lower";
        } else {
            increment = " Try to go a bit higher";
        }
        if (difference === 0) {
            document.getElementById("result").innerHTML = "On the money! You've won Hot and Cold.";
            wincount++;
        } else if (difference <= 10) {
            document.getElementById("result").innerHTML = "It's burning up in here." + increment;
        } else if (difference <= 30) {
            document.getElementById("result").innerHTML = "It's getting kind of warm." + increment;
        } else {
            document.getElementById("result").innerHTML = "Sorry bud, you're cold." + increment;
        }
        document.getElementById("turns").innerHTML = "Turns taken: " + turnsTaken;
    }
    document.getElementById("wins").innerHTML = "Wins: " + wincount;
}

function increaseGuess() {
    if (userGuess < 100) {
        userGuess++;
        document.getElementById("inputbox").value = userGuess;
    }
}

function decreaseGuess() {
    if (userGuess > 0) {
        userGuess--;
        document.getElementById("inputbox").value = userGuess;
    }
}