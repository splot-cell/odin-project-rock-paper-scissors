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
        } else {
            // If not, ask them for their choice again
            console.log(`I'm sorry, that wasn't a valid choice... try again.`);
        }
    }
    return choice;
}

// Compare the user's choice and the computer's choice
function playRound(userChoiceFunc, compChoiceFunc) {
    let winner = null;
    while(!winner) {
        let userChoice = userChoiceFunc();
        let compChoice = compChoiceFunc();
        // Print result of comparison
        if(userChoice === compChoice) {
            // If it's a draw, play again
            console.log(`It's a draw this time, choose again...`);
        } else if (userChoice === `rock` && compChoice === `paper`) {
            console.log("You lose! Paper beats rock.");
            winner = "comp";
        } else if (userChoice === `rock` && compChoice === `scissors`) {
            console.log("You win! Rock beats scissors.");
            winner = "user";
        } else if (userChoice === `paper` && compChoice === `rock`) {
            console.log("You win! Paper beats rock.");
            winner = "user";
        } else if (userChoice === `paper` && compChoice === `scissors`) {
            console.log("You lose! Scissors beats paper.");
            winner = "comp";
        } else if (userChoice === `scissors` && compChoice === `paper`) {
            console.log("You win! Scissors beats paper.");
            winner = "user";
        } else if (userChoice === `scissors` && compChoice === `rock`) {
            console.log("You lose! Rock beats scissors.");
            winner = "comp";
        } else {
            console.log("An error occurred in determining the winner.");
            winner = true;
        }
    }
    return winner;
}

function gameOfFive() {
    printWelcome();
    let userWins = 0;
    let compWins = 0;
    for (let i = 0; i < 5; i++){
        let winner = playRound(getUserChoice, getCompChoice);
        // Add scores to counter
        if (winner === "user") {
            userWins++;
        } else if (winner === "comp") {
            compWins++;
        } else {
            console.log(`An error occurred in round ${i}.`);
        }
    }
    // Once 5 rounds are played, print results
    if (userWins > compWins) {
        console.log(`You won by ${userWins} games to ${compWins}.`);
    } else {
        console.log(`You lost by ${userWins} games to ${compWins}.`);
    }
}

gameOfFive();