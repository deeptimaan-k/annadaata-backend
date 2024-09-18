const Vegetables = require('../Models/vegitableModel');
const User = require('../Models/registerSchema'); // Import the User model if not already imported

// Controller to fetch all vegetables
exports.getAllVegetables = async (req, res) => {
    try {
        // Fetch all vegetables with populated farmer details
        const vegetables = await Vegetables.find().populate('farmer', 'fullName emailAddress mobileNumber address whatsapp');
        res.status(200).json(vegetables);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching vegetables', error: err.message });
    }
};

// Controller to fetch a vegetable by ID
exports.getVegetablesById = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the vegetable by its ID and populate the farmer details
        const vegetable = await Vegetables.findById(id).populate('farmer', 'fullName emailAddress mobileNumber address whatsapp');

        if (!vegetable) {
            return res.status(404).json({ message: 'Vegetable not found' });
        }

        res.status(200).json(vegetable);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching vegetable', error: err.message });
    }
};
