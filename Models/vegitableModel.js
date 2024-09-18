const mongoose = require('mongoose');
const { Schema } = mongoose;

const vegetableSchema = new Schema({
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

// Correct the model name to match the content (Vegetable instead of Fruit)
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

module.exports = Vegetable;
