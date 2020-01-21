//player factory
//compose two players in the gameBoard Object
// Note: add leaderboard use player objects with win count
const player = (name) =>{
    return{
        name,
    };
};

//gameBoard module
const game = (()=>{
    let gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    //add a map to keep track of wins of players with the same name
    //i dont know how static properties work in js

    //temporary players
    //let playerOne, playerTwo;
    //current mark is used to alternate between X and O
    let currentMark = "X";
    let playerOne, playerTwo;

    //handles the start game btn
    //creates player objects and resets the grid
    let startGame = () => {
        //check computer radio button
        playerOne = player(document.querySelector("#playerOneName"));
        if(document.querySelector("#checkComputer").checked == true){
            playerTwo = player("Computer");
        }else{
            playerTwo = player(document.querySelector("#playerTwoName"));
        }

        //check if names are empty
        if(playerOne.name.trim() == "") playerOne.name = "Player One";
        if(playerTwo.name.trim() == "") playerTwo.name = "Player Two";
        
        //reset grid to start a new game
        resetGrid();

    };

    //resets the grid with empty strings, clears the gameBoard array and adds listeners again for new game
    //use buttons this way and not using foreach as it makes it easier to update gameBoard Array
    let resetGrid = () => {
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                let button = document.querySelector("#btn"+`${i}`+`${j}`).innerHTML = "";
                button.addEventListener("click",markBox);
                gameBoard[i][j] = "";
            }
        }
        currentMark = "X";
    };

    //handles the end game btn
    //makes the end game button disappear and declares the winner
    let endGame = () => {
        document.querySelector(".btn-endGame").style.display = "none";
        declareWinner();    
    };

    let markBox = (row, col) => {
        //update gameBoard array
        //if computer plays then it will pass the row and col
        if(!isNaN(row)){
            gameBoard[row][col] = currentMark;
            //set inner html and remove event listener
            let box = document.querySelector(".btn"+`${i}`+`${j}`);
            box.innerHTML = currentMark;
            box.removeEventListener("click",markBox);

        }else{ //if player then use event.target to get row and col
            //row is the event as no args are passed
            let rowT = row.target.id.slice(-2);
            let colT = row.target.id.slice(-1);
            gameBoard[rowT][colT] = currentMark;
            row.target.innerHTML = currentMark;
            row.target.removeEventListener("click",markBox);
        }
        swapMark();

    };
    //swaps mark and displays whose turn it is to go
    let swapMark = () => {
        if(currentMark = "X"){
            currentMark = "O";
            document.querySelector(".text").innerHTML = playerTwo.name + "'s turn!";
        }else{
            currentMark = "O";
            document.querySelector(".text").innerHTML = playerOne.name + "'s turn!";
        }

        //check if the last round was played by computer
        if(check == false){
            return;
        }
        //check if the player won  the round 
        checkWin();
        //play computer if not
        computerPlay();

    };

    let computerPlay = () => {

    };
    
    //check the gameBoard array to for win
    //daignol, vertiacal and horizontal
    //If all boxes are filled and no win then declare a tie
    let checkWin = () => {
        if (gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][1] == gameBoard[0][2] && gameBoard[0][0] != "") {
            declareWinner(gameBoard[0][0]); 
    } else if (gameBoard[1][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[1][2] && gameBoard[1][0] != "") {
            declareWinner(gameBoard[1][0]);
    } else if (gameBoard[2][0] == gameBoard[2][1] && gameBoard[2][1] == gameBoard[2][2] && gameBoard[2][0] != "") {
            declareWinner(gameBoard[2][0]); 
    } else if (gameBoard[0][0] == gameBoard[1][0] && gameBoard[1][0] == gameBoard[2][0] && gameBoard[0][0] != "") {
            declareWinner(gameBoard[0][0]); 
    } else if (gameBoard[0][1] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][1] && gameBoard[0][1] != "") {
            declareWinner(gameBoard[0][1]); 
    } else if (gameBoard[0][2] == gameBoard[1][2] && gameBoard[1][2] == gameBoard[2][2] && gameBoard[0][2] != "") {
        declareWinner(gameBoard[0][2]); 
    } else if (gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[0][0] != "") {
        declareWinner(gameBoard[0][0]);
    } else if (gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][0] && gameBoard[0][2] != "") {
        declareWinner(gameBoard[0][2]); 
    } else{
            let k=0;
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    if(gameBoard[i][j]!="") k++;
                }
            }
            if(k==9) declareWinner("Tie");

        }
    };

    let declareWinner = () => {

    };

    

    return{
        startGame,
        endGame,
    };
})();

//handle buttons
const startGameBtn = document.querySelector(".btn-newGame");
const endGameBtn = document.querySelector(".btn-endGame");

startGameBtn.addEventListener("click",game.startGame);
endGameBtn.addEventListener("click",game.endGame);




