function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) {
        return "rock";
    }
    else if (randomNum == 2) {
        return "paper";
    }
    else if (randomNum == 3) {
        return "scissors";
    }

}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?").toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {

    if (computerChoice == 'rock' && humanChoice == 'paper') {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'scissors') {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else {
        console.log("It's a tie!"); 
    }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

