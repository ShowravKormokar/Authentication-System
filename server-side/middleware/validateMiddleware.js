const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        console.log('Zod validation error:', error); // Add this line

        const errors = {};
        if (error.issues) {
            error.issues.forEach((issue) => {
                const field = issue.path[0];
                errors[field] = issue.message;
            });
        }

        res.status(400).json({
            message: "Validation failed",
            errors: errors
        });
    }
};

module.exports = validate;