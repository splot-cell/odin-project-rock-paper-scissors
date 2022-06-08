// Randomly generate computer's choice
function getCompChoice() {
    let choice = Math.floor(Math.random() * 3);
    let choiceString;
    switch (choice) {
        case 0:
            choiceString = "rock";
            break;
        case 1:
            choiceString = "paper";
            break;
        case 2:
            choiceString = "scissors";
            break;
        default:
            choiceString = "rock";
    }
    return choiceString;
}

function displayResult(string) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.textContent = string;
}

function updateScore(winner) {
    if (winner === "comp") {
        const compScore = document.getElementById("comp-score");
        let currentScore = Number(compScore.textContent) + 1;
        compScore.textContent = currentScore.toString();
    } else if (winner === "user") {
        const userScore = document.getElementById("user-score");
        let currentScore = Number(userScore.textContent) + 1;
        userScore.textContent = currentScore.toString();
    }
}

// Compare the user's choice and the computer's choice
function playRound(userChoice) {
    let compChoice = getCompChoice();
    if(userChoice === compChoice) {
        displayResult(`It's a draw this time, choose again...`);
        updateScore(null);
    }
    if (userChoice === `rock` && compChoice === `paper`) {
        displayResult("You lose! Paper beats rock.");
        updateScore("comp");
    }
    if (userChoice === `rock` && compChoice === `scissors`) {
        displayResult("You win! Rock beats scissors.");
        updateScore("user");
    }
    if (userChoice === `paper` && compChoice === `rock`) {
        displayResult("You win! Paper beats rock.");
        updateScore("user");
    }
    if (userChoice === `paper` && compChoice === `scissors`) {
        displayResult("You lose! Scissors beats paper.");
        updateScore("comp");
    }
    if (userChoice === `scissors` && compChoice === `paper`) {
        displayResult("You win! Scissors beats paper.");
        updateScore("user");
    }
    if (userChoice === `scissors` && compChoice === `rock`) {
        displayResult("You lose! Rock beats scissors.");
        updateScore("comp");
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));