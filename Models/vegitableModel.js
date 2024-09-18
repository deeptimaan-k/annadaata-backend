const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Vegetable
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
    },
    farmer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' // Ensure this matches the name of your User model
    }
});

// Define and export the Vegetable model
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

module.exports = Vegetable;
