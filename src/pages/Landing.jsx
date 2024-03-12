import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './Auth/Signin'
import Button from '../components/ui/Button'

export default function Landing() {
    return (
        <div><Link to="/dashboard"><Button>go to dashboard</Button></Link></div>
    )
}
