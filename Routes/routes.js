const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const { getAllFruits, getFruitById } = require('../controllers/fruitController');

// Route to register a new user
router.post('/register', registerUser);

// Route to authenticate a user
router.post('/login', loginUser);

// Route to fetch all fruits
router.get('/fruits', getAllFruits);

// Route to fetch a fruit by ID
router.get('/fruits/:id', getFruitById);


module.exports = router;
