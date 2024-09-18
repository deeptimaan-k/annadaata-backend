const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    season: { type: String, required: true },
    description: { type: String, required: true },
    imageUrls: [String],
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
