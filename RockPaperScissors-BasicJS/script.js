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
        if(computerSelection == 'paper') return 'Computer wins'; 
        if(computerSelection == 'scissors') return 'Player wins'
        if(computerSelection == 'rock') return 'Draw'
    }

    if(playerSelection == 'paper'){
        if(computerSelection == 'paper') return 'Draw'; 
        if(computerSelection == 'scissors') return 'Computer wins'
        if(computerSelection == 'rock') return 'Player wins'
    }

    if(playerSelection == 'scissors'){
        if(computerSelection == 'paper') return 'Player wins'; 
        if(computerSelection == 'scissors') return 'Draw'
        if(computerSelection == 'rock') return 'Computer wins'
    }

}
const prompt = require('prompt-sync')({sigint: true});

function game(){
    for(let i=0;i<5;i++){
        let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
        let computerSelection = computerPlay();
        console.log("Computer plays: " + computerSelection +" "+  "Player plays: "+ playerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();