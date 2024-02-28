import React from 'react'
import acqlogo from "../assets/acq-logo.jfif"
import logout from "../assets/logout.png";
import settings from "../assets/settings.png";

const Navbar = () => {
  return (
    <div className=' flex justify-between  items-center  bg-gray-50 font-medium py-2 mx-2'>
        <div >
            <img className='w-40 h-14' src={acqlogo} alt=''/>
        </div>
        <div className='text-2xl  '>
            <h1>Add Employee</h1>
        </div>
        <div className='flex gap-10 text-2xl text-blue-900 ml-80'>
            <input className='border-zinc-300 border-2 outline-none pl-4 rounded-full mr-20 text-xl' placeholder='Search' type='search'/>
            <img className='w-10' src={settings} alt="settngs image"/>
            <img className='w-10' src={logout} alt="logout image"/>
        </div>
    </div>
  )
}

export default Navbar