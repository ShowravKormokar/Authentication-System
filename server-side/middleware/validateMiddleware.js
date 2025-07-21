// Custom Express middleware for request validation by using ZOD
const validate = (schema) => async (req, res, next) => { // It takes ZOD schema as an argument and return a middleware function
    try {
        // If valid zod returns the parse body
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next(); // To move the controller (authController->register)
    } catch (error) {
        res.status(400).json({
            message: "Validation error.",
            error: error.errors,
        });
    }
};

module.exports = validate;