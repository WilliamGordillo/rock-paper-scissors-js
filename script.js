let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0){
        return "rock"
    }
    else if (choice == 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Choose: rock, paper or scissors");
    return choice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice){
        console.log("It's a tie!")
    }
    else if( (humanChoice == "scissors") && (computerChoice == "rock")){
        console.log("You lose hahaaaa!")
        computerScore++
    }
    else if( (humanChoice == "rock") && (computerChoice == "paper")){
        console.log("You lose hahaaaa!")
        computerScore++
        
    }
    else if( (humanChoice == "paper") && (computerChoice == "scissors")){
        console.log("You lose hahaaaa!")
        return computerScore++ }
    else if( (humanChoice == "paper") && (computerChoice == "rock")){
         console.log("You win OMG!")
         return humanScore++
    }
    else if( (humanChoice == "rock") && (computerChoice == "scissors")){
        console.log("You win OMG!")
        return humanScore++
    }
    else if( (humanChoice == "scissors") && (computerChoice == "paper")){
        console.log("You win OMG!")
        return humanScore++
    }

}


function playGame(){
    for (let step = 0; step < 5; step++){
        let humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);}
    if(humanScore > computerScore){
        console.log("You have won the game")
    }
    else if(computerScore > humanScore){
        console.log("You have lost xD")
    }
    else{
        console.log("You have tied after 5 rounds!")
    }
    }

const rock_but = document.querySelector('#Rock')
const paper_but = document.querySelector('#Paper')
const scissors_but = document.querySelector('#Scissors')



playGame();
