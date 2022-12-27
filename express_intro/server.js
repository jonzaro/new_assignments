const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')


//middleware for all requests

app.use(express.json())

const bounties = [
    { 
        firstName: "Jabba",
        lastName: "the Hut",
        living: true,
        bountyAmount: 150,
        type: "Bad Guy",
        _id: uuidv4() 
    },

    { 
        firstName: "Anakin",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 250,
        type: "Jedi",
        _id:  uuidv4() 
    },

    { 
        firstName: "Boba",
        lastName: "Fett",
        living: true,
        bountyAmount: 750,
        type: "Bad Guy",
        _id:  uuidv4() 
    },

    { 
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 850,
        type: "Jedi",
        _id:  uuidv4() 
    },

    { 
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: true,
        bountyAmount: 950,
        type: "Jed",
        _id:  uuidv4() 
    },

    { 
        firstName: "Emperor",
        lastName: "Palpatine",
        living: true,
        bountyAmount: 1000,
        type: "Bad Guy",
        _id:  uuidv4() 
    }
]


// GET all
app.get("/bounty", (req, res) => {
    res.send(bounties)
})

// GET one
app.get("/bounty/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// GET by Type
app.get("/bounty/search/type", (req, res) => {
    const type = req.query.type   
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounties)

})



// POST one
app.post("/bounty", (req, res) => {
    req.body._id = uuidv4()
    bounties.push(req.body)
    res.send("Successfully added a new bounty to the database")   
})



// UPDATE ONE
app.put("/bounty/:bountyId", (req, res) => {
   const bountyId = req.params.bountyId
   const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
   const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
   res.send(console.log("Successfully updated bounty in the database", updatedBounty))
})



// DELETE
app.delete("/bounty/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty from the database")
})  





// app.get("/greeting", (req, res) => {
//     res.send("Good afternoon")
// })

// app.get("/addresses", (req, res) => {
//     res.send({address: "777 Lucky Street, Las Vegas, Nevada"})
// })




// Route is like an event listener for HTTP requests

// 1st argument is port 
// 2nd argument is a callback func
app.listen(9000, () => {
    console.log("The Server is running on Port 9000")
})