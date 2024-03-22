import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as FormElements from '../../components/ui/FormElements'
import Button from '../../components/ui/Button';
import { useFormValidation } from '../../hooks/useFormValidation';
import {getUrl} from '../../components/Url'
export default function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const { dispatch } = useAuthContext();
    const url = getUrl();
    const initialState = {
        name: "",
        email: "",
        password: ""
    }
    const onSubmit = async(values) => {
        setIsLoading(true)
        await axios.post(url+'/api/v1/auth/signup',formData)
        .then((data)=>{
            localStorage.setItem('user', JSON.stringify(data.data))
            dispatch({ type: 'LOGIN', payload: data.data })
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error.response.data.message);
            setError(error)
            setIsLoading(false)
        })

    }
    function validate(values) {
        const errors = {};
        if (!values.name.trim()) {
            errors.name = "Name is required";
        } else if (values.name.length < 3) {
            errors.name = "Name must be at least 3 characters long";
        }
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

            <div className=' p-8 w-full ' >
                <div className="title m-2 my-4 text-4xl font-bold text-theme-text">Sign Up</div>
                <div className="m-2 font-semibold text-zinc-400">Enter your details to sign up!</div>
                <div className="h-px  m-2 my-3 bg-zinc-200"></div>
                <FormElements.Input value={formData.name} onChange={changeHandle} error={errors.name} className='m-2 my-4' label='Full Name' type='text' name='name' />
                <FormElements.Input value={formData.email} onChange={changeHandle} error={errors.email} className='m-2 my-4' label='Email' type='email' name='email' />
                <FormElements.Input value={formData.password} onChange={changeHandle} error={errors.password} className='m-2 my-4' label='Password' type='password' name='password' />

                {error&&<div className='m-2 text-white padding bg-theme-danger bg-opacity-80 p-2 rounded'>{error?.response?.data?.message}</div>}
                <Button className='m-2' disabled={isLoading} onClick={handleSubmit}>Sign Up</Button>
                <div className="not-user text-gray-400 m-2 my-3 text-sm">
                    Already a User? &nbsp;
                    <Link to={'/signin'} className="text-violet-500" >Sign In</Link>
                </div>
            </div>
            <div className="signin-left md:hidden bg-theme-1 h-full w-full">
                <video className='object-cover w-full h-full' src='https://video.wixstatic.com/video/11062b_6743da5900054f1f8e69f53302930a6a/720p/mp4/file.mp4' loop={true} onClick={(e) => e.target.play()} autoPlay={true} />
            </div>
        </div>
    )
}
