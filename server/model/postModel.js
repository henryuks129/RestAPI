const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    date: {
        type: Date,
        dafault: Date.now
    }
})

const POSTS = mongoose.model('singlePost', postSchema)

module.exports = POSTS

