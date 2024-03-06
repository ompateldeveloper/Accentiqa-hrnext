import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './Auth/Signin'

export default function Landing() {
    return (
        <div><Link to="/dashboard">go to dashboard</Link></div>
    )
}
