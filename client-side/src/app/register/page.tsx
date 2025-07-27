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
        mutationFn: () => signup(registerDatas.userName.toLowerCase(), registerDatas.email, registerDatas.password, registerDatas.cPassword, registerDatas.role),
        onSuccess: (data) => {
            alert("Registration successful.");
            window.location.href = '/';
        },
        onError: (err: any) => {
            setError(err.response?.data?.message || 'Registration failed')
        },
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
                        required
                        className='w-full p-2 rounded mb-4 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        onChange={handleChange}
                        value={registerDatas.email}
                        required
                        className='w-full p-2 rounded mb-4 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name="password"
                        onChange={handleChange}
                        value={registerDatas.password}
                        required
                        className='w-full p-2 rounded mb-4 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name="cPassword"
                        onChange={handleChange}
                        value={registerDatas.cPassword}
                        required
                        className='w-full p-2 rounded mb-4 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                    />
                    {/* Error */}
                    {error && <p className="text-[#F59E0B] mb-3">{error}</p>}

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