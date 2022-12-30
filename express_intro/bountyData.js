const {v4: uuidv4} = require('uuid');
const express = require("express");
const app = express();


app.use(express.static('images'));



exports.bounties = [
    { 
        firstName: "Jenta",
        lastName: "Dari",
        living: "Alive",
        bountyAmount: 150,
        type: "Smuggler",
        // image: {Image1},
        image: "http://localhost:3000/bounties1.jpeg",
        _id: uuidv4() 
    },

    { 
        firstName: "Sandor",
        lastName: "il Cattivo",
        living: "Alive",
        bountyAmount: 250,
        type: "Murderer",
        image: "http://localhost:3000/bounties2.jpeg",
        _id:  uuidv4() 
    },

    { 
        firstName: "Toren",
        lastName: "Aslov",
        living: "Alive",
        bountyAmount: 750,
        type: "Criminal of the Republic",
        image: "http://localhost:3000/bounties3.jpeg",
        _id:  uuidv4() 
    },

    { 
        firstName: "Ambassador",
        lastName: "Domek",
        living: "Alive",
        bountyAmount: 850,
        type: "Political Rebel",
        image: "http://localhost:3000/bounties4.jpeg",
        _id:  uuidv4() 
    },

    { 
        firstName: "Lavos",
        lastName: "Spectre",
        living: "Alive",
        bountyAmount: 950,
        type: "Modified Human",
        image: "http://localhost:3000/bounties5.jpeg",
        _id:  uuidv4() 
    },

    { 
        firstName: "Arcane",
        lastName: "Cinder",
        living: "Alive",
        bountyAmount: 1000,
        type: "Modified Human",
        image: "http://localhost:3000/bounties6.jpeg",
        _id:  uuidv4() 
    }
]