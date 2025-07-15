require('dotenv').config();
const mongoose = require('mongoose'); // For mongodb schema, model and queries
const bcrypt = require('bcrypt'); // For hashing password securely
const jwt = require('jsonwebtoken'); // To generate and verify jwts for user authentication

// Create schema for sign up
const signUpSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
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
signUpSchema.pre('save', async (next) => {
    const user = this; // The current user document
    if (!user.isModified('password', 'cPassword')) { // Avoid re-hashing if password already hashing during updates
        next(); // Continue saving if no hashing needed
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
signUpSchema.methods.comparePassword = async (password) => {
    return bcrypt.compare(password, this.password);
}