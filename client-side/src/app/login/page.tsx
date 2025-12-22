'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { userLogin } from '@/lib/api';
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

const Login = () => {
    // Data handling variable
    const [loginDatas, setLoginDatas] = useState({
        email: '',
        password: ''
    });

    // For handle/show error
    const [error, setError] = useState<String | null>(null);

    // Get input data
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginDatas({
            ...loginDatas,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (error) setError(null);
    };

    // Submit form data
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginMutation.mutate();
    };

    const loginMutation = useMutation({
        mutationFn: () => userLogin(loginDatas.email, loginDatas.password),
        onSuccess: (data) => {
            alert("Login success");
            setLoginDatas({
                email: '',
                password: ''
            });
            window.location.href = ('/');
        },
        onError: (error: any) => {
            console.log(error);
            setError(error.message || "Login failed");
        }
    });

    return (
        <div className='flex justify-center items-center min-h-[80vh] px-4'>
            <Card className='w-full max-w-md'>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">
                        Welcome Back! 👋
                    </CardTitle>
                    <CardDescription className="text-center">
                        Please login to continue
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={loginDatas.email}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/change_password"
                                    className="text-sm text-primary underline-offset-4 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={loginDatas.password}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        {/* Error Display */}
                        {error && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loginMutation.isPending}
                        >
                            {loginMutation.isPending ? (
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
                                    Logging in...
                                </span>
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-center text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="text-primary underline-offset-4 hover:underline"
                        >
                            Register
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login;