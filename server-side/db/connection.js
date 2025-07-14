// Load variable from .env
const dotenv = require('dotenv').config();
// Import mongoose
const mongoose = require('mongoose');

// Read data base url from .env file
mongoose.connect(process.env.DATA_BASE, {
    useNewUrlParser: true, // Use new MongoDB connection string parser
    useUnifiedTopology: true // Use new server engine for monitoring
});

// Connection error handling
mongoose.connection.on('connected', () => {
    console.log("MongoDB connected successfully.✌️");
});
mongoose.connection.on('error', (err) => {
    console.error("MongoDB connection error: ", err);
});
mongoose.connection.on('disconnected', () => {
    console.log("MongoDB disconnected successfully👍");
})