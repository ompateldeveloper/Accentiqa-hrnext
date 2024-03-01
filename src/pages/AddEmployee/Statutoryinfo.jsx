import React, { useState } from 'react'

const Statutoryinfo = () => {

    const [data,setData]=useState({
        pan:" ",aadhar:" ",passport:" "
    });
    const [error,setError]=useState({});

    let name,value;
    const handleInput =(e)=>{
        name = e.target.name;
        value = e.target.value;
        setData({...data,[name]:value});
    }

    

    const handleSubmit = (e) => {
      e.preventDefault();
     setError(Validation(data));
  }

      

  return (
    <div>
        <h1 className='text-xl font-bold ml-10 mt-5  '>Step 3: Statutory Info</h1>
        <div className='flex flex-col gap-3  mt-10 ml-32'>

            <div className='flex' >
            <label className=' font-semibold ' id="required">PAN Number</label><input className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[61px] pl-1 w-56' onChange={handleInput} type="text"  name='pan' placeholder='Enter PAN Number' />
            
            </div>
            <p> PAN is not valid</p> 
            {error.pan && <span className=' text-black'>{error.pan}</span>} 
            <div className='flex' >
            <label className=' font-semibold required ' id="required">Aadhar Number</label><input className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[40px] pl-1 w-56' name="aadhar" onChange={handleInput}  type="text" placeholder='Enter Aadhar Number' />
            </div>

            <div className='flex' >
            <label className=' font-semibold '>Passport Number</label><input className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[30px] pl-1 w-56' type="text" name="passport" onChange={handleInput} placeholder='Enter Passport Number' />
            </div>
        </div>
        <div className='flex gap-1 mt-10 ml-10'>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow ">Previous</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded  " onClick={handleSubmit}>Next</button>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">Cancel</button>
       </div>
    </div>
  )
}

export default Statutoryinfo