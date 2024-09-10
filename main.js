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

let computerScore = 0;
let humanScore = 0;

// Creates variables for result, hScore and cScore which will be appended to the page as a child of resultCont

let resultCont = document.querySelector(".div-cont")
let resetCont = document.querySelector(".reset")
let result = document.createElement("p");
let hScore = document.createElement("p");
let cScore = document.createElement("p");

resultCont.appendChild(hScore);
resultCont.appendChild(cScore);
resultCont.appendChild(result);
hScore.innerHTML = `Human Score: <span>${humanScore}</span>`;
cScore.innerHTML = `Computer Score: <span>${computerScore}</span>`;
result.textContent = "Choose your hand";

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

    // Updates score counter on the page after each round.

    hScore.innerHTML = `Human Score: <span>${humanScore}</span>`;
    cScore.innerHTML = `Computer Score: <span>${computerScore}</span>`;

    // Presents winner page once either side has reached 5.

    if (humanScore === 5 || computerScore === 5) {
        const reset = document.createElement("button");
        reset.setAttribute("id", "play-again");
        if (humanScore === 5) {
            result.textContent = "You win!";
            reset.textContent = "Play again";
        } else {
            result.textContent = "Computer wins!";
            reset.textContent = "Play again";
        }

    resetCont.appendChild(reset);

    // Disables buttons after reset button is presented.

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    // Resets scores back to 0 if the play again button is clicked.

    reset.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        hScore.textContent = `Human Score: ${humanScore}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        result.textContent = "Choose your hand";
        reset.remove();
        });

    // Re-enables buttons after 'play again' is clicked.

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    }
}

// Event listeners for rock, paper or scissors. 
// Only allows the game to be played if either score is below 5.

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