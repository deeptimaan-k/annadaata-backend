const mongoose = require('mongoose');
const { Schema } = mongoose;

const fruitSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrls: {
        type: [String],
        required: true
    }
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
