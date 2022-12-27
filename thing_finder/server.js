const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

app.use(express.json())

const animals = [
    {name: "Panda", type: "Bear", lifespan: 30, _id: uuidv4()},
    {name: "Tiger", type: "Cat", lifespan: 20, _id: uuidv4()},
    {name: "Penguin", type: "Bird", lifespan: 19, _id: uuidv4()},
    {name: "Lion", type: "Cat", lifespan: 15, _id: uuidv4()},
    {name: "Dolphin", type: "Fish", lifespan: 11, _id: uuidv4()},
    {name: "Shark", type: "Fish", lifespan: 19, _id: uuidv4()},
    {name: "Eagle", type: "Bird", lifespan: 24, _id: uuidv4()},
    {name: "Polar Bear", type: "Bear", lifespan: 33,  _id: uuidv4()},
]

// GET ALL ROUTE
app.get("/animals", (req, res) => {
    res.send(animals)
})

//GET BY TYPE ROUTE
app.get("/animals/search/type", (req, res) => {
    const type = req.query.type
    const filteredAnimals = animals.filter(animal => animal.type === type)
    res.send(filteredAnimals)
})

//GET BY AGE ROUTE       DOES NOT WORK
// app.get("/animals/search/lifespan", (req, res) => {
//     const lifespan = req.query.lifespan
//     const filteredLifespan = animals.filter(animal => animal.lifespan === lifespan)
//     res.send(console.log(filteredLifespan))
// })








app.listen(6000, () => {
    console.log("The server is running on Port 6000")
})