const Vegetables = require('../Models/vegitableModel');

// Create a new vegetable
exports.createVegetable = async (req, res) => {
    try {
        const { id, name, price, unit, season, description, imageUrls } = req.body;
        const newVegetable = new Vegetables({ id, name, price, unit, season, description, imageUrls });
        await newVegetable.save();
        res.status(201).json({ message: 'Vegetable created successfully', data: newVegetable });
    } catch (error) {
        res.status(500).json({ message: 'Error creating vegetable', error: error.message });
    }
};

// Get all vegetables
exports.getAllVegetables = async (req, res) => {
    try {
        const vegetables = await Vegetables.find();
        res.status(200).json({ data: vegetables });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vegetables', error: error.message });
    }
};

// Get a single vegetable by ID
exports.getVegetableById = async (req, res) => {
    try {
        const { id } = req.params;
        const vegetable = await Vegetables.findOne({ id });
        if (!vegetable) {
            return res.status(404).json({ success: false, message: 'Vegetable not found' });
        }
        res.status(200).json({ data: vegetable });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vegetable', error: error.message });
    }
};

// Update a vegetable
exports.updateVegetable = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, unit, season, description, imageUrls } = req.body;

        const updatedVegetable = await Vegetables.findOneAndUpdate(
            { id },
            { name, price, unit, season, description, imageUrls },
            { new: true } // Return the updated document
        );

        if (!updatedVegetable) {
            return res.status(404).json({ success: false, message: 'Vegetable not found' });
        }

        res.status(200).json({ success: true, message: 'Vegetable updated successfully', data: updatedVegetable });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating vegetable', error: error.message });
    }
};

// Delete a vegetable
exports.deleteVegetable = async (req, res) => {
    try {
        const { id } = req.params;
        const vegetable = await Vegetables.findOneAndDelete({ id });

        if (!vegetable) {
            return res.status(404).json({ success: false, message: 'Vegetable not found' });
        }

        res.status(200).json({ success: true, message: 'Vegetable deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting vegetable', error: error.message });
    }
};
