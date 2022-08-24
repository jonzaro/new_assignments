// const page = document.getElementsByTagName("body");

let theClicks = 0;
let clickCount = document.getElementById("clickDiv");




addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("clicks", theClicks)
    let clicks = localStorage.getItem("clicks");
    clickCount.innerText = clicks;
    // let totalClicks = localStorage.setItem("clicks", ++clicks);
    theClicks += 1;
})
