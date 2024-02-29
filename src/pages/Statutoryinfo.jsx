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
        const panValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    
        if (panValid.test(panNumber)) {
          setError('Valid PAN number');
        } else {
          setError('Invalid PAN number');
        }
      };

   /*   const handleSubmit =(e)=>{
        e.preventDefault()
       const validationErrors = {}
        if(!data.pan.trim()){
            validationErrors.pan ="Pan number is required"
        }else if(!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.pan))
        {
            validationErrors.pan ="Pan number is not valid"
        }
    } */

    // setError(validationErrors);

    // if(Object.keys(validationErrors).length === 0) {
    //     alert("success")
    // }

  return (
    <div>
        <h1 className='text-xl font-bold ml-10 mt-5  '>Step 3: Statutory Info</h1>
        <div className='flex flex-col  gap-3 mt-10 ml-32'>

            <div className='flex' >
            <label>PAN Number</label><input className='border-zinc-300 border-2 rounded-md ml-[60px] pl-1 w-56' onChange={handleInput} name='pan' type="text" placeholder='Enter PAN Number' />
               {error.pan && <span>{error.pan}</span>} 
            </div>
            <div className='flex' >
            <label>Aadhar Number</label><input className='border-zinc-300 border-2 rounded-md ml-[40px] pl-1 w-56' name="aadhar" onChange={handleInput}  type="text" placeholder='Enter Aadhar Number' />
            </div>

            <div className='flex' >
            <label>Passport Number</label><input className='border-zinc-300 border-2 rounded-md ml-[30px] pl-1 w-56' type="text" name="passport" onChange={handleInput} placeholder='Enter Passport Number' />
            </div>
        </div>
        <div className='flex gap-1 mt-10 ml-10'>
            <button type='button' className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white '>Previous</button>
            <button type='button' className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white' onClick={handleSubmit}>Next</button>
            <button type="reset" className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white'>Cancel</button>
        </div>
    </div>
  )
}

export default Statutoryinfo