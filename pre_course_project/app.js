
var student = {
    passGrade: 'a',
    failGrade: 'f',
    isEnrolled: true
}


function pass() {
    if (student.isEnrolled === true && student.passGrade === 'a') {
        console.log("Jon Passed Module 0")
    } else {
        console.log("Jon DID NOT PASS")
    }
}
function fail() {
    if (student.isEnrolled === true && student.failGrade === 'f') {
        console.log("Jon Failed Module 0")
    } else {
        console.log("Jon Passed")
    }
}
var grades = ['A', 'B', 'C', 'D', 'F']

for (var i = 0; i < 5; i++) {
    console.log("Grades Include...")
    console.log(grades[i])
}


let passBtn = document.getElementById('pass-btn')
passBtn.addEventListener('click', function () {
    let imgDiv = document.getElementById('imgDiv')
    imgDiv.innerHTML = `<img id='grad-pic' src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />`;
})
let failBtn = document.getElementById('fail-btn')
failBtn.addEventListener('click', function () {
    let imgDiv = document.getElementById('imgDiv')
    imgDiv.innerHTML = `<img id='fail-pic' src="https://as1.ftcdn.net/jpg/00/83/04/16/500_F_83041623_iaSTaKWubHMtMdbXloQ6Puf5xxDyBUuj.jpg" />`;
})

let passText = document.getElementById("passText");
passBtn.addEventListener('click', function () {
    passText.textContent += "Jon Passed Module 0";
})
let failText = document.getElementById("failText");
failBtn.addEventListener('click', function () {
    failText.textContent += "Jon Failed Module 0";
})
