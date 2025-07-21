import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex justify-center items-center w-full h-[80vh] rounded-lg bg-gray-50'>
                <form action="" className=' bg-white shadow-md rounded p-6 w-full max-w-md'>
                    <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
                    <input
                        type="text"
                        placeholder='Name'
                        name=""
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    <input
                        type="text"
                        placeholder='Email'
                        name=""
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    <input
                        type="text"
                        placeholder='Password'
                        name=""
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    <input
                        type="text"
                        placeholder='Confirm Password'
                        name=""
                        required
                        className='w-full border p-2 rounded mb-4'
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default page