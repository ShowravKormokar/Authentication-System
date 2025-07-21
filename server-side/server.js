const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');

require('dotenv').config();

require('./db/connection');

const app = express();

// Setup CORS to allow request from frontend/client-side
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));


app.use(express.json());

// Test route
app.use((req, res, next) => {
    console.log("Incoming Request:", req.method, req.url, req.headers['content-type']);
    console.log("Body:", req.body);
    next();
});
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});


// All routes
app.use("/api/auth", authRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});