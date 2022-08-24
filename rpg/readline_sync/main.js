var readlineSync = require('readline-sync');

var number1 = parseInt(readlineSync.question("Please enter the first number "));


var number2 = parseInt(readlineSync.question("Please enter the second number "));


var operation = readlineSync.question("Please enter the operation to perform ");


function sum(num1, num2){
    return num1 + num2
}

function sub(num1, num2){
    return num1 - num2
}

function mult(num1, num2){
    return num1 * num2
}

function div(num1, num2){
    return num1 / num2
}

let result; 

    if (operation === "+"){
        result=sum(number1, number2)    
    } else if (operation === "-"){
        result=sub(number1, number2)
    } else if (operation === "*"){
        result=mult(number1, number2)
    } else if (operation === "/"){
        result=div(number1, number2)
    }

console.log("Your total is: ") 
console.log(result)