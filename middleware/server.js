const express = require("express")
const app = express()
// const {v4: uuidv4} = require('uuid')

const middleware = require("./routes/middleware.js");


app.use(express.json())


app.use(middleware)





app.listen(5000, () => {
    console.log("The Server is running on Port 5000")
})



