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

// Put both choices into the playRound function which will determine who wins the round.
// Loop the playRound function 5 times inside of the playGame function, logging the score after each round.

let computerScore = 0;
let humanScore = 0;

let resultCont = document.querySelector(".div-cont")
let result = document.createElement("p");
let hScore = document.createElement("p");
let cScore = document.createElement("p");

resultCont.appendChild(result);
resultCont.appendChild(hScore);
resultCont.appendChild(cScore);

function playRound(computerChoice, humanChoice) {

    if (computerChoice == 'rock' && humanChoice == 'paper') {
            result.textContent = "You win! Paper beats Rock.";
            humanScore++;
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
            result.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
            result.textContent = "You lose! Paper beats Rock.";
            computerScore++;
    }
    else if (computerChoice == 'paper' && humanChoice == 'scissors') {
            result.textContent = "You win! Scissors beats Paper.";
            humanScore++;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
            result.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
    }
        else if (computerChoice == 'scissors' && humanChoice == 'rock') {
            result.textContent = "You win! Rock beats Scissors.";
            humanScore++;
    }
    else {
            result.textContent = "It's a tie!"; 
    }

    hScore.textContent = `Human Score: ${humanScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const reset = document.createElement("button");
        if (humanScore === 5) {
            result.textContent = "You win!";
            reset.textContent = "Play again";
        } else {
            result.textContent = "You lose!";
            reset.textContent = "Play again";
        }
    
    resultCont.appendChild(reset);

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    reset.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        hScore.textContent = `Human Score: ${humanScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        result.textContent = '';
        reset.remove();
        });

        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        let computerChoice = getComputerChoice();
        playRound(computerChoice, "rock");
    }
})

paper.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        let computerChoice = getComputerChoice();
        playRound(computerChoice, "paper");
    }
})

scissors.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        let computerChoice = getComputerChoice();
        playRound(computerChoice, "scissors");
    }
})