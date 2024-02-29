import React from 'react'
import edit from "../assets/edit.png"

const Employeeposition = () => {
  return (
    <div>
        <h1 className='text-xl font-bold ml-10 mt-5 '>Step 2: Employee Position</h1>
        <div className='flex flex-col  gap-3 mt-10 ml-32'>

            <div className='flex' >
            <label>Grade</label><select className='border-zinc-300 border-2 rounded-md ml-[130px] w-56'>
                <option value="" disable="true" hidden>Select Grade</option>
                </select><img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
                
            </div>
            <div className='flex' >
            <label>Cost Center</label><select className='border-zinc-300 border-2 rounded-md ml-[90px] w-56'>
                <option value="" disable="true"  hidden>Select Cost Center</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label>Designation</label><select className='border-zinc-300 border-2 rounded-md w-56 ml-[90px]'>
                <option value="" disable="true"  hidden>Select Designation</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label>Location</label><select className='border-zinc-300 border-2 rounded-md ml-[115px] w-56'>
                <option value="" disable="true"  hidden>Select Location</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label>Division</label><select className='border-zinc-300 border-2 rounded-md ml-[120px] w-56'>
                <option value="" disable="true"  hidden>Select Division</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label>Department</label><select className='border-zinc-300 border-2 rounded-md ml-[90px] w-56'>
                <option value="" disable="true"  hidden>Select Department</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label>Attendance Shift</label><select className='border-zinc-300 border-2 rounded-md ml-[60px] w-56'>
                <option value="" disable="true"  hidden>Select Attendance Shift</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
        </div>
        <div className='flex gap-1 mt-10 ml-10'>
            <button type='button' className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white '>Previous</button>
            <button type='button' className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white '>Next</button>
            <button type="reset" className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white'>Cancel</button>
        </div>
    </div>
  )
}

export default Employeeposition