const Fruit = require('../Models/fruitSchema'); 

// Controller to fetch all fruits
exports.getAllFruits = async (req, res) => {
    try {
        const fruits = await Fruit.find();
        res.status(200).json(fruits);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching fruits', error: err });
    }
};

// Controller to fetch a fruit by ID
exports.getFruitById = async (req, res) => {
    const { id } = req.params;
    try {
        const fruit = await Fruit.findOne({ id: parseInt(id) });
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit not found' });
        }
        res.status(200).json(fruit);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching fruit', error: err });
    }
};

