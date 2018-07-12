/* Globals */
let value = "0";
let buttonArray = [".zero", ".one", ".two", ".three", ".four", ".five", ".six",
				  	".seven", ".eight", ".nine"];  
let number_zero, number_one, number_two, number_three, number_four, number_five,
	number_six, number_seven, number_eight, number_nine;

let isOperatorOn = false;
let operatorSign;
let sign = "";


function add(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
	return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
	return operator(firstNumber, secondNumber);
}

//clears the display
function clear(event) {
	value = "0"
	event.innerHTML = value;
}

function displayNumbers(event) {
	if( value == ""){
		value = "0";
	}
	event.innerHTML = value;
}

/*Set-up, connect all buttons and display*/

let mainContainer = document.querySelector(".calc-bg");

let display = mainContainer.querySelector(".display");
value = display.innerHTML;

let clearButton = mainContainer.querySelector(".button-c");
clearButton.addEventListener("click", function(event) {
	if( value.split("*").length != 0){
		isOperatorOn = false;
	}
	clear(display);
});

/* NUMBERS */

number_zero = mainContainer.querySelector(".zero");
number_zero.addEventListener("click", function(event) {
	if( value != "0" ) {
		value += "0";
	}
	displayNumbers(display);
})

number_one = mainContainer.querySelector(".one");
number_one.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "1";
	displayNumbers(display);
})

number_two = mainContainer.querySelector(".two");
number_two.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "2";
	displayNumbers(display);
})

number_three = mainContainer.querySelector(".three");
number_three.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "3";
	displayNumbers(display);
})

number_four = mainContainer.querySelector(".four");
number_four.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "4";
	displayNumbers(display);
})

number_five = mainContainer.querySelector(".five");
number_five.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "5";
	displayNumbers(display);
})

number_six = mainContainer.querySelector(".six");
number_six.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "6";
	displayNumbers(display);
})

number_seven = mainContainer.querySelector(".seven");
number_seven.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "7";
	displayNumbers(display);
})

number_eight = mainContainer.querySelector(".eight");
number_eight.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "8";
	displayNumbers(display);
})

number_nine = mainContainer.querySelector(".nine");
number_nine.addEventListener("click", function(event) {
	if( value == "0"){
		value = "";
	}
	value += "9";
	displayNumbers(display);
})

let decimal = mainContainer.querySelector(".decimal");
decimal.addEventListener("click", function(event) {
	if( value.split(".").length < 3) {
		value += ".";
	}
	displayNumbers(display);
})

// let plusMinus = mainContainer.querySelector(".button-pm");
// plusMinus = addEventListener("click", function(event) {
// 	if( value)
// })

/* OPERATIONS */
//backspace
let backspaceButton = mainContainer.querySelector(".large-button"); 
backspaceButton.addEventListener("click", function(event) {
	if( value == "0" ) {
		value = "0";
	} else {
		console.log(value.length);
		if( value.length > 0 ){
			if( value.slice(-1) == "/" || value.slice(-1) == "*" 
				|| value.slice(-1) == "-" || value.slice(-1) == "+" )  {
				isOperatorOn = false;
			}
			value = value.slice(0, -1);
		}
	}
	displayNumbers(display);
})

//plus
let plusButton = mainContainer.querySelector(".plus");
plusButton.addEventListener("click", function(event) {
	if( !isOperatorOn ) {
		isOperatorOn = true;
		operatorSign = add;
		sign = "+";
		value += "+";
		displayNumbers(display);
	}
})

//minus
let minusButton = mainContainer.querySelector(".minus");
minusButton.addEventListener("click", function(event) {
	if( !isOperatorOn ) { 
		isOperatorOn = true;
		operatorSign = subtract;
		sign = "-";
		value += "-";
		displayNumbers(display);
	}
})

//times
let timesButton = mainContainer.querySelector(".multiplication");
timesButton.addEventListener("click", function(event) {
	if( !isOperatorOn ) {
		isOperatorOn = true;
		operatorSign = multiply;
		sign = "*";
		value += "*";
		displayNumbers(display);
	}
})

//division
let divButton = mainContainer.querySelector(".division");
divButton.addEventListener("click", function(event) {
	if( !isOperatorOn ) {
		isOperatorOn = true;
		operatorSign = divide;
		sign = "/";
		value += "/";
		displayNumbers(display);
	}
})

//equal
let equalButton = mainContainer.querySelector(".equals");
equalButton.addEventListener("click", function(event) {
	if( isOperatorOn) {
		isOperatorOn = false;
		var leftValue = value.split(`${sign}`)[0];
		var rightValue = value.split(`${sign}`)[1];
		if ( operatorSign == add ) {
			value = operate(add, leftValue, rightValue).toString();
		} else if ( operatorSign == subtract ) {
			value = operate(subtract, leftValue, rightValue).toString();
		} else if ( operatorSign == multiply ) {
			value = operate(multiply, leftValue, rightValue).toString();
		} else if ( operatorSign == divide ) {
			value = operate(divide, leftValue, rightValue).toString();
		}
		displayNumbers(display);
	}
})

//random





