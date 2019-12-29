
// Declare global variables and setup button event listeners
let playerScore = 0;
let computerScore = 0;
let round = 1;
const pScore = document.getElementById('playerscore');
const cScore = document.getElementById('computerScore');
const displayRound = document.getElementById('round');
const roundActions=document.getElementById('roundactions');
const compChoice=document.getElementById('computerchoice');
const endResults=document.getElementById('endresults');

let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',game));


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay(){
    let computerChoice = getRndInteger(1,3);
    switch(computerChoice){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }

}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock'){
        if(computerSelection == 'paper') return [-1,"Computer Wins"]; 
        if(computerSelection == 'scissors') return [1,"Player Wins"];
        if(computerSelection == 'rock') return [0,"Draw"];
    }

    if(playerSelection == 'paper'){
        if(computerSelection == 'paper') return [0,"Draw"]; 
        if(computerSelection == 'scissors') return [-1,"Computer Wins"];
        if(computerSelection == 'rock') return [1,"Player Wins"];
    }

    if(playerSelection == 'scissors'){
        if(computerSelection == 'paper') return [1,"Player Wins"]; 
        if(computerSelection == 'scissors') return [0,"Draw"];
        if(computerSelection == 'rock') return [-1,"Computer Wins"];
    }

}
function swapButtons() {
    const buttonDiv = document.getElementById('buttons');
    buttons.forEach(button => button.remove());
    buttons = document.createElement('button');
    buttons.textContent = 'New Game';
    buttons.classList.add('newgamebutton');
    buttonDiv.appendChild(buttons);
    buttons.addEventListener("click", buttons => location.reload())
  }

function game(){
    let computerPlays = computerPlay();
    let roundResult = playRound(this.id,computerPlays);
    if(roundResult[0] == 1){
        playerScore+=1;
        pScore.textContent = `Your Score : ${playerScore}`;
    }else if(roundResult[0] == -1){
        computerScore+=1;
        cScore.textContent = `Your Score : ${computerScore}`;
    }

    round++;

    if(round<6) displayRound.textContent = `Round ${round}`;
    else displayRound.textContent = 'Results'
    compChoice.textContent = `The computer chose ${computerPlays}`;
    roundActions.textContent = `Round ${round-1} result: ${roundResult[1]}`;

    if(round==6){
        console.log(playerScore + " " + computerScore);
        if(playerScore > computerScore) endResults.textContent = 'Player Wins';
        else if(playerScore == computerScore) endResults.textContent = 'Draw';
        else endResults.textContent = 'Computer Wins';

        swapButtons();
    }



}


