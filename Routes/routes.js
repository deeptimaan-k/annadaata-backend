const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { getAllFruits, getFruitById } = require('../controllers/fruitController');
const vegetableController = require('../controllers/vegetableController');

// Route to register a new user
router.post('/register', registerUser);

// Route to authenticate a user
router.post('/login', loginUser);

// Route to fetch all fruits
router.get('/fruits', getAllFruits);

// Route to fetch a fruit by ID
router.get('/fruits/:id', getFruitById);

// Create a new vegetable
router.post('/vegetables', vegetableController.createVegetable);

// Get all vegetables
router.get('/vegetables', vegetableController.getAllVegetables);

// Get a single vegetable by ID
router.get('/vegetables/:id', vegetableController.getVegetableById);

// Update a vegetable by ID
router.put('/vegetables/:id', vegetableController.updateVegetable);

// Delete a vegetable by ID
router.delete('/vegetables/:id', vegetableController.deleteVegetable);


module.exports = router;
