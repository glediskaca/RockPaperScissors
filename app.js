let userScore = 0;
let computerScore = 0;

function computerChoise() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let buttons = document.querySelector(".choises").childNodes;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    userChoise(button.value);
  });
});

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function userChoise(value) {
  let rancomChoise = computerChoise();
  let result = ""

  if (
    (value == "rock" && rancomChoise == "scissors") ||
    (value == "paper" && rancomChoise == "rock") ||
    (value == "scissors" && rancomChoise == "paper")
  ) {
    userScore += 1;
    result = ("You win this round " + value + " beats " + rancomChoise + "<br>Score:" + "<br>You: " + userScore + " Computer: " + computerScore);
  }else if(value == rancomChoise){
    result = ("Raund is draw " + rancomChoise + " chosen by both " + "<br>Score:" + "<br>You: " + userScore + " Computer: " + computerScore);
  } else {
    computerScore += 1;
    result = ("Computer wins this round " + rancomChoise + " beats " + value + "<br>Score:" + "<br>You: " + userScore + " Computer: " + computerScore);
  }
  if (userScore == 5) {
    result = ("You win" + "<br>Reload to play again")
    disableButtons();
  }
  if (computerScore == 5) {
    result = ("Computer won" + "<br>Reload to play again")
    disableButtons();
  }
  document.querySelector(".result").innerHTML = result;
}
