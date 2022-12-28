const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")


//MIDDLEWARE THAT FIRES FOR ALL ROUTES
app.use(express.json())



//ARRAY OF TODO OBJECTS
const todos = [
    {
        title: "Learn Node",
        description: "Spend 1 hour a day learning Node", 
        imageUrl: "https://images.unsplash.com/photo-1589988024319-7b6b1b6b5e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        completed: false,
        _id: uuidv4()
    },
    {
        title: "Learn Express",
        description: "Ask questions and read the docs", 
        imageUrl: "https://images.unsplash.com/photo-1589988024319-7b6b1b6b5e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        completed: false, 
        _id: uuidv4()
    },
    {
        title: "Learn MongoDB",
        description: "Read the docs and watch tutorials",
        imageUrl: "https://images.unsplash.com/photo-1589988024319-7b6b1b6b5e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        completed: false, 
        _id: uuidv4()
    },
    {
        title: "Learn React",
        description: "practice, practice, practice", 
        imageUrl: "https://images.unsplash.com/photo-1589988024319-7b6b1b6b5e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        completed: false,
        _id: uuidv4()
    },
    {
        title: "Learn Redux", 
        description: "google, google, google",
        imageUrl: "https://images.unsplash.com/photo-1589988024319-7b6b1b6b5e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
        completed: false, 
        _id: uuidv4()
    },
    {
        title: "Learn Python", 
        description: "find out what it is", 
        imageUrl: "https://images.unsplash.com/photo-1589988024319-7b6b1b6b5e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        completed: false, 
        _id: uuidv4()
},
]



//GET ALL TODOS
app.get("/todos", (req, res) => {
    res.send(todos)
})


//GET ONE TODO
app.get("/todos/:todoID", (req, res) => {
    const todoID = req.params.todoID
    const foundTodo = todos.find(todo => todo._id === todoID)
    res.send(foundTodo)
})


//POST ONE TODO
app.post("/todos", (req, res) => {
    req.body._id = uuidv4()
    todos.push(req.body)
    res.send("Successfully added a new todo to the database")
})


//UPDATE ONE TODO
app.put("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(console.log("Successfully updated todo in the database"))
})


//DELETE ONE TODO
app.delete("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo from the database")
})




//SERVER LISTENING
app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})