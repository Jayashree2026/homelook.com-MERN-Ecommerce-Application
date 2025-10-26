import React from 'react'
import { assets } from '../assets/assets'

const First = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-purple-200/40 rounded-3xl shadow-2xl m-6 sm:m-10 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-purple-100/60 backdrop-blur-md transition-all duration-700 hover:shadow-purple-300/40 hover:scale-[1.01]'>

      {/* Left Section - Text */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0 bg-gradient-to-br from-white/90 via-purple-50/60 to-purple-100/30 relative overflow-hidden'>

        {/* Soft Glow Overlay */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.15),_transparent_60%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.15),_transparent_60%)]'></div>

        {/* Text Content */}
        <div className='relative text-center space-y-5 px-8 z-10'>
          <p className='font-bold tracking-wide text-4xl sm:text-5xl text-purple-900 drop-shadow-sm'>
            Enlighten your
          </p>

          <div className='relative inline-block'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-700 rounded-full blur-md opacity-40 animate-pulse'></div>
            <p className='relative text-5xl sm:text-6xl font-extrabold tracking-widest text-black drop-shadow-lg'>
              ATMOSPHERE
            </p>

          </div>

          <p className='italic text-lg sm:text-xl text-purple-700/80 font-medium'>
            With our <span className='font-semibold text-purple-900'>Best Decors</span>
          </p>


        </div>
      </div>

      {/* Right Section - Image */}
      <div className='w-full sm:w-1/2 overflow-hidden relative'>
        <img
          className='w-full h-72 sm:h-96 object-cover transform hover:scale-110 transition-transform duration-700 ease-out'
          src={assets.first}
          alt="Wall Decor"
        />
        {/* Overlay Gradient on Image */}
        <div className='absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent'></div>
      </div>


    </div>
  )
}

export default First