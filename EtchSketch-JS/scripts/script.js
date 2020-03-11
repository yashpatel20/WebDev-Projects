function createGrid(squares =16){
    for(let x=0;x<squares;x++){
        let row = document.createElement('div');
        row.classList.add('row');
        grid.append(row);
        for(let y=0;y<squares;y++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseenter',changeColor);
            cell.style.backgroundColor = cellColor; 
            row.append(cell);
        }
    }

}


function changeColor(e){
    let selectedColor = getSeletedColor();
    if(selectedColor == 'black') this.style.backgroundColor = 'black';
    if(selectedColor == 'random') this.style.backgroundColor = getRandomColor();
    if(selectedColor == 'darken') this.style.backgroundColor = getDarkerColor(this.style.backgroundColor);
}

function getSeletedColor(){
    //radio buttons check which is selected
    const rbuttons = document.getElementsByName('color');
    for(let x=0;x< rbuttons.length ;x++){
        if(rbuttons[x].checked) return rbuttons[x].value;
    }

}

function getRandomColor(){
    const r = Math.floor((Math.random()*256));
    const g = Math.floor((Math.random()*256));
    const b = Math.floor((Math.random()*256));
    return `RGB(${r} ${g} ${b})`;
}

function getDarkerColor(originalColor){
    //Extract rgb values and reduce all by 25 till 0
    if(originalColor == 'black') return originalColor;
    if(originalColor == 'white') return 'RGB(230 230 230)';
    let colorValues = originalColor.match(/(\d+)/g);
    for (let x = 0; x < colorValues.length; x ++) {
        let intValue = parseInt(colorValues[x]);
        if (intValue - 25 < 0) {
            colorValues[x] = 0;
        } else colorValues[x] = intValue - 25;
    }

    return `RGB(${colorValues[0]} ${colorValues[1]} ${colorValues[2]})`;

}

function clearGrid(){
    cells = document.getElementsByClassName('cell');
    for(const cell of cells) cell.style.backgroundColor = cellColor;
}


function resizeGrid(){
    let squares;
    while(isNaN(squares)){
        squares = prompt('Enter number of squares?\nMust be between 1 and 100');
    }
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    createGrid(squares);
}



const cellColor = "#999";
const grid = document.getElementById('grid');
const clearButton = document.getElementById('clear');
const resizeButton = document.getElementById('resize');
clearButton.addEventListener('click',clearGrid);
resizeButton.addEventListener('click',resizeGrid);
createGrid();