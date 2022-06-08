// Print welcome message
function printWelcome() {
    console.log(
`---WELCOME TO ROCK PAPER SCISSORS---
   The hottest new game in town!
        
Instructions:
Make a selection of either "rock", "paper", or "scissors", by typing it when prompted.
Try and beat the highly advanced computer AI.

Good luck!
`   );
}
// printWelcome();

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

// Ask user for their choice
function getUserChoice() {
    let keepGoing = false;
    let choice;
    while(!keepGoing) {
        choice = prompt(`Enter your selection (rock/paper/scissors):`, ``).toLowerCase();
        // Check the user selected "rock", "paper", or "scissors"
        if (choice === `rock` || choice === `paper` || choice === `scissors`) {
            keepGoing = true;
        }
        {
            // If not, ask them for their choice again
            console.log(`I'm sorry, that wasn't a valid choice... try again.`);
        }
    }
    return choice;
}

// Compare the user's choice and the computer's choice
function playRound(userChoice) {
    let compChoice = getCompChoice();
    // Print result of comparison
    if(userChoice === compChoice) {
        // If it's a draw
        console.log(`It's a draw this time, choose again...`);
        return null;
    }
    if (userChoice === `rock` && compChoice === `paper`) {
        console.log("You lose! Paper beats rock.");
        return "comp";
    }
    if (userChoice === `rock` && compChoice === `scissors`) {
        console.log("You win! Rock beats scissors.");
        return "user";
    }
    if (userChoice === `paper` && compChoice === `rock`) {
        console.log("You win! Paper beats rock.");
        return "user";
    }
    if (userChoice === `paper` && compChoice === `scissors`) {
        console.log("You lose! Scissors beats paper.");
        return "comp";
    }
    if (userChoice === `scissors` && compChoice === `paper`) {
        console.log("You win! Scissors beats paper.");
        return "user";
    }
    if (userChoice === `scissors` && compChoice === `rock`) {
        console.log("You lose! Rock beats scissors.");
        return "comp";
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));