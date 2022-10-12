const express = require("express")
const app = express()


const users = [
    { name: "joe", age:20 },
    { name: "bob", age:55 },
    { name: "anne", age:36 },
    { name: "jeff", age:14 },
    { name: "frank", age:36 },
    { name: "jenny", age:21 }
]


//ROUTE EXAMPLE HAS TO HAVE A CALLBACK AS 2ND ARGUMENT

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/greeting", (req, res) => {
    res.send("Good afternoon")
})

app.get("/addresses", (req, res) => {
    res.send({address: "777 Lucky Street, Las Vegas, Nevada"})
})




// Route is like an event listener for HTTP requests

// 1st argument is port 
// 2nd argument is a callback func
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
})