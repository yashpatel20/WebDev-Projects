//player factory
//compose two players in the gameBoard Object
const player = () =>{

    return{

    };
};

//gameBoard module
const game = (()=>{
    let gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];





    return{
        makeBoard,
        startGame,
        endGame,
        disablePlayerTwo
    };
})();

//handle buttons
const startGameBtn = document.getElementsByClassName('btn-newGame');
const endGameBtn = document.getElementsByClassName('btn-endGame');
const computerRadioBtn = document.getElementById('checkComputer');

startGameBtn.addEventListener();



