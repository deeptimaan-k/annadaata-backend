const Fruit = require('../Models/fruitSchema');
const User = require('../Models/registerSchema');

// Controller to fetch all fruits
exports.getAllFruits = async (req, res) => {
    try {
        // Fetch all fruits with populated farmer details
        const fruits = await Fruit.find().populate('farmer', 'fullName emailAddress mobileNumber');
        res.status(200).json(fruits);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching fruits', error: err.message });
    }
};

// Controller to fetch a fruit by ID
exports.getFruitById = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the fruit by its ID and populate the farmer details
        const fruit = await Fruit.findById(id).populate('farmer', 'fullName emailAddress mobileNumber');

        if (!fruit) {
            return res.status(404).json({ message: 'Fruit not found' });
        }

        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching fruit', error: err.message });
    }
};