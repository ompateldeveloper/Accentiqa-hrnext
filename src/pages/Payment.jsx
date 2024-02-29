import React from 'react'

const Payment = () => {
  return (
    <div>
        <h1 className='text-xl font-bold ml-10 mt-5  '>Step 4: Payment Mode</h1>
        <div className='flex flex-col  gap-3 mt-10 ml-32'>

            <div className='flex' >
            <label>Payment Type</label><select className='border-zinc-300 border-2 rounded-md ml-[70px] w-56'>
                <option value="" disable="true" hidden>Select Payment Type</option>
                </select> 
            </div>
        </div>
            <div className='flex gap-1 mt-10 ml-10'>
            <button type='button' className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white '>Previous</button>
            <button type='button' className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white'>Next</button>
            <button type='button' className='border-cyan-600 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white'>Finish</button>
            <button type="reset" className='border-zinc-500 border-2 px-2 rounded-md hover:bg-cyan-600 hover:text-white'>Cancel</button>
        
        </div>
    </div>
  )
}

export default Payment