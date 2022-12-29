const {v4: uuidv4} = require('uuid')



const bounties = [
    { 
        firstName: "Jabba",
        lastName: "the Hut",
        living: "Alive",
        bountyAmount: 150,
        type: "Bad Guy",
        _id: uuidv4() 
    },

    { 
        firstName: "Anakin",
        lastName: "Skywalker",
        living: "Alive",
        bountyAmount: 250,
        type: "Jedi",
        _id:  uuidv4() 
    },

    { 
        firstName: "Boba",
        lastName: "Fett",
        living: "Alive",
        bountyAmount: 750,
        type: "Bad Guy",
        _id:  uuidv4() 
    },

    { 
        firstName: "Luke",
        lastName: "Skywalker",
        living: "Alive",
        bountyAmount: 850,
        type: "Jedi",
        _id:  uuidv4() 
    },

    { 
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        living: "Alive",
        bountyAmount: 950,
        type: "Jed",
        _id:  uuidv4() 
    },

    { 
        firstName: "Emperor",
        lastName: "Palpatine",
        living: "Alive",
        bountyAmount: 1000,
        type: "Bad Guy",
        _id:  uuidv4() 
    }
]