// 1) Make an array of numbers that are doubles of the first array

// const numbers =[2, 5, 100].map(num => num*2)
// const result = numbers.map(num => num * 2)
// console.log(numbers)
  
// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
//     return arr.map(num => num.toString())
// }
// console.log(stringItUp([2, 5, 100]));

// 3) Capitalize each of an array of names

function capitalizeNames(arr){
      return arr.map(name => {
        const theName = name.slice(0,1);
        const restofName = name.slice(1)
        const nameName = theName.toUpperCase() + restofName.toLowerCase();
        return nameName
        })
        
}
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))



//4) Make an array of strings of the names
// function namesOnly(arr){
//     return arr.map(name => name.name)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 

//5) Make an array of strings of the names saying whether or not they can go to The Matrix

// function makeStrings(arr){
//     arr.map(user => {
//         if (user.age >= 18){
//             console.log(`${user.name} can go to The Matrix`)
//         } else {
//             console.log(`${user.name} is under age!`)
//         }
//     })
// }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]))