const SignUp = require('../models/authModel');

// Fetches user data (Asynchronous controller function)
const getSignUpData = async (req, res) => {
    try {
        const getUserSignUp = await SignUp.find({});

        if (!getUserSignUp === 0) {
            res.status(404).json({
                message: "User not found."
            });
        } else {
            res.status(201).json({
                message: "Success",
                length: getUserSignUp.length,
                users: getUserSignUp
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error
        });
    }
};

// Register a new user and return a JWT token upon success
const register = async (req, res) => {
    try {
        const { userName, email, password, cPassword, role } = req.body; // Extract signup form data from client side
        const userExist = await SignUp.findOne({ email }); // Find provided email already in mongodb

        if (userExist) {
            return res.status(400).json({
                message: "Email already exist." // Return error if already in mongodb - prevents duplicates accounts
            });
        }

        // Create new user
        const createUser = await SignUp.create({
            userName,
            email,
            password,
            cPassword,
            role
        });

        // Return a success message
        res.status(201).json({
            token: await createUser.generateToken(), // Generate user token
            userId: createUser._id.toString(), // That userId used for client side
            message: "Sign up successfully!"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
};

// For user login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await SignUp.findOne({ email });

        if (!userExist) {
            return res.status(400).json({
                message: "Invalid credential!"
            });
        }

        // Ensure compare password exists before calling it
        if (typeof userExist.comparePassword !== "function") {
            return res.status(500).json({
                message: "Authentication method is missing or misconfigured!"
            });
        }

        const isPasswordMatch = await userExist.comparePassword(password);

        if (isPasswordMatch) {
            return res.status(200).json({
                message: "Login successfull.",
                token: await userExist.generateToken(),
                user: {
                    userName: userExist.userName,
                    userId: userExist._id,
                    userEmail: userExist.email
                }
            });
        } else {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
};
