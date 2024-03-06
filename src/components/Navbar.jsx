import React from 'react'
import acqlogo from "../assets/logo.svg"
import { Bell, Cog, LogOut, Settings, User } from 'lucide-react';
import { Menu ,MenuItem} from '@mui/material';
import { useAuthContext } from '../contexts/AuthContext';

export default function Navbar() {
    const {dispatch,user}  = useAuthContext()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='fixed w-full h-20 flex justify-between  items-center z-20  bg-gray-50 font-medium py-4  border-b'>
            <div className='flex items-center gap-2 mx-4 bg-blue-500 p-2 rounded-md' >
                <img className='h-8' src={acqlogo} alt='' />
                <div className="logo-name text-2xl text-white  font-serif font-bold">ACCENTIQA</div>
            </div>
            <div className='text-2xl'>
                <h1>Add Employee</h1>
            </div>
            <div className='flex items-center gap-4 text-2xl text-zinc-700 ml-60 mr-2'>
                <input className='border-zinc-300 border-2  pl-4 rounded-full mr-10 text-xl h-10' placeholder='Search' type='search' />
                <Bell />
                <Settings />
                <User onClick={handleClick} />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    {user &&<div className='mx-4 capitalize text-theme-1 font-semibold text-lg'>{user.name}</div>}
                    <MenuItem onClick={handleClose} >
                        <Cog className='text-theme-text w-5 mr-2'/>
                        Setting
                    </MenuItem>
                    <MenuItem onClick={()=>{dispatch({type:'LOGOUT'})}}><LogOut className='text-theme-text w-5 mr-2'/>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}