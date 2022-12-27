//middleware funcs

const express = require("express")


const app = express()


// const users = []

app.use("/users", (req, res, next) => {
    console.log("A request was made to /users")
    req.body = {name: "John"}
    next()
    res.send(req.body)
})


module.exports = app