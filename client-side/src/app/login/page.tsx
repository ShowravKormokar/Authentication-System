import React from 'react'
import Link from 'next/link';

const login = () => {
    return (
        <div className='flex justify-center items-center w-full h-[80vh] rounded-lg '>
            <form action="" className=' bg-white/7 backdrop-blur-[20px] backdrop-saturate-[155%] rounded-xl p-6 w-full max-w-md border-2 border-[#0F172A]'>
                <h1 className='text-2xl font-bold mb-4 text-center'>Welcome Back! Please, Login!</h1>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Email'
                    className='w-full p-2 rounded mb-3 bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                />

                <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Password'
                    className='w-full p-2 rounded bg-slate-900 border border-slate-700 text-cyan-50 focus:ring-2 focus:ring-cyan-500'
                />

                {/* Forget password link */}
                <p className="text-[12px] text-cyan-50 mt-2 mb-4">
                    <Link href="/change_password" className="text-[#0EA5E9] hover:underline ml-1">
                        Forget Password
                    </Link>
                </p>

                <button
                    type="submit"
                    className="w-full bg-[#06B6D4] text-white py-2 rounded hover:bg-[#0891B2] hover:shadow-[0_0_10px_rgba(6,182,212,0.7)] cursor-pointer">
                    Login
                </button>

                <p className="text-center text-sm text-cyan-50 mt-4">
                    Create an account?
                    <Link href="/register" className="text-[#0EA5E9] hover:underline ml-1">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default login;