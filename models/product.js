
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    mobilenumber: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model("Product", productSchema);