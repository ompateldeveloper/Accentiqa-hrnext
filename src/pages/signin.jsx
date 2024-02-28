import axios from 'axios';
import React from 'react'
import { useState } from 'react';
// import { useAuthContext } from '../contexts/AuthContextProvider';
import { Link } from 'react-router-dom';

export default function Signin() {
    const [details, setDetails] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState("")
    // const { dispatch } = useAuthContext()

    async function handleSubmit(e) {
        e.preventDefault()
        let { email, password } = details
        setIsLoading(true)
        setErr("")

        const response = await fetch('/api/v1/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setErr(json.error)
            console.log(json);
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            // dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }
    return (
        <div className=' '>
            <form className=' p-8 ' onSubmit={handleSubmit}>
                <div className="title m-2 my-6 text-4xl font-bold text-zinc-700">Sign In</div>
                <div className=" m-2 font-semibold text-zinc-400">Enter your email and password to sign in!</div>
                <div className="h-px w-4/12 m-2 my-6 bg-zinc-200"></div>
                <div className="email relative pt-6 m-2 flex flex-col-reverse gap-2">
                    <input type="text" name="email" id="email" className=" w-4/12 h-12 p-2 peer/email rounded-lg bg-transparent border-2 border-gray-200 focus:border-violet-400 outline-none text-gray-900 transition duration-300 " onChange={(e) => { setDetails(prev => ({ ...prev, email: e.target.value })) }} value={details.email} />
                    <label htmlFor="email" className={" peer-focus/email:text-violet-400 text-gray-400    duration-300 select-none" + (details.email?.length ? "  " : " ")}>Email</label>
                </div>
                <div className="password relative pt-6 m-2 mt-6 flex flex-col-reverse gap-2">
                    <input type="password" autoComplete='on' name="password" id="password" className=" w-4/12 h-12 p-2 peer/password bg-transparent border-2 border-gray-200 rounded-lg focus:border-violet-400 outline-none text-gray-900 transition duration-300" onChange={(e) => { setDetails(prev => ({ ...prev, password: e.target.value })) }} value={details.password} />
                    <label htmlFor="password" className={" peer-focus/password:text-violet-500 text-gray-400 duration-300 select-none"}>Password</label>
                </div>
                {err && <div className='text-sm text-red-600 px-3 capitalize '>{err}</div>}
                <div className="forget m-2 my-6 text-sm text-violet-500">Forgot Password?</div>
                <button disabled={isLoading} className=" flex items-center group self-start py-2 px-6 rounded-full font-bold m-2 mt-8 bg-gradient-to-br from-pink-300 to-violet-400  text-white" >
                    <span>Sign In</span>
                    <div className=" hidden group-disabled:grid">
                    </div>
                </button>
                <div className="not-user text-gray-400 m-3 text-sm">
                    Not User? &nbsp;
                    {/* <Link to={'/signup'} className="text-violet-500" >Sign Up</Link> */}
                    <a to={'/signup'} className="text-violet-500" >Sign Up</a>
                </div>
            </form>
        </div>
    )
}
