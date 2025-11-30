let humanScore = 0;
let compScore = 0;

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

function getHumanChoice(){
    choice = prompt("Rock / Paper / Scissors")
    choice = choice.toLowerCase()
    return choice
}

function playRound(humanChoice, compChoice){
    let win;
    if (humanChoice === compChoice){
        console.log(`It's A Tie! You both chose ${humanChoice}!`)
        return
    }
    if (humanChoice == "rock"){
        switch(compChoice){
            case("paper"):
                win = false;
            case("scissors"):
                win = true;

        }
    }
    else if (humanChoice == "paper"){
        switch(compChoice){
            case("rock"):
                win = true;
            case("scissors"):
                win = false;

        }
    }
    else if (humanChoice == "scissors"){
        switch(compChoice){
            case("rock"):
                win = true;
            case("paper"):
                win = false;

        }
    }
    if (win == true){
        humanScore ++;
        console.log(`You Win! ${humanChoice} beats ${compChoice}!`)
    }
    else{
        compScore ++
        console.log(`You Lose! ${humanChoice} beats ${compChoice}!`)
    }
}

// Play game
for (let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getCompChoice())
}
console.log(`PLAYER SCORE: ${humanScore}`)
console.log(`COMPUTER SCORE: ${compScore}`)
