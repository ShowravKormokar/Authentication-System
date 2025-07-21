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
    const [error, setError] = useState<String | null>(null);

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

        console.log(registerDatas);
        if (registerDatas.password == registerDatas.cPassword) {
            registerMutation.mutate();
        } else {
            setError("Password didn't match!");
            return;
        }
    };

    // Save user register data on database use React Query mutation
    const registerMutation = useMutation({
        mutationFn: () => signup(registerDatas.userName, registerDatas.email, registerDatas.password, registerDatas.cPassword, registerDatas.role),
        onSuccess: (data) => {
            window.location.href = '/';
        },
        onError: (err: any) => {
            setError(err.response?.data?.message || 'Registration failed')
        },
    })

    return (
        <>
            <div className='flex justify-center items-center w-full h-[80vh] rounded-lg bg-gray-50'>
                <form onSubmit={handleSubmit} className=' bg-white shadow-md rounded p-6 w-full max-w-md'>
                    <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                    <input
                        type="text"
                        placeholder='Name'
                        name="userName"
                        onChange={handleChange}
                        value={registerDatas.userName}
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        onChange={handleChange}
                        value={registerDatas.email}
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        onChange={handleChange}
                        value={registerDatas.password}
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name="cPassword"
                        onChange={handleChange}
                        value={registerDatas.cPassword}
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    {/* Error */}
                    {error && <p className="text-red-500 mb-3">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer">
                        Register
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Have an account?
                        <Link href="/login" className="text-green-600 hover:underline ml-1">
                            Log In
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default register