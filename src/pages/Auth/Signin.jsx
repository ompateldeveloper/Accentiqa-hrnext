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
    const { dispatch } = useAuthContext()
    const url = getUrl()
    const initialState = {
        email: "",
        password: ""
    }
    const onSubmit = async(values) => {
        await axios.post(url+'/api/v1/auth/signin',formData)
        .then((data)=>{
            localStorage.setItem('user', JSON.stringify(data.data))
            dispatch({ type: 'LOGIN', payload: data.data })
        })
        .catch((error)=>{
            
            console.log(error);
        })
        .finally(()=>{
            console.log('finally');
            setIsLoading(false)
        })

        setIsLoading(true)
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
        <div className=' grid grid-cols-2 md:flex overflow-hidden h-screen'>
            <div className="signin-left  bg-theme-1 h-full w-full md:hidden">
                <video className='object-cover w-full h-full' src='https://video.wixstatic.com/video/11062b_6743da5900054f1f8e69f53302930a6a/720p/mp4/file.mp4' loop={true} onClick={(e) => e.target.play()} autoPlay={true} />
            </div>
            <div className=' p-8 w-full ' >
                <div className="title m-2 my-4 text-4xl font-bold text-theme-text">Sign In</div>
                <div className="m-2 font-semibold text-zinc-400">Enter your email and password to sign in!</div>
                <div className="h-px  m-2 my-3 bg-zinc-200"></div>
                <FormElements.Input value={formData.email} onChange={changeHandle} error={errors.email} className='m-2 my-4' label='Email' type='email' name='email' />
                <FormElements.Input value={formData.password} onChange={changeHandle} error={errors.password} className='m-2 my-4' label='Password' type='password' name='password' />

               
                <Button className='m-2' disabled={isLoading} onClick={handleSubmit}>Sign In</Button>
                <div className="not-user text-gray-400 m-2 my-3 text-sm">
                    Not a User? &nbsp;
                    <Link to={'/signup'} className="text-violet-500" >Sign Up</Link>
                </div>
            </div>
            
        </div>
    )
}
