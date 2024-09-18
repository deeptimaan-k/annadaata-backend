const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const userRoutes = require('./Routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Database connection
mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process if unable to connect to DB
    });

// Use user routes
app.use('/api/users', userRoutes); // Define the base path for user routes
app.use('/api/fruits', userRoutes); // Define the base path for user routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error: ', err.message);
    res.status(500).json({ success: false, message: 'Something went wrong!', error: err.message });
});

// 404 Route handler (in case no route matches)
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
