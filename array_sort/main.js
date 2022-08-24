

//1) Sort an array from smallest number to largest

// const someArr = [1, 3, 5, 2, 90, 20]

// function leastToGreatest(arr) {
//     arr.sort(function (a, b){
//         return a - b    
//     })
// }

// leastToGreatest(someArr);
//   console.log(someArr);

// function greatestToLeast(arr) {
//     return arr.sort(function(a, b){
//          return b - a;
//     })
// }
  
//   console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); 

// 2) Sort an array from largest number to smallest

// const someArr = [1, 3, 5, 2, 90, 20]

// function greatestToLeast(arr) {
//     arr.sort(function (a, b){
//         return b - a ;
//     })
// }
// greatestToLeast(someArr);
// console.log(someArr);

//3) Sort an array from shortest string to longest
// const words = ["dog", "wolf", "by", "family", "eaten"]
// function lengthSort(arr) {
//     arr.sort(function (a, b){
//        return a.length - b.length;
//     })
// }
// lengthSort(words);
// console.log(words);

// //4) Sort an array alphabetically
// const words = ["dog", "wolf", "by", "family", "eaten"]
// words.sort();
// console.log(words);

5) Sort the objects in the array by age
const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

function byAge(arr){
    arr.sort(function (a, b){
        return a.age - b.age;
    })
}
byAge(people)
console.log(people);




