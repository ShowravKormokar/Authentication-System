'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { signup } from '@/lib/api';


const register = () => {

    // Data handling variable
    const [registerDatas, setRegisterDatas] = useState({
        userName: '',
        email: '',
        password: '',
        cPassword: '',
        role: 'user'
    });

    // For handle/show error
    // const [error, setError] = useState<String | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});


    // Get input data
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterDatas({
            ...registerDatas,
            [e.target.name]: e.target.value
        });// Set data
    };

    // Submit from data
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        registerMutation.mutate();
    };

    // Save user register data on database use React Query mutation
    const registerMutation = useMutation({
        mutationFn: () => signup(registerDatas.userName.toLowerCase(), registerDatas.email, registerDatas.password, registerDatas.cPassword, registerDatas.role),
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
        // In your register component
        onError: (err: any) => {
            console.log('Received error in component:', err); // Debug log

            const errors: { [key: string]: string } = {};

            // Handle validation errors
            if (err.errors) {
                Object.entries(err.errors).forEach(([field, message]) => {
                    if (typeof message === 'string') {
                        errors[field] = message;
                    } else if (Array.isArray(message)) {
                        errors[field] = message[0]; // Take first error if array
                    }
                });
            }

            // Handle general error message
            if (err.message && Object.keys(errors).length === 0) {
                errors.general = err.message;
            } else if (Object.keys(errors).length === 0) {
                errors.general = "Registration failed";
            }

            //console.log('Processed errors:', errors); // Debug log
            setFieldErrors(errors);
        }

    })

    return (
        <>
            <div className='flex justify-center items-center w-full h-[80vh] rounded-lg '>
                <form onSubmit={handleSubmit} className=' bg-white/7 backdrop-blur-[20px] backdrop-saturate-[155%] rounded-xl p-6 w-full max-w-md border-2 border-[#0F172A]'>
                    <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                    <input
                        type="text"
                        placeholder='Name'
                        name="userName"
                        onChange={handleChange}
                        value={registerDatas.userName}

                        className='w-full p-2 rounded mb-3 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    {fieldErrors.userName && (
                        <p className="text-[#F59E0B] mb-3 text-sm">{fieldErrors.userName}</p>
                    )}

                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        onChange={handleChange}
                        value={registerDatas.email}

                        className='w-full p-2 rounded mb-3 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    {fieldErrors.email && (
                        <p className="text-[#F59E0B] mb-3 text-sm">{fieldErrors.email}</p>
                    )}

                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        onChange={handleChange}
                        value={registerDatas.password}

                        className='w-full p-2 rounded mb-3 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    {fieldErrors.password && (
                        <p className="text-[#F59E0B] mb-3 text-sm">{fieldErrors.password}</p>
                    )}

                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name="cPassword"
                        onChange={handleChange}
                        value={registerDatas.cPassword}

                        className='w-full p-2 rounded mb-3 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    {fieldErrors.cPassword && (
                        <p className="text-[#F59E0B] mb-3 text-sm">{fieldErrors.cPassword}</p>
                    )}

                    {/* Error */}
                    {/* {error && <p className="text-[#F59E0B] mb-3">{error}</p>} */}
                    {fieldErrors.general && (
                        <p className="text-[#F59E0B] mb-3">{fieldErrors.general}</p>
                    )}


                    <button
                        type="submit"
                        className="w-full bg-[#06B6D4] text-white py-2 rounded hover:bg-[#0891B2] hover:shadow-[0_0_10px_rgba(6,182,212,0.7)] cursor-pointer">
                        Register
                    </button>
                    <p className="text-center text-sm text-cyan-50 mt-4">
                        Have an account?
                        <Link href="/login" className="text-[#0EA5E9] hover:underline ml-1">
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default register