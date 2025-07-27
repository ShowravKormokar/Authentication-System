require('dotenv').config();
const mongoose = require('mongoose'); // For mongodb schema, model and queries
const bcrypt = require('bcrypt'); // For hashing password securely
const jwt = require('jsonwebtoken'); // To generate and verify JWT for user authentication

// Create schema for sign up
const signUpSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        cPassword: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['user', 'admin']
        }
    },
    {
        timestamps: {
            createdAt: "created_at", // When new user created
            updatedAt: "updated_at" // When it last updated
        }
    }
);


// Secure password using bcrypt
signUpSchema.pre('save', async function (next) {
    const user = this; // The current user document
    if (!user.isModified('password', 'cPassword')) { // Avoid re-hashing if password already hashing during updates
        return next(); // Continue saving if no hashing needed
    }

    try {
        const saltRounds = await bcrypt.genSalt(10); // Create random string (salt) added to the password
        const hash_password = await bcrypt.hash(user.password, saltRounds);

        user.password = hash_password;
        user.cPassword = hash_password;
    } catch (error) {
        next(error);
    }
});


// Compare password (When user sign in)
signUpSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Create JWT web tokens
signUpSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                role: this.role
            },
            process.env.JWT_SECRET_KEY, // Verify the token by JWT secret key
            {
                expiresIn: "7d" // Set tokens validity
            }
        )
    } catch (error) {
        console.error(`JWT error from authModel. error: ${error}`);
    };
};

const SignUp = new mongoose.model('users', signUpSchema);

module.exports = SignUp;