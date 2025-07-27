'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-auto flex items-center justify-between p-2 '>
      <div>
        <h1 className='text-xl'>JWT</h1>
      </div>
      <div className=' px-3 py-2 text-center backdrop-blur-[20px] backdrop-saturate-[155%] bg-white/7 rounded-md border-white/10 hover:shadow-[0_0_2px_rgba(6,182,212,0.7)]'>
        <ul className="flex flex-col text-sm md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center">
          <li><Link href="/" className="text-[#0EA5E9] hover:text-gray-300">Home</Link></li>
          <li><Link href="#" className="text-[#0EA5E9] hover:text-gray-300">About</Link></li>
          <li><Link href="/register" className="text-[#0EA5E9] hover:text-gray-300">Account</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;