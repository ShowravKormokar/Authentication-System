const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');

require('dotenv').config();

require('./db/connection');

const app = express();

// Setup CORS to allow request from frontend/client-side
const corsOptions = {
    origin: "http://localhost:3000", // Request allow only these origin
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // only allow these HTTP methods,
    allowedHeaders: ["Content-Type", "Authorization"], // only allow these headers,
    credentials: true, // allow cookies or credentials if needed
}
app.use(cors(corsOptions));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// All routes
app.use("/api/auth", authRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});