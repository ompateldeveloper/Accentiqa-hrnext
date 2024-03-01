import React from 'react'
import edit from "../assets/edit.png"

const Employeeposition = () => {
  return (
    <div>
        <h1 className='text-xl font-semibold ml-10 mt-5 '>Step 2: Employee Position</h1>
        <div className='flex flex-col gap-3  mt-10 ml-32'>

            <div className='flex' >
            <label className='text-[#282828] font-semibold '>Grade</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[136px] w-56'>
                <option value="" disable="true" hidden>Select Grade</option>
                </select><img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
                
            </div>
            <div className='flex' >
            <label className=' font-semibold '>Cost Center</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[96px] w-56'>
                <option value="" disable="true"  hidden>Select Cost Center</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label className=' font-semibold' id="required">Designation</label><select 
            className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm w-56 ml-[93px] '>
                <option value="" disable="true"  hidden>Select Designation</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label className=' font-semibold' id="required">Location</label><select className=' border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[118px] w-56'>
                <option value="" disable="true"  hidden>Select Location</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex '>
            <label className=' font-semibold' id="required">Division</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[122px] w-56'>
                <option value="" disable="true"  hidden>Select Division</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label className=' font-semibold '>Department</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[92px] w-56'>
                <option value="" disable="true"  hidden>Select Department</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label className=' font-semibold '>Attendance Shift</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[59px] w-56'>
                <option value="" disable="true"  hidden>Select Attendance Shift</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label className=' font-semibold '>Project</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[129px] w-56'>
                <option value="" disable="true"  hidden>Select Project</option>
                <option value="null">Null</option>
                
                </select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label className=' font-semibold '>Project Allocation Date</label><input type="date" className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[13px] w-56' placeholder='Project' />
            
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
            <div className='flex'>
            <label className=' font-semibold '>Attendance Shift</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[59px] w-56'>
                <option value="" disable="true"  hidden>Select Attendance Shift</option></select>
                <img className='w-4 h-4 ml-2 mt-1 cursor-pointer' src={edit} alt="edit"/>
            </div>
        </div>
        <div className='flex gap-1 mt-10 ml-10'>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow ">Previous</button>
        <button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded  ">Next</button>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">Cancel</button>
        </div>
    </div>
  )
}

export default Employeeposition