const { z } = require('zod');

// Create an object schema
const signUpValidationSchema = z.object({
    userName: z
        .string({ required_error: "User name must be required." })
        .trim()
        .userName({ message: "Invalid user name" }),

    password: z
        .string({ required_error: "Password must be required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" }),

    cPassword: z
        .string({ required_error: "Confirm password must be required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" }),

    role: z.enum(["admin", "manager", "user"], {
        required_error: "Role must be required",
    })
        .superRefine(({ password, cPassword }, ctx) => {
            if (password !== cPassword) {
                ctx.addIssue({
                    code: "custom",
                    message: "The password and confirmed password doesn't match!"
                });
            }
        })
});

module.exports = signUpValidationSchema;