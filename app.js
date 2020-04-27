let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNo = Math.floor(Math.random() * 3);
  return choices[randomNo];
}
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}
function wins(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(
    user
  )}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord} You Win!`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("green-glow"),
    500
  );
}
function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(
    user
  )}${smallUserWord} loses to ${convertToWord(comp)}${smallCompWord} You Lost!`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("red-glow"),
    500
  );
}
function draw(user, comp) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(
    user
  )}${smallUserWord} equals ${convertToWord(comp)}${smallCompWord} Its a draw!`;
  document.getElementById(user).classList.add("gray-glow");
  setTimeout(
    () => document.getElementById(user).classList.remove("gray-glow"),
    500
  );
}
function gain(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "sp":
    case "pr":
      wins(userChoice, compChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    gain("r");
  });
  paper_div.addEventListener("click", function () {
    gain("p");
  });
  scissors_div.addEventListener("click", function () {
    gain("s");
  });
}

main();
