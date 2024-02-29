import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom'

import AddEmployee from './AddEmployee/Index'

export default function Dashboard() {
    return (
        <div>
            <Navbar />

            <div className="flex ">
                <Sidebar />

                <div className="routeswrapper ml-80 mt-20 p-2 w-full">
                    <Routes>
                        <Route path='*' element={<Dashboard404/>} />
                        <Route path='/' element={<>
                            <AddEmployee/>
                        </>} />
                        <Route path='/add-employee' element={<>addEmployee</>} />
                        <Route path='/employee-details' element={<EmployeeDetails/>} />
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
            You are on wrong route , be real okay
        </div>
    )
}