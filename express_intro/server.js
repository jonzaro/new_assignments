const express = require("express")
const app = express()
const morgan = require("morgan")
// const {v4: uuidv4} = require('uuid')
// const bountyData = require("./bountyData.js")
const mongoose = require("mongoose")
const Bounty = require("./models/bounty.js")

mongoose.set('strictQuery', true)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://jzaro:Somesillypassword111@ac-ivmbv5b-shard-00-00.7bdiaq7.mongodb.net:27017,ac-ivmbv5b-shard-00-01.7bdiaq7.mongodb.net:27017,ac-ivmbv5b-shard-00-02.7bdiaq7.mongodb.net:27017/?ssl=true&replicaSet=atlas-46v9oy-shard-0&authSource=admin&retryWrites=true&w=majority',
  () => console.log("App is connected to the database and is running")) 

  
}

//middleware for all requests

app.use(express.json())
app.use(morgan('dev'))



//mongoDB atlas conect to cluster

// mongoose.connect("mongodb+srv://jzaro:Somesillypassword111@cluster0.pltb0yg.mongodb.net/bountyhunter?retryWrites=true&w=majority", 
// {
//      useNewUrlParser: true 
// },
// () => console.log("App is connected to the database and is running")) 


// GET all
app.get("/bounty", (req, res, next) => {

    // res.status(200)
    // res.send(bountyData.bounties)
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
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
app.post("/bounty", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    // req.body._id = uuidv4()
    // bountyData.bounties.push(newBounty)
    // res.status(201).send(newBounty)   
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBounty)
    })
})



// UPDATE ONE
app.put("/bounty/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, //find this one to update
        req.body, //update the object with this data
        {new: true}, //send back the updated version
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
//    const bountyId = req.params.bountyId
//    const bountyIndex = bountyData.bounties.findIndex(bounty => bounty._id === bountyId)
//    const updatedBounty = Object.assign(bountyData.bounties[bountyIndex], req.body)
//    res.status(201).send(console.log("Successfully updated bounty in the database", updatedBounty))
})



// DELETE
app.delete("/bounty/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("Successfully deleted bounty from the database", deletedItem)
})

    // const bountyId = req.params.bountyId
    // const bountyIndex = bountyData.bounties.findIndex(bounty => bounty._id === bountyId)
    // bountyData.bounties.splice(bountyIndex, 1)
    // res.send("Successfully deleted bounty from the database")
})  







//Error Handler - Argument order matters
//return next brings new error object to frnot end

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})  



// Route is like an event listener for HTTP requests

// 1st argument is port 
// 2nd argument is a callback func
app.listen(8000, () => {
    console.log("The Server is running on Port 8000")
}) 