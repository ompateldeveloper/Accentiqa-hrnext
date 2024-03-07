import React from 'react'
import acqlogo from "../assets/logo.svg"
import { Bell, Cog, LogOut, MenuIcon, Settings, User } from 'lucide-react';
import { Menu ,MenuItem} from '@mui/material';
import { useAuthContext } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/GlobalContext';

export default function Navbar() {
    const {dispatch,user}  = useAuthContext()
    const {sidebar,setSidebar} = useGlobalContext()
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
            <div className='flex items-start  mx-4 lg:ml-1 logo' >
                <MenuIcon className='hidden lg:grid min-w-6 m-2' onClick={()=>{setSidebar(!sidebar)}}/>
                <img className='h-10 text-start  ' src={acqlogo} alt='' />
            </div>
            <div className='flex items-center gap-4 text-2xl text-zinc-700  mr-2'>
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