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
        computerScore++
        console.log("You lose hahaaaa!")
    }
    else if( (humanChoice == "rock") && (computerChoice == "paper")){
        computerScore++
        console.log("You lose hahaaaa!")
    }
    else if( (humanChoice == "paper") && (computerChoice == "scissors")){
        computerScore++
        console.log("You lose hahaaaa!")}
    else if( (humanChoice == "paper") && (computerChoice == "rock")){
        humanScore++
         console.log("You win OMG!")
    }
    else if( (humanChoice == "rock") && (computerChoice == "scissors")){
        humanScore++
        console.log("You win OMG!")
    }
    else if( (humanChoice == "scissors") && (computerChoice == "paper")){
        humanScore++
         console.log("You win OMG!")
    }

}

let humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
