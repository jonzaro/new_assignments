var words = document.getElementById("words")
console.log("words")
words.textContent += "Java made me write this...";


onkeydown = function keyDownFunc(){
    console.log("What are you typing?")
}
object.addEventListener("keydown", keyDownFunc);

// add id to html element to make this event listener work
//document.getElementById("header").addEventListener("dblclick", function() {
//    console.log("The header was double clicked!")
//})
