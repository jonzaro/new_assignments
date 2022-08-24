const header = document.getElementById("header")
header.style.fontSize = "40px"
header.style.textAlign = "center"
header.textContent = "Javascript Made This!!"
header.style.display = "block"

const newSpan1 = document.createElement("span")
document.getElementById("header")
header.append(newSpan1)
newSpan1.style.textAlign = "center"
newSpan1.textContent = "Jon Z"
newSpan1.style.fontSize = "20px"
newSpan1.style.color = "orange"
newSpan1.style.display = "block"

const newSpan2 = document.createElement("span")
document.getElementById("header")
header.append(newSpan2)
newSpan2.style.textAlign = "center"
newSpan2.textContent = "wrote the Javascript"
newSpan2.style.fontSize = "20px"
newSpan2.style.display = "inline-block"

document.getElementById("messageLeft1").textContent = "What do you call an Aligator in a vest?"

document.getElementById("messageRight1").textContent = "I have no clue"

document.getElementById("messageLeft2").textContent = "An investigator!!!"

document.getElementById("messageRight2").textContent = "WOOOOOOOW DAD!"

const messageLeft1 = document.getElementById("messageLeft1")
const messageLeft2 = document.getElementById("messageLeft2")
const messageRight1 = document.getElementById("messageRight1")
const messageRight2 = document.getElementById("messageRight2")

const clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", function(){
    messageLeft1.textContent = ""
    messageLeft2.textContent = ""
    messageRight1.textContent = ""
    messageRight2.textContent = ""
})
