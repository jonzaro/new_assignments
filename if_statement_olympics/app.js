if (5 > 3) {
    console.log("Is greater than")
}
var cat = ["c", "a", "t"]

if (cat.length === 3) {
    console.log("Is the length")
}
var dog = ["d", "o", "g"]

if (cat.length === dog.length) {
    console.log("Are the same")
} else {
    console.log("Not the same")
}
var person = {
    name: ["b", "o", "b", "b", "y"],
    age: 12
}

function ageChecker() {
    if (person.age > 18) {
        console.log("Bobby is allowed to go to the movie")
    } else {
        console.log("Bobby is NOT allowed to go to the movie")
    }
}
if (person.name[4] === "b") {
    console.log("Bobby is allowed to go to the movie")
} else {
    console.log("Bobby is NOT allowed to go to the movie")
}
if (person.name[0] === "b" && person.age > 18) {
    console.log("Bobby is allowed to go to the movie")
} else {
    console.log("Bobby is NOT allowed to go to the movie")
}

// for (starting point; ending point; howWeGetThere) { 
//    code to be executed by the loop... each iteration
//}
for (var i = 0; i < 5; i++) {
    console.log(i)
    console.log(person.name[i])
}
//var letters = ['apple','bear','canoe','deer','elephant']
//for (var i = 0; i < 5; i++) {
//    console.log(i)
//   console.log(letters[i])
//}

var states = ['idaho', 'hawaii', 'oregon', 'texas']
for (var i = 0; i < 4; i++) {
    console.log(i)
    console.log(states[i])
}

var names = ['adam', 'alex', 'ashley', 'bill', 'james', 'tim']
for (var i = 0; i < 6; i++) {
    console.log(names[i])
}

function loopthroughbrands(array) {
    for (var i = 0; i < loopthroughbrands.length; i++) {
        console.log(loopthroughbrands[i])
    }
}
loopthroughbrands(['nike', 'fila', 'addidas', 'underarmor', 'columbia'])


//Method = function inside of an object

var person = {
    weight: 200,
    name: "david",
    isMale: true,
    gender: function(){
        console.log(person["isMale"])
    }
}
person["gender"]()

var words = document.getElementById("words")
console.log(words)
console.dir(words)