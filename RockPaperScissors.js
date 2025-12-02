const results = document.querySelector("#results");
const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".computerScore");

playerScore.textContent = 0
compScore.textContent = 0

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getCompChoice())
    });
});


function getCompChoice() {
    randChoice = Math.floor(Math.random() * 3) + 1
    switch (randChoice){
        case(1):
            return("rock")
        case(2):
            return("paper")
        case(3):
            return("scissors")
    }
}

function playRound(humanChoice, compChoice){
    let win;
    if (humanChoice === compChoice){
        results.textContent = (`It's A Tie! You both chose ${humanChoice}!`)
        return
    }
    if (humanChoice == "rock"){
        switch(compChoice){
            case("paper"):
                win = false;
                break;
            case("scissors"):
                win = true;
                break;
        }
    }
    else if (humanChoice == "paper"){
        switch(compChoice){
            case("rock"):
                win = true;
                break;
            case("scissors"):
                win = false;
                break;
        }
    }
    else if (humanChoice == "scissors"){
        switch(compChoice){
            case("rock"):
                win = false;
                break;
            case("paper"):
                win = true;
                break;
        }
    }
    if (win == true){
        playerScore.textContent ++;
        results.textContent = (`You Win! ${humanChoice} beats ${compChoice}!`)
    }
    else if (win == false){
        compScore.textContent ++
        results.textContent = (`You Lose! ${compChoice} beats ${humanChoice}!`)
    }
}
