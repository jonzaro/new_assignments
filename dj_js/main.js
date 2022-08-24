const square = document.getElementById("square")
square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
})
square.addEventListener("mouseout", function() {
    square.style.backgroundColor = "orange"
})
square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
});
square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})
document.addEventListener("keydown", function(event) {
    const x = event.key;
    if (x == "b" || x == "B") {
        square.style.backgroundColor = "blue"
      }
    })
document.addEventListener("keydown", function(event) {
    const x = event.key;
    if (x == "o" || x == "O") {
        square.style.backgroundColor = "orange"
        }
    })
document.addEventListener("keydown", function(event) {
    const x = event.key;
    if (x == "r" || x == "R") {
        square.style.backgroundColor = "red"
      }
    })
document.addEventListener("keydown", function(event) {
    const x = event.key;
    if (x == "y" || x == "Y") {
        square.style.backgroundColor = "yellow"
        }
    })
document.addEventListener("keydown", function(event) {
        const x = event.key;
        if (x == "g" || x == "G") {
            square.style.backgroundColor = "green"
        }
    })
        
        /* THIS IS ANOTHER WAY THAT WORKS 
        if (event.which === 82) {
             square.style.backgroundColor = "red"
         }
       })
    */
