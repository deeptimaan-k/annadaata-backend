const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userRoutes');

// Route to register a new user
router.post('/register', registerUser);

// Route to authenticate a user
router.post('/login', loginUser);

module.exports = router;
