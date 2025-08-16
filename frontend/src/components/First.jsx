import React from 'react'
import { assets } from '../assets/assets'

const First = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-300 rounded-lg shadow-lg m-10 overflow-hidden'>
      <div className='w-full sm:w-1/2 flex items-center justify-center py-14 sm:py-0 bg-gradient-to-tr from-purple-50 to-white'>
        <div className='text-center space-y-3 px-6'>
          <p className='text-lg font-semibold tracking-wide text-gray-700'>Enlighten your</p>
          <span className='inline-block w-2/4 mx-auto'>
            <hr className='border-4 border-gray-400 mb-2 rounded-full' />
            <p className='text-3xl font-extrabold tracking-widest text-blue-900'>ATMOSPHERE</p>
          </span>
          <p className='italic text-md text-gray-500'>With our <i>Best Decors</i></p>
        </div>
      </div>
      <img className='w-full sm:w-1/3 object-cover' src={assets.first} alt="Wall Decor" />
    </div>
  )
}

export default First
