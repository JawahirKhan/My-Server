const { models } = require("mongoose")
const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: Number,
})

module.exports = mongoose.model('User', UserSchema)
