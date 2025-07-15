const SignUp = require('../models/authModel');

// Fetches user data (Asynchronous controller function)
const getSignUpData = async (req, res) => {
    try {
        const getUserSignUp = await SignUp.find({});

        if (!getUserSignUp === 0) {
            res.status(404)({
                message: "User not found."
            });
        } else {
            res.status(201)({
                message: "Success",
                length: getUserSignUp.length,
                users: getUserSignUp
            });
        }
    } catch (error) {
        res.status(500)({
            message: "Server error",
            error: error
        })
    }
};
