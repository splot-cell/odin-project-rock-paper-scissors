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
        if (choice === `rock` || choice === `paper` || choice === `scissors`) {
            keepGoing = true;
        } else {
            console.log(`I'm sorry, that wasn't a valid choice... try again.`);
        }
    }
    return choice;
}

//      Check the user selected "rock", "paper", or "scissors"
//      If not, ask them for their choice again
// Compare the user's choice and the computer's choice
// Print result of comparison
//      If it's a draw, play again
// Add scores to counter
// Once 5 rounds are played, print results