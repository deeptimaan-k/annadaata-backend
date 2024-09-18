const Vegetables = require('../Models/vegitableModel');

exports.getAllVegetables = async (req, res) => {
    try {
        const vegetables = await Vegetables.find();
        res.status(200).json(vegetables);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching vegetables', error: err });
    }
};

// Controller to fetch a fruit by ID
exports.getVegetablesById = async (req, res) => {
    const { id } = req.params;
    try {
        const fruit = await Vegetables.findOne({ id: parseInt(id) });
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit not found' });
        }
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching fruit', error: err });
    }
};