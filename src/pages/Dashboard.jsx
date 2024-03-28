import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddEmployee from './AddEmployee/Index'
import useMediaQuery from '../hooks/useMediaQuery'
import { cn } from '../lib/utils'
import ViewEmployee from './ViewEmployee/Index'
import BreakUp from './Payroll/BreakUp'
import PaySlip from './Payroll/PaySlip'
import Welcome from './Welcome'
import EmployeeSalaryCalculator from './ViewEmployee/EmployeeSalaryCalculator'
import EmployeeStatus from './ViewEmployee/EmployeeStatus'

export default function Dashboard() {
    const isLargeScreen = useMediaQuery('(max-width: 1024px)');

    return (
        <div>
           
            <div className="flex ">
                <Sidebar />
                <div className={cn("routeswrapper rounded-2xl shadow-xl bg-white w-full px-4",!isLargeScreen&&"ml-[240px]")}>
                    <Navbar />
                    <Routes>
                        <Route path='*' element={<Dashboard404/>} />
                        {/* <Route path='/' element={<Navigate to='/home' />} /> */}
                        <Route path="/" element={<Navigate to='home' />} />
                        <Route path="/home" element={<Welcome/>} />
                        <Route path='/add-employee' element={<AddEmployee/>} />
                        <Route path='/view-employee' element={<ViewEmployee/>} />
                        <Route path='/break-up' element={<BreakUp/>} />
                        <Route path='/pay-slip' element={<PaySlip/>} />
                        <Route path='/employee-salary' element={<EmployeeSalaryCalculator/>} />
                        <Route path='/employee-status' element={<EmployeeStatus/>} />
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
            dashboard 404
        </div>
    )
}