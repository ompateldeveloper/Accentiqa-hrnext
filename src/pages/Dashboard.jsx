import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddEmployee from './AddEmployee/Index'
import useMediaQuery from '../hooks/useMediaQuery'
import { cn } from '../lib/utils'

export default function Dashboard() {
    const isLargeScreen = useMediaQuery('(max-width: 1024px)');

    return (
        <div>
            <Navbar />

            <div className="flex ">
                <Sidebar />
                <div className={cn("routeswrapper mt-20 p-2 w-full",!isLargeScreen&&"ml-80")}>
                    <Routes>
                        <Route path='*' element={<Dashboard404/>} />
                        <Route path='/' element={<>
                            <AddEmployee/>
                        </>} />
                        <Route path='/add-employee' element={<>addEmployee</>} />
                    </Routes>
                </div>

            </div>
        </div>
    )
}

function Dashboard404() {
    useEffect(() => {

    })
    return (
        <div className='container'>
        </div>
    )
}