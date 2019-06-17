const mongoose = require('mongoose');

//create schema:

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    pages: Number,
    price: Number,
    stores: {
        type: [],
        default: null
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = {Book}
