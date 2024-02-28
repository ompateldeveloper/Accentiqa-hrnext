import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContextProvider';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [details, setDetails] = useState({ name:"", email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    // const { dispatch } = useAuthContext()
    const [err, setErr] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        let {name, email, password } = details
        setIsLoading(true)
        setErr("")

        const response = await fetch('/api/v1/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name,email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setErr(json.err)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            // dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }
    return (
        <form className=' px-8 mx-auto py-12 w-min' onSubmit={handleSubmit}>
            <div className="title m-2 text-xl text-gray-900">Sign Up</div>
            <div className="name relative pt-6 m-3">
                <input type="text" name="name" id="name" className=" w-64 peer/name bg-transparent border-0 border-b-2 border-b-gray-500 focus:border-b-violet-500 outline-none text-gray-900 transition duration-300 " onChange={(e)=>{setDetails(prev=>({...prev,name:e.target.value}))}} value={details.name}/>
                <label htmlFor="name" className={" peer-focus/name:text-violet-500 text-gray-500 absolute left-0  peer-focus/name:text-xs peer-focus/name:-translate-y-5 transition-all duration-300 select-none peer-"+(details?.name?.length ? " text-xs -translate-y-5 te ":"translate-y-0")}>Name</label>
            </div> 
            <div className="email relative pt-6 m-3">
                <input type="text" name="email" id="email" className=" w-64 peer/email bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-violet-400 outline-none text-gray-900 transition duration-300 " onChange={(e) => { setDetails(prev => ({ ...prev, email: e.target.value })) }} value={details.email} />
                <label htmlFor="email" className={" peer-focus/email:text-violet-400 text-gray-400 absolute left-0  peer-focus/email:text-xs peer-focus/email:-translate-y-5 transition-all duration-300 select-none" + (details.email?.length ? " text-xs -translate-y-5 " : " translate-y-0")}>Email</label>
            </div>
            <div className="password relative pt-6 m-3 mt-6">
                <input type="password" autoComplete='on' name="password" id="password" className=" w-64 peer/password bg-transparent border-0 border-b-2 border-b-gray-400 focus:border-b-violet-400 outline-none text-gray-900 transition duration-300" onChange={(e) => { setDetails(prev => ({ ...prev, password: e.target.value })) }} value={details.password} />
                <label htmlFor="password" className={" peer-focus/password:text-violet-500 text-gray-400 absolute left-0  peer-focus/password:text-xs peer-focus/password:-translate-y-5 transition-all duration-300 select-none" + (details.password?.length ? " text-xs -translate-y-5 " : " translate-y-0")}>Password</label>
            </div>
            <button disabled={isLoading} className=" flex items-center group self-start py-2 px-6 rounded-md font-bold text-sm m-2 mt-8 bg-gradient-to-br from-pink-300 to-violet-400  text-white" >
                <span>Sign Up</span>
                <div className="ml-2 hidden group-disabled:grid">
                </div>
            </button>
            <div className="not-user text-gray-400 m-3 text-sm">
                Already a User? &nbsp;
                <Link to={'/signin'} className="text-violet-500" >Sign In</Link>
            </div>
        </form>
    )
}
