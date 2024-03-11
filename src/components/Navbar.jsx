import React from 'react'
import acqlogo from "../assets/logo.svg"
import { Bell, Cog, LogOut, MenuIcon, Settings, User } from 'lucide-react';
import {Menu ,FormControl,InputLabel,MenuItem,Select} from '@mui/material';
import { useAuthContext } from '../contexts/AuthContext';
import { useGlobalContext } from '../contexts/GlobalContext';
import * as FormElements from "../components/ui/FormElements";


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
                <input className='border-zinc-300 border-2  pl-4 rounded-3xl mr-10 text-xl h-10' placeholder='Search' type='search' />
                
                    {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Month</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            label="Month"
                            >
                            <MenuItem value="">
                                    <em>None</em>
                            </MenuItem>
                        
                        <MenuItem value="Jan 2024">Jan 2024</MenuItem>
                        <MenuItem value="Feb 2024"> Feb 2024 </MenuItem>
                        <MenuItem value="Mar 2024"> Mar 2024 </MenuItem>
                        <MenuItem value="Apr 2024"> Apr 2024 </MenuItem>
                        <MenuItem value="May 2024"> May 2024 </MenuItem>
                        <MenuItem value="Jun 2024"> Jun 2024 </MenuItem>
                        <MenuItem value= "Jul 2024"> Jul 2024 </MenuItem>
                        <MenuItem value= "Aug 2024"> Aug 2024 </MenuItem>
                        <MenuItem value= "Sep 2024"> Sep 2024 </MenuItem>
                        <MenuItem value= "Oct 2024"> Oct 2024 </MenuItem>
                        <MenuItem value= "Nov 2024"> Nov 2024 </MenuItem>
                        <MenuItem value= "Dec 2024"> Dec 2024 </MenuItem>
                        <MenuItem value= "2023-2024">2023-2024 </MenuItem>
                        <MenuItem value= "2022-2023">2022-2023 </MenuItem>
                        <MenuItem value= "2021-2022">2021-2022 </MenuItem>
                        <MenuItem value= "2020-2021">2020-2021 </MenuItem>
                        </Select>
                    </FormControl>
    */}
                <div className='flex flex-col-reverse gap-2 text-base  mt-5 ' >
                <FormControl  sx={{ m: 1, minWidth: 120 }} >
                <FormElements.Select  className='size-full p-2 border-grey border-2  rounded-lg'
                    // style={{"border-radius":"10px","padding-bottom":"5px"}}
                    
                      optionsArray={[
                        

                        // { value: "", title: "Month" },
                       
                        { value: "Jan 2024", title: "Jan 2024" },
                        { value: "Feb 2024", title: "Feb 2024" },
                        { value: "Mar 2024", title: "Mar 2024" },
                        { value: "Apr 2024", title: "Apr 2024" },
                        { value: "May 2024", title: "May 2024" },
                        { value: "Jun 2024", title: "Jun 2024" },
                        { value: "Jul 2024", title: "Jul 2024" },
                        { value: "Aug 2024", title: "Aug 2024" },
                        { value: "Sep 2024", title: "Sep 2024" },
                        { value: "Oct 2024", title: "Oct 2024" },
                        { value: "Nov 2024", title: "Nov 2024" },
                        { value: "Dec 2024", title: "Dec 2024" },
                        
                        { value: "2023 - 2024", title: "2023 - 2024" },
                        { value: "2022 - 2023", title: "2022 - 2023" },
                        { value: "2021 - 2022", title: "2021 - 2022" },
                        { value: "2020 - 2021", title: "2020 - 2021" },
                      ]}
                    //   name="billType"
                    //   value={formData.billType}
                    //   onChange={changeHandle}
                    //   error={errors.billType}
                    />
                    </FormControl>
                </div>


                <Bell />
                <Settings />
                <div onClick={handleClick} className="uppercase h-9 w-9 m-1 bg-theme-1 select-none flex items-center justify-center rounded-full text-white">
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