import React from 'react'


const Form = () => {
  return (
    <div className='flex  justify-center '>
      <div className='w-3/4 border rounded-md border-gray-200 my-8 p-8 shadow-2xl '>
        <form className='flex flex-col '>
            <input 
            type="text" 
            placeholder='Enter' 
            className='border border-gray-200 p-4 rounded-md w-full my-4'/>

            <button 
            className='p-2 cursor-pointer text-white font-bold bg-emerald-500 hover:bg-emerald-600 rounded-md border border-white w-full'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Form