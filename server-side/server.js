const express = require('express');
const cors = require('cors');

require('dotenv').config();

require('./db/connection');

const app = express();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});