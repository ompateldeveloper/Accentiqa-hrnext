import React from 'react'
import acqlogo from "../assets/logo.svg"
import { Bell, Settings, User } from 'lucide-react';

export default function Navbar () {
    return (
        <div className='fixed w-full flex justify-between  items-center  bg-gray-50 font-medium py-4  border-b'>
            <div className='flex items-center gap-2 mx-4 bg-blue-500 p-2 rounded-md' >
                <img className='h-8' src={acqlogo} alt='' />
                <div className="logo-name text-2xl text-white  font-serif font-bold">ACCENTIQA</div>
            </div>
            <div className='text-2xl'>
                <h1>Add Employee</h1>
            </div>
            <div className='flex items-center gap-4 text-2xl text-zinc-700 ml-60 mr-2'>
                <input className='border-zinc-300 border-2  pl-4 rounded-full mr-10 text-xl h-10' placeholder='Search' type='search' />
                <Bell/>
                <Settings/>
                <User/>
            </div>
        </div>
    )
}