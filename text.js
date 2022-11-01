function memory() {
  if (localStorage.wins == undefined) {
    localStorage.wins = 0;
  }
  document.getElementById("winNumber").innerHTML = localStorage.wins;
  if (localStorage.losses == undefined) {
    localStorage.losses = 0;
  }
  document.getElementById("loseNumber").innerHTML = localStorage.losses;
  if (localStorage.ties == undefined) {
    localStorage.ties = 0;
  }
  document.getElementById("tieNumber").innerHTML = localStorage.ties;
}

function game(x) {
  sessionStorage.playerChoice = x;
  document.getElementById("rock").style.transform = "scale(1)";
  document.getElementById("paper").style.transform = "scale(1)";
  document.getElementById("scissors").style.transform = "scale(1)";
  document.getElementById(sessionStorage.playerChoice).style.transform = "scale(1.4)";
  var y = Math.ceil(Math.random() * 3);
  if (y == 1) {
    sessionStorage.opponentChoice = "rock";
  }
  else if (y == 2) {
    sessionStorage.opponentChoice = "paper";
  }
  else if (y == 3) {
    sessionStorage.opponentChoice = "scissors";
  }
  document.getElementById("opponentChoice").src = "img/" + sessionStorage.opponentChoice + ".svg";
  if ((sessionStorage.opponentChoice == "rock") || (sessionStorage.opponentChoice == "paper")) {
    document.getElementById("opponentChoice").style.height = "auto";
    document.getElementById("opponentChoice").style.width = "7em";
  }
  else if (sessionStorage.opponentChoice == "scissors") {
    document.getElementById("opponentChoice").style.height = "100%";
    document.getElementById("opponentChoice").style.width = "auto";
  }
  document.getElementById("opponentChoice").style.animation = "expand .25s ease 0s forwards";
  setTimeout(() => (document.getElementById("opponentChoice").style.animation = "none"), 250);
  if (sessionStorage.playerChoice == sessionStorage.opponentChoice) {
    sessionStorage.result = "tie";
  }
  else {
    if (sessionStorage.playerChoice == "rock") {
      if (sessionStorage.opponentChoice == "paper") {
        sessionStorage.result = "lose";
      }
      else if (sessionStorage.opponentChoice == "scissors") {
        sessionStorage.result = "win";
      }
    }
    else if (sessionStorage.playerChoice == "paper") {
      if (sessionStorage.opponentChoice == "rock") {
        sessionStorage.result = "win";
      }
      else if (sessionStorage.opponentChoice == "scissors") {
        sessionStorage.result = "lose";
      }
    }
    else if (sessionStorage.playerChoice == "scissors") {
      if (sessionStorage.opponentChoice == "rock") {
        sessionStorage.result = "lose";
      }
      else if (sessionStorage.opponentChoice == "paper") {
        sessionStorage.result = "win";
      }
    }
  }
  document.getElementById("win").style.transform = "scale(1)";
  document.getElementById("lose").style.transform = "scale(1)";
  document.getElementById("tie").style.transform = "scale(1)";
  document.getElementById(sessionStorage.result).style.transform = "scale(1.1)";
  document.getElementById("winLabel").style.textShadow = "none";
  document.getElementById("winNumber").style.textShadow = "none";
  document.getElementById("loseLabel").style.textShadow = "none";
  document.getElementById("loseNumber").style.textShadow = "none";
  document.getElementById("tieLabel").style.textShadow = "none";
  document.getElementById("tieNumber").style.textShadow = "none";
  document.getElementById(sessionStorage.result + "Label").style.textShadow = "0 0 5em var(--fire3)";
  document.getElementById(sessionStorage.result + "Number").style.textShadow = "0 0 5em var(--fire3)";
  if (sessionStorage.result == "win") {
    document.getElementById("message").innerHTML = "Congrats, you won this round!";
    localStorage.wins++;
    document.getElementById("winNumber").innerHTML = localStorage.wins;
  }
  else if (sessionStorage.result == "lose") {
    document.getElementById("message").innerHTML = "Aww, you lost. Want to try again?";
    localStorage.losses++;
    document.getElementById("loseNumber").innerHTML = localStorage.losses;
  }
  else if (sessionStorage.result == "tie") {
    document.getElementById("message").innerHTML = "It's a tie! Play again to break it!";
    localStorage.ties++;
    document.getElementById("tieNumber").innerHTML = localStorage.ties;
  }
}

function reset() {
  document.getElementById("rock").style.transform = "scale(1)";
  document.getElementById("paper").style.transform = "scale(1)";
  document.getElementById("scissors").style.transform = "scale(1)";
  document.getElementById("opponentChoice").src = "img/questionMark.svg";
  document.getElementById("opponentChoice").style.height = "100%";
  document.getElementById("opponentChoice").style.width = "auto";
  document.getElementById("message").innerHTML = "Best of luck!";
  document.getElementById("win").style.transform = "scale(1)";
  document.getElementById("lose").style.transform = "scale(1)";
  document.getElementById("tie").style.transform = "scale(1)";
  document.getElementById("winLabel").style.textShadow = "none";
  document.getElementById("winNumber").style.textShadow = "none";
  document.getElementById("loseLabel").style.textShadow = "none";
  document.getElementById("loseNumber").style.textShadow = "none";
  document.getElementById("tieLabel").style.textShadow = "none";
  document.getElementById("tieNumber").style.textShadow = "none";
  localStorage.wins = 0;
  document.getElementById("winNumber").innerHTML = localStorage.wins;
  localStorage.losses = 0;
  document.getElementById("loseNumber").innerHTML = localStorage.losses;
  localStorage.ties = 0;
  document.getElementById("tieNumber").innerHTML = localStorage.ties;
}
