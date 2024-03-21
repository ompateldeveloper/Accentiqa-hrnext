import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import heroimage from '../assets/image-removebg-preview.png'
export default function Welcome() {
    const { user } = useAuthContext();
    return (
        <div>
            <div className="hero flex justify-between w-full h-64 rounded-lg overflow-hidden bg-zinc-100 relative">
                <div className="self-center m-4 ml-12 z-10">
                    <div className="text-3xl font-semibold text-theme-1 truncate"><span title="Hello, How Do you Do? ">Howdy</span>, {user?.name}</div>
                    <div className="span truncate">Lets do Something Awesome 🚀</div>
                </div>
                <div className="self-end absolute inset-0 opacity-30">
                    <img src={heroimage} className='w-full object-cover' alt="" />
                </div>
            </div>
            <div className="section-01 grid grid-cols-12">
                <div className="left h-56 col-span-8 my-4 mr-4 border-zinc-100 rounded-lg backdrop-blur-xl bg-gradient-to-b from-zinc-200">
                    
                </div>
                <div className="right col-span-4 left h-96 my-4 border-zinc-100 rounded-lg backdrop-blur-xl bg-gradient-to-b from-zinc-200 via-transparent to-zinc-200">

                </div>
            </div>
        </div>
    )
}
