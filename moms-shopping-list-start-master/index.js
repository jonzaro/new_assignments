const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()
const item = form.title.value
form.title.value = ""
const listy = document.createElement('li')
document.getElementById("list").append(listy)
listy.textContent = "-" + item
const deleteBtn = document.createElement('button')
deleteBtn.innerHTML = "Remove Item"
document.getElementById("list").append(deleteBtn)
deleteBtn.setAttribute("id", "delete")
document.getElementById("delete").addEventListener("click", function(){
    listy.textContent = ""
    document.getElementById("delete").remove();

})

})

