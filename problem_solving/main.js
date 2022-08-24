//Write a function that takes an array of numbers and returns the largest
// const numbers = [3, 5, 2, 8, 1]

function largest(anArray){
    let highNum = []
    for (let i = 0; i < anArray.length; i++){
        if (anArray[i] > anArray[1]){
            highNum.push(anArray[i])
        }
    }
    return highNum
}

const biggestNum = largest([3, 5, 2, 8, 1])
console.log(biggestNum)


//Write a function that takes an array of words and a character and returns each word that has that character present.
// function lettersWithStrings(theArray, theString){
//     let results = []
//     for (let i = 0; i < theArray.length; i++){
//         if (theArray[i].includes(theString)){
//             results.push(theArray[i])
//         }
//     }
//     return results
// }

// const results = lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

// console.log(results)

// console.log("1" === 1)
// console.log("1" == 1)