
// const document = document.getElementById("body")


function getTodos(){
     return axios.get("https://api.vschool.io/jonzaro/todo")
        .then(response => {
            console.log(response.data) 
            return response.data
        })
        .catch(error => console.log(error))
}

const todo = document.getElementById("todo-list")

function renderTodo(data){
    
    const h1 = document.createElement('h1')
    h1.textContent = data.title
    todo.appendChild(h1)
    const h3 = document.createElement('h3')
    h3.textContent = "Destination - " + data.description
    todo.appendChild(h3)
    const h32 = document.createElement('h3')
    h32.textContent = "Price - $" + data.price
    todo.appendChild(h32)
    
    const img = document.createElement("img")
    img.setAttribute("src", data.imgUrl)
    todo.appendChild(img)
    
        // check to see if data.cmpleted is true 
        // if its true, set the attribute of the checkbox to checked
    
    const completeTxt = document.createElement('h3')
    completeTxt.textContent = "Check the box below once trip is completed!"
    todo.appendChild(completeTxt)
    
    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox")   
    todo.appendChild(checkbox)

    const h33 = document.createElement("h3")
    h33.textContent = "Click the delete button to remove this item from the todo list!"
    todo.appendChild(h33)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    todo.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", function(){
        return axios.delete("https://api.vschool.io/jonzaro/todo/" + data._id)
            .then(response => {location.reload(true), todo.reset()})
            .catch(error => console.log(error))
    })

    checkbox.addEventListener("change", function(){
        console.log("Checkbox was checked!")
        if (checkbox.checked){
            const updatedTodo = {
                completed: true
            }
            return axios.put("https://api.vschool.io/jonzaro/todo/" + data._id, updatedTodo) 
                .then(response => {console.log(response)})
                .catch(error => console.log(error))
        }
    })

    
    return data
    }

function compile(){
    getTodos().then(todos => {
        for (let i = 0; i < todos.length; i++){
            renderTodo(todos[i])
        }
    })
    
}

function createTodo(title = "", description = "", price = "", imgUrl =""){
    return axios.post("https://api.vschool.io/jonzaro/todo", {title: title, description: description, price: price, imgUrl: imgUrl})
}

function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

compile()

document.todo.addEventListener("submit", function(event){
    event.preventDefault()
    clearList()
    createTodo(event.target.title.value, event.target.description.value, event.target.price.value, event.target.imgUrl.value)
        .then(response => compile())
    title.value = "" 
    description.value = "" 
    price.value = ""
    imgUrl = ""
})

