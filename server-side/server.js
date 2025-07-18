const express = require('express');
const cors = require('cors');

require('dotenv').config();

require('./db/connection');

const app = express();

// Setup CORS to allow request from frontend/client-side
const corsOptions = {
    origin: "http://localhost:3000/", // Request allow only these origin
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // only allow these HTTP methods,
    allowedHeaders: ["Content-Type", "Authorization"], // only allow these headers,
    credential: true, // allow cookies or credentials if needed
}
app.use(cors(corsOptions));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});