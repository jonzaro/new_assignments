// Make a function that will return any given string into all caps followed by the same string all lowercase.
// const word = "Hello"
// let newWords = []
// function changeUp(){
//    newWords = word.toUpperCase() + word.toLowerCase()
// }
// changeUp()
// console.log(newWords)

//Make a function that returns a number half the length, and rounded down.
// const origWord = "Dave"
// let rounded = []
// let middle = []

//THIS WORKS
// function findMid(){
//     middle = origWord.length
//     if(middle % 2 === 0){
//          console.log(middle/2)
//     } else {
//         rounded = middle/2 
//         Math.floor(rounded)
//         console.log(rounded)
//     }
// }
// findMid()

//THIS WORKS
const origWord = "hey hi"
let middle = []

function findMid(){
    middle = origWord.slice(0, Math.floor(origWord.length/2))
    middle = middle.toUpperCase()
}
findMid()
console.log(middle)

