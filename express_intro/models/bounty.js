const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//Bounty blueprint

const bountySchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: String,
        required: true
    },
    bountyAmount: {
        type: Number,
        enum: ["250", "500", "1000"],
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("Bounty", bountySchema)