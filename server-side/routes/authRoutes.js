const express = require('express');
const router = new express.Router();
const authController = require('../controllers/authController');
const signUpValidationSchema = require('../validators/authValidator');
const validate = require('../middleware/validateMiddleware');
const jwtAuthMiddleware = require('../middleware/jwtAuthMiddleware');

// Test Route: For testing api that word perfectly - Pass
router.get('/ping', (req, res) => {
    res.send("Pong!");
});