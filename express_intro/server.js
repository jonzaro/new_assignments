const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')
const bountyData = require("./bountyData.js")


//middleware for all requests

app.use(express.json())


// GET all
app.get("/bounty", (req, res) => {
    res.status(200)
    res.send(bountyData.bounties)
})

// GET one
app.get("/bounty/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bountyData.bounties.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
        const error = new Error(`"The Item with the ID ${bountyId} was not found"`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

// GET by Type
app.get("/bounty/search/type", (req, res, next) => {
    const type = req.query.type   
    if(type === ""){
        const error = new Error("Search query must not be empty")
        res.status(500)
        return next(error)
    }
    const filteredBounties = bountyData.bounties.filter(bounty => bounty.type === type)
    res.status(200).send(filteredBounties)

})



// POST one
app.post("/bounty", (req, res) => {
    const newBounty = req.body
    req.body._id = uuidv4()
    bountyData.bounties.push(newBounty)
    res.status(201).send(newBounty)   
})



// UPDATE ONE
app.put("/bounty/:bountyId", (req, res) => {
   const bountyId = req.params.bountyId
   const bountyIndex = bountyData.bounties.findIndex(bounty => bounty._id === bountyId)
   const updatedBounty = Object.assign(bountyData.bounties[bountyIndex], req.body)
   res.status(201).send(console.log("Successfully updated bounty in the database", updatedBounty))
})



// DELETE
app.delete("/bounty/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bountyData.bounties.findIndex(bounty => bounty._id === bountyId)
    bountyData.bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty from the database")
})  





// app.get("/greeting", (req, res) => {
//     res.send("Good afternoon")
// })

// app.get("/addresses", (req, res) => {
//     res.send({address: "777 Lucky Street, Las Vegas, Nevada"})
// })










//Error Handler - Order matters

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})  



// Route is like an event listener for HTTP requests

// 1st argument is port 
// 2nd argument is a callback func
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
}) 