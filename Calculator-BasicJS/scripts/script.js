//define a calulator object : displayvalue operands operator
//AC clear display
//backspace divide 10 floor
//-+ if 
//operands 
//operators
//equals

//calculator object 
//properties : first operand, second operand, operator, displayValue

//try to make a state diagram then code



const calculator = {
    displayValue : "0",
    firstOperand : null,
    waitingForSecondOperand : false,
    operator : null
};


let handleAC = () => {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
};

let handleBackspace = () => {
    if(calculator.displayValue.length > 1){
        //remove the last element
        calculator.displayValue = calculator.displayValue.slice(0,-1);
    }else calculator.displayValue = "0";
};

let handleChangesign = () => {
    let value = parseFloat(calculator.displayValue);
    value = value*-1;
    //check if we have secong operand or not
    if(calculator.waitingForSecondOperand == true){
        calculator.firstOperand = value;
    }else calculator.displayValue = value;
};

let handleDecimal = () => {
    if(!(calculator.waitingForSecondOperand)){
        if(!calculator.displayValue.includes('.')){
            calculator.displayValue+='.';
        }
    }
};

//logic of calculator
let handleOperator = (nextOperator) => {
    const {firstOperand,waitingForSecondOperand,displayValue,operator} = calculator;
    const inputVal = parseFloat(displayValue);

    //first operand is not inputed 
    if(firstOperand == null){
        calculator.firstOperand = inputVal;
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
    }
    //if operator is inputted again before selecting second operand
    if(operator && waitingForSecondOperand){
        calculator.operator = nextOperator;
    }
    //first, second and operator inputted,
    if(operator == '/' && inputVal == '0') calculator.displayValue = 'Infinity';
    else if(operator){
        let result  = performCalculation[operator](firstOperand,inputVal);
        //handle precision
        if (countDecimals(result) > 6) {
            result = result.toFixed(6);
        }
        calculator.displayValue=result;
        calculator.firstOperand = result;
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
    }

};

let countDecimals = (value) => {
    if(Math.floor(value) != value){
        return value.toString().split('.')[1].length;
    }
}

let performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand
};



let handleNum = (num) => {
    const {displayValue, waitingForSecondOperand} = calculator;
    if(waitingForSecondOperand==true){
        calculator.displayValue = num;
        calculator.waitingForSecondOperand = false;
    }else calculator.displayValue = displayValue==='0' ? num : displayValue+num;
};

let updateDisplay = () => {
    const display = document.querySelector('.display');
    display.textContent = calculator.displayValue;

};

updateDisplay();
//handle buttons than update display

const buttons = document.querySelector('.buttons');
//Click event listener
buttons.addEventListener('click',(event)=>{
    const {target} = event;
    if(target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();

    }
    if(target.classList.contains('decimal')){
        handleDecimal();
        updateDisplay();
    }
    if(target.classList.contains('ac')){
        handleAC();
        updateDisplay();
    }
    if(target.classList.contains('backspace')){
        handleBackspace();
        updateDisplay();
    }
    if(target.classList.contains('change-sign')){
        handleChangesign();
        updateDisplay();
    }
    if(target.classList.contains('num')){
        handleNum(target.value);
        updateDisplay();
    }
});
//keydown event listener
buttons.addEventListener('keydown',(event)=>{
    const {key} = event;
    if(isNaN(key)){
        if(key ==='Enter'){
            
        }
        if(key==='+'||key==='-'||key==='*'||key==='/'){

        }
        if(key ==='Backspace'){

        }
        if(key ==='Escape'){

        }
        if(key ==='.'){

        }
    }else{

    }
});
