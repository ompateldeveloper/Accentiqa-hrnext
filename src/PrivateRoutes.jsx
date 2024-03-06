import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from './contexts/AuthContext'

export default function PrivateRoutes(){
    let {user} = useAuthContext();
    return(
        user ? <Outlet/> : <Navigate to="/signin"/>
    )
}