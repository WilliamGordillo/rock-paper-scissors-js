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

const rock_but = document.getElementById('Rock')
const paper_but = document.getElementById('Paper')
const scissors_but = document.getElementById('Scissors')
const results = document.getElementById('results')

const human_tally = document.getElementById('human')
const computer_tally = document.getElementById('computer')

/*function getHumanChoice(){
    let choice = prompt("Choose: rock, paper or scissors");
    return choice
}*/

const human_score = document.createElement('p')
const computer_score = document.createElement('p')

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice){
        const p_result = document.createElement('p')
        p_result.textContent = ("It's a tie!")
        results.appendChild(p_result)

    }
    else if( (humanChoice == "scissors") && (computerChoice == "rock")){
        const p_result = document.createElement('p')
        p_result.textContent = ("You lose hahaaaa!")
        results.appendChild(p_result)
        computerScore++
    }
    else if( (humanChoice == "rock") && (computerChoice == "paper")){
        const p_result = document.createElement('p')
        p_result.textContent = ("You lose hahaaaa!")
        results.appendChild(p_result)
        computerScore++
        
    }
    else if( (humanChoice == "paper") && (computerChoice == "scissors")){
        const p_result = document.createElement('p')
        p_result.textContent = ("You lose hahaaaa!")
        results.appendChild(p_result)
        return computerScore++ }
    else if( (humanChoice == "paper") && (computerChoice == "rock")){
         const p_result = document.createElement('p')
        p_result.textContent = ("You win OMG")
        results.appendChild(p_result)
         return humanScore++
    }
    else if( (humanChoice == "rock") && (computerChoice == "scissors")){
        const p_result = document.createElement('p')
        p_result.textContent = ("You win OMG")
        results.appendChild(p_result)
        return humanScore++
    }
    else if( (humanChoice == "scissors") && (computerChoice == "paper")){
        const p_result = document.createElement('p')
        p_result.textContent = ("You win OMG")
        results.appendChild(p_result)
        return humanScore++
    }
    human_score.textContent = humanScore
    human_tally.appendChild(human_score)

    
    computer_score.textContent = computerScore
    computer_tally.appendChild(computer_score)

    

}


rock_but.addEventListener('click', () => {playRound('rock', getComputerChoice())})
paper_but.addEventListener('click', () => {playRound('paper', getComputerChoice())})
scissors_but.addEventListener('click', () => {playRound('scissors', getComputerChoice())})






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





//playGame();
