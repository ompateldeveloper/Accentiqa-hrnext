import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as FormElements from '../../components/ui/FormElements'
import Button from '../../components/ui/Button';
import { useFormValidation } from '../../hooks/useFormValidation';
import {getUrl} from '../../components/Url'
export default function Signin() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const { dispatch } = useAuthContext()
    const url = getUrl()
    const initialState = {
        email: "",
        password: ""
    }
    const onSubmit = async(values) => {
        setIsLoading(true)
        await axios.post(url+'/api/v1/auth/signin',formData)
        .then((data)=>{
            localStorage.setItem('user', JSON.stringify(data.data))
            dispatch({ type: 'LOGIN', payload: data.data })
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error);
            setError(error)
            setIsLoading(false)
        })
    }
    function validate(values) {
        const errors = {};

        if (!values.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.password.trim()) {
            errors.password = "Password is required";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/.test(values.password)) {
            errors.password = "Weak Password";
        }
        return errors
    }
    const { formData, errors, changeHandle, handleSubmit, cleanup } = useFormValidation(initialState, onSubmit, validate)


    return (
        <div className=' grid grid-cols-8 md:flex overflow-hidden h-screen'>
            <div className="signin-left overflow-hidden h-full md:hidden col-span-5">
                <svg className='h-full object-cover' viewBox="0 0 748 537" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_172_4)">
                        <rect width="536" height="747" transform="matrix(0 -1 1 0 0.5 536.5)" fill="white" />
                        <path d="M249.5 83.5C367.5 260.7 205.167 460.833 110.5 538H1L1 189.5L249.5 83.5L180.5 1.5H442.5H747V350.5C661.5 288.167 480.9 131.1 442.5 1.5L249.5 83.5Z" fill="#B6EA5F" />
                        <path d="M250 83.5C367.6 259.5 205 461.167 111 538H747.5V349.5C543.5 196.3 457.667 52.3333 443.5 1L250 83.5Z" fill="#225FB1" />
                    </g>
                    <defs>
                        <clipPath id="clip0_172_4">
                            <rect width="536" height="747" fill="white" transform="matrix(0 -1 1 0 0.5 536.5)" />
                        </clipPath>
                    </defs>
                </svg>
                {/* <video className='object-cover w-full h-full' src='https://video.wixstatic.com/video/11062b_6743da5900054f1f8e69f53302930a6a/720p/mp4/file.mp4' loop={true} onClick={(e) => e.target.play()} autoPlay={true} /> */}
            </div>
            <div className=' p-8 w-full col-span-3' >
                <div className="title m-2 my-4 text-4xl font-bold text-theme-text">Sign In</div>
                <div className="m-2 font-semibold text-zinc-400">Enter your email and password to sign in!</div>
                <div className="h-px  m-2 my-3 bg-zinc-200"></div>
                <FormElements.Input value={formData.email} onChange={changeHandle} error={errors.email} className='m-2 my-4' label='Email' type='email' name='email' />
                <FormElements.Input value={formData.password} onChange={changeHandle} error={errors.password} className='m-2 my-4' label='Password' type='password' name='password' />
                {error?.response&&<div className='m-2 text-white padding bg-theme-danger bg-opacity-80 p-2 rounded'>{error?.response?.data?.message}</div>}
                <Button className='m-2' disabled={isLoading} onClick={handleSubmit}>Sign In</Button>
                <div className="not-user text-gray-400 m-2 my-3 text-sm">
                    Not a User? &nbsp;
                    <Link to={'/signup'} className="text-violet-500" >Sign Up</Link>
                </div>
            </div>
            
        </div>
    )
}
