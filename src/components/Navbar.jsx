import React from 'react'
import acqlogo from "../assets/logo.svg"
import { Bell, ChevronLeft, ChevronRight, Cog, LogOut, MenuIcon, Settings, User } from 'lucide-react';
import { Menu, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAuthContext } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/GlobalContext';
import * as FormElements from "../components/ui/FormElements";


export default function Navbar() {
    const { dispatch, user } = useAuthContext()
    const { sidebar, setSidebar,tabs } = useGlobalContext()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='fixed w-full h-20 flex justify-between  items-center z-20  bg-white bg-opacity-90 backdrop-blur-sm font-medium py-4  border-b'>
            <div className='flex items-center  mx-4 lg:ml-1 logo select-none' >
                <MenuIcon className='hidden lg:grid min-w-6 mx-4 ' onClick={() => { setSidebar(!sidebar) }} />
                <img className='h-10 text-start  ' src={acqlogo} alt='' />
                <div className='text-zinc-500 capitalize flex items-center'>
                   &nbsp; <ChevronRight/> {tabs}
                </div>
            </div>
            <div className='flex items-center gap-4 text-2xl text-zinc-700  mr-2'>
                <FormElements.Input className='rounded-md text-xl pb-0 md:hidden' placeholder='Search' type='search' />

                <Bell />
                <div onClick={handleClick} className="uppercase h-9 w-9 m-1 text-lg bg-theme-1 select-none flex items-center justify-center rounded-full text-white">
                    {user && user.name.split(' ').map((str, i) => { if (i < 2) return str[0] })}
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <div className='flex w-full items-center px-4' >
                        <div className="uppercase h-6 w-6 text-xs bg-theme-1 select-none flex items-center justify-center rounded-full text-white">
                            {user && user.name.split(' ').map((str, i) => { if (i < 2) return str[0] })}
                        </div>
                        {user && <div className='mx-2 max-w-24 truncate capitalize text-theme-1 font-semibold text-lg'>{user.name}</div>}
                    </div >
                    <hr className='my-2'/>
                    <MenuItem onClick={handleClose} >
                        <Settings className='text-theme-text w-5 mr-2' />
                        Setting
                    </MenuItem>
                    <MenuItem onClick={() => { dispatch({ type: 'LOGOUT' }) }}><LogOut className='text-theme-text w-5 mr-2' />Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}