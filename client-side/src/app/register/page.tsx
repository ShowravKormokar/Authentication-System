'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { signup } from '../../lib/api';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const Register = () => {
    // Data handling variable
    const [registerDatas, setRegisterDatas] = useState({
        userName: '',
        email: '',
        password: '',
        cPassword: '',
        role: 'user'
    });

    // For handle/show error
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

    // Get input data
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterDatas({
            ...registerDatas,
            [e.target.name]: e.target.value
        });
        // Clear field error when user starts typing
        if (fieldErrors[e.target.name]) {
            setFieldErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[e.target.name];
                return newErrors;
            });
        }
    };

    // Submit form data
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registerMutation.mutate();
    };

    // Save user register data on database use React Query mutation
    const registerMutation = useMutation({
        mutationFn: () => signup(
            registerDatas.userName.toLowerCase(),
            registerDatas.email,
            registerDatas.password,
            registerDatas.cPassword,
            registerDatas.role
        ),
        onSuccess: (data) => {
            alert("Registration successful.");
            // Clear form after success
            setRegisterDatas({
                userName: '',
                email: '',
                password: '',
                cPassword: '',
                role: 'user'
            });
            window.location.href = '/';
        },
        onError: (err: any) => {
            console.log('Received error in component:', err);

            const errors: { [key: string]: string } = {};

            // Handle validation errors
            if (err.errors) {
                Object.entries(err.errors).forEach(([field, message]) => {
                    if (typeof message === 'string') {
                        errors[field] = message;
                    } else if (Array.isArray(message)) {
                        errors[field] = message[0];
                    }
                });
            }

            // Handle general error message
            if (err.message && Object.keys(errors).length === 0) {
                errors.general = err.message;
            } else if (Object.keys(errors).length === 0) {
                errors.general = "Registration failed";
            }

            setFieldErrors(errors);
        }
    });

    return (
        <section className='w-screen h-dvh flex justify-center items-center min-h-[80vh] px-4'>
            <Card className='w-full max-w-md'>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">
                        Enter your details to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Username Field */}
                        <div className="space-y-2">
                            <Label htmlFor="userName">Username</Label>
                            <Input
                                id="userName"
                                name="userName"
                                type="text"
                                placeholder="Enter your username"
                                value={registerDatas.userName}
                                onChange={handleChange}
                                className={fieldErrors.userName ? "border-destructive" : ""}
                                required
                            />
                            {fieldErrors.userName && (
                                <p className="text-sm text-destructive">{fieldErrors.userName}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={registerDatas.email}
                                onChange={handleChange}
                                className={fieldErrors.email ? "border-destructive" : ""}
                                required
                            />
                            {fieldErrors.email && (
                                <p className="text-sm text-destructive">{fieldErrors.email}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={registerDatas.password}
                                onChange={handleChange}
                                className={fieldErrors.password ? "border-destructive" : ""}
                                required
                            />
                            {fieldErrors.password && (
                                <p className="text-sm text-destructive">{fieldErrors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="cPassword">Confirm Password</Label>
                            <Input
                                id="cPassword"
                                name="cPassword"
                                type="password"
                                placeholder="Confirm your password"
                                value={registerDatas.cPassword}
                                onChange={handleChange}
                                className={fieldErrors.cPassword ? "border-destructive" : ""}
                                required
                            />
                            {fieldErrors.cPassword && (
                                <p className="text-sm text-destructive">{fieldErrors.cPassword}</p>
                            )}
                        </div>

                        {/* General Error Alert */}
                        {fieldErrors.general && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{fieldErrors.general}</AlertDescription>
                            </Alert>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={registerMutation.isPending}
                        >
                            {registerMutation.isPending ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Creating account...
                                </span>
                            ) : (
                                "Create account"
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-center text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-primary underline-offset-4 hover:underline"
                        >
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </section>
    );
};

export default Register;

/*

// Replace the Alert section in the form with:
{fieldErrors.general && (
    <div className="p-3 rounded-md bg-red-500/10 border border-red-500/50 text-red-500 text-sm">
        <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {fieldErrors.general}
        </div>
    </div>
)}
*/