// Get the computer's choice of rock, paper, scissors

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

// Get the human's choice of rock, paper, scissors

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?").toLowerCase();
}

// Put both choices into the playRound function which will determine who wins the round.
// Loop the playRound function 5 times inside of the playGame function, logging the score after each round.

function playGame() {

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

    for (let x = 0; x < 5; x++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        playRound(computerSelection, humanSelection);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        continue;
    }
}

playGame()
