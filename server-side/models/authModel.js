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