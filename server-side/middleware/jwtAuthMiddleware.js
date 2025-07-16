require('dotenv').config();
const jwt = require('jsonwebtoken');

// Verify jwt token for incomming request
const jwtAuthMiddleware = (req, res, next) => {
    // Get token from headers
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({
            message: "Token not found"
        });
    }

    // Extract jwt token for request headers
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        res.status(401).json({
            message: "Unauthorized user"
        });
    }

    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.jwtPayload = decoded;
        next();
    } catch (error) {
        console.error(`JWT error: ${error}`);

        res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = jwtAuthMiddleware;