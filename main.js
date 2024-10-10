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
result.classList.add("result");
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

const resetTextShadow = () => {
    rock.style.textShadow = "none";
    paper.style.textShadow = "none";
    scissors.style.textShadow = "none";
}

rock.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        resetTextShadow();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, "rock");
        // if (computerChoice === "rock") {
        //     rock.style.textShadow = "6px 6px 3px orange";
        // } else if (computerChoice === "scissors") {
        //     rock.style.textShadow = "6px 6px 3px green";
        //     scissors.style.textShadow = "6px 6px 3px red";
        // } else if (computerChoice === "paper") {
        //     rock.style.textShadow = "6px 6px 3px red";
        //     paper.style.textShadow = "6px 6px 3px green";
        // }
    }
})

paper.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        resetTextShadow();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, "paper");
        // if (computerChoice === "paper") {
        //     paper.style.textShadow = "6px 6px 3px orange";
        // } else if (computerChoice === "scissors") {
        //     paper.style.textShadow = "6px 6px 3px red";
        //     scissors.style.textShadow = "6px 6px 3px green";
        // } else if (computerChoice === "rock") {
        //     rock.style.textShadow = "6px 6px 3px red";
        //     paper.style.textShadow = "6px 6px 3px green";
        // }
    }
})

scissors.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        resetTextShadow();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, "scissors");
        // if (computerChoice === "scissors") {
        //     scissors.style.textShadow = "6px 6px 3px orange";
        // } else if (computerChoice === "rock") {
        //     rock.style.textShadow = "6px 6px 3px green";
        //     scissors.style.textShadow = "6px 6px 3px red";
        // } else if (computerChoice === "paper") {
        //     scissors.style.textShadow = "6px 6px 3px green";
        //     paper.style.textShadow = "6px 6px 3px red";
        // }
    }
})