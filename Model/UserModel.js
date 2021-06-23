const mongoose = require("mongoose")



const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number
    }
}, { timestamp: true })

const User = mongoose.model("User", UserSchema);

module.exports = User;