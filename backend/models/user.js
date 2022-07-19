var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
    password:Strig
})

module.exports = mongoose.model("User", userSchema)