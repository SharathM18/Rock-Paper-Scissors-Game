import "../style/style.css";
import "../style/utilities.css";

const choices = document.querySelectorAll(".choice");
const resultSelection = document.querySelector(".result-selection");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");

let userCount = 0;
let computerCount = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const computerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const playGame = (userChoice) => {
  const compChoice = computerChoice();
  if (userChoice === compChoice) {
    showDraw();
  } else if (userChoice === "rock") {
    let userWin = compChoice === "paper" ? false : true;
    showWinner(userWin, userChoice, compChoice);
  } else if (userChoice === "paper") {
    let userWin = compChoice === "rock" ? true : false;
    showWinner(userWin, userChoice, compChoice);
  } else {
    let userWin = compChoice === "paper" ? true : false;
    showWinner(userWin, userChoice, compChoice);
  }
};

const showDraw = () => {
  resultSelection.innerHTML = "It's a draw! Both chose the same option.";
  resultSelection.style.color = "orange";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    resultSelection.innerHTML = `Congratulations! You win! ${userChoice} beats ${compChoice}.`;
    userCount++;
    userScore.innerHTML = userCount;
    resultSelection.style.color = "green";
  } else {
    resultSelection.innerHTML = `Oops! You lose! ${compChoice} beats ${userChoice}.`;
    computerCount++;
    computerScore.innerHTML = computerCount;
    resultSelection.style.color = "red";
  }
};
