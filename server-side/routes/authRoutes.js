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


// register route
// router.route('/register').post(validate(signUpValidationSchema), authController.register);
router.post('/register', validate(signUpValidationSchema), authController.register);

//login route
router.post('/login', authController.login);

module.exports = router;