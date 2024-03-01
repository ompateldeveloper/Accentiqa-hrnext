import React from 'react'

const Payment = () => {
  return (
    <div>
        <h1 className='text-xl font-bold ml-10 mt-5  '>Step 4: Payment Mode</h1>
        <div className='flex flex-col  gap-3 mt-10 ml-32'>

            <div className='flex' >
            <label className=' font-semibold '>Payment Type</label><select className='border-zinc-500 hover:border-[#5872E3] border-2 rounded-sm ml-[70px] w-56'>
                <option value="" disable="true" hidden>Select Payment Type</option>
                </select> 
            </div>
        </div>
            <div className='flex gap-1 mt-10 ml-10'>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow ">Previous</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded  ">Next</button>
        <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded">Finish</button>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">Cancel</button>
        
        </div>
    </div>
  )
}

export default Payment