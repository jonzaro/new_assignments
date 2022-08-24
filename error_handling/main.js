// var input = "hello";

// try {
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }

//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y){
//     if (typeof x != "number"){
//         console.log("X needs to be a number")
//     }
//     if (typeof y != "number"){
//         console.log("Y needs to be a number")
//     }
//     return x + y;
//   }

//   try {
//      sum(1, "2")
//     } catch(err) {
//       console.log(err);
//     } finally {
//       console.log("Runs no matter what");
     
//     }

//2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. 
//Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
    if(username === "sam"){
        if (password === "123abc"){
            console.log("Login Successful")
        } else {
            console.log("Username and Password Need to Match!")
        }
    } 
}




try {
    login("sam", "123abc")
    } catch(err) {
          console.log(err);
        } finally {
          console.log("This runs nomatter what!");
         
        }