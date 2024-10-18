const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    postCount: Number
})

const user = mongoose.model('user', userSchema)

module.exports = user; 