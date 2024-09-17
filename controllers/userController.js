
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; // Ensure you have a JWT secret in your environment variables
const User = require('../Models/registerSchema');

// Function to register a new user
exports.registerUser = async (req, res) => {
  const { accountType, fullName, emailAddress, mobileNumber, password, termsAccepted } = req.body;

  try {
    // Trim emailAddress to avoid leading/trailing spaces
    const trimmedEmail = emailAddress ? emailAddress.trim() : null;

    // Check if the email is valid and not null
    if (!trimmedEmail) {
      return res.status(400).json({ message: 'Email address is required' });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ emailAddress: trimmedEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create a new user
    const newUser = new User({ 
      accountType, 
      fullName, 
      emailAddress: trimmedEmail, 
      mobileNumber, 
      password, 
      termsAccepted 
    });
    
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Function to authenticate a user
exports.loginUser = async (req, res) => {
  const { emailAddress, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ emailAddress });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, accountType: user.accountType }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
