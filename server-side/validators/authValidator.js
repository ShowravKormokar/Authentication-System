const { z } = require('zod');

// Username pattern (letters, numbers, underscore, 3-20 chars)
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

// Create an object schema
const signUpValidationSchema = z
    .object({
        userName: z
            .string({ required_error: "User name must be required." })
            .trim()
            .regex(usernameRegex, { message: "Invalid user name. Only letters, numbers, and underscores allowed (3-20 chars)" }),

        email: z
            .string({ required_error: "Email must be required" })
            .trim()
            .email({ message: "Invalid email" }),

        password: z
            .string({ required_error: "Password must be required" })
            .min(6, { message: "Password must be at least 6 characters" })
            .max(1024, { message: "Password can't be greater than 1024 characters" }),

        cPassword: z
            .string({ required_error: "Confirm password must be required" })
            .min(6, { message: "Password must be at least 6 characters" })
            .max(1024, { message: "Password can't be greater than 1024 characters" }),

        role: z.enum(["admin", "user"], {
            required_error: "Role must be required",
        }).default("user"),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.cPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Passwords do not match",
                path: ["cPassword"]
            });
        }
    });

module.exports = signUpValidationSchema;