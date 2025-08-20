import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className=' grid min-h-[calc(100vh-3.5rem)] place-items-center'>
    <div className='text-yellow-50 lg:text-4xl md:text-4xl text-2xl font-bold '>ERROR- 404 NOT FOUND
      <hr className='text-white opacity-80' />
      <br />
      <div className='flex gap-x-2'>
        <button
        onClick={()=> navigate("/")}
        >
      <FaArrowLeft  />
        </button>
      <p className='lg:text-2xl md:text-2xl text-xl font-bold'>Back to Home page</p>
      </div>
    </div>
   </div>
  )
}



