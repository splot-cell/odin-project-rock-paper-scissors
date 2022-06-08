// Generate computer's choice
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

// Compare the user's choice and the computer's choice
function playRound(userChoice) {
    let compChoice = getCompChoice();
    // Print result of comparison
    if(userChoice === compChoice) {
        // If it's a draw
        displayResult(`It's a draw this time, choose again...`);
        return null;
    }
    if (userChoice === `rock` && compChoice === `paper`) {
        displayResult("You lose! Paper beats rock.");
        return "comp";
    }
    if (userChoice === `rock` && compChoice === `scissors`) {
        displayResult("You win! Rock beats scissors.");
        return "user";
    }
    if (userChoice === `paper` && compChoice === `rock`) {
        displayResult("You win! Paper beats rock.");
        return "user";
    }
    if (userChoice === `paper` && compChoice === `scissors`) {
        displayResult("You lose! Scissors beats paper.");
        return "comp";
    }
    if (userChoice === `scissors` && compChoice === `paper`) {
        displayResult("You win! Scissors beats paper.");
        return "user";
    }
    if (userChoice === `scissors` && compChoice === `rock`) {
        displayResult("You lose! Rock beats scissors.");
        return "comp";
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));