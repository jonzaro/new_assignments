var readlineSync = require('readline-sync');

console.log("Enter the # for the option you would like to choose:")

let hasKey = false;
let hasEscaped = false;

while(!hasEscaped){
    const selection = parseInt(readlineSync.question("1: Put hand in hole, 2: Find the key, 3: Open the door? "));
    if (selection === 1){
        console.log("YOU HAVE DIED")
    } else if (selection === 2){
        console.log("YOU HAVE FOUND A KEY")
        hasKey = true
    } else if (selection === 3 && hasKey){
        console.log("YOU HAVE ESCAPED")
        hasEscaped = true
    } else if (selection === 3){
        console.log("THE DOOR IS LOCKED")
    }
}



