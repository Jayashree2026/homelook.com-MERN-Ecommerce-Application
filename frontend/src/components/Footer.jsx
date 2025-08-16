import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <footer className='bg-purple-100 text-gray-700 mt-40'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm'>

        <div>
          <img src={assets.logo} className='mb-6 w-36' alt='homelook logo' />
          <p className='max-w-md text-gray-500 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit sequi voluptates fugit ipsum vitae rerum dolorum aliquid. Quam distinctio placeat aliquid cum dicta ut pariatur sit repellat obcaecati reiciendis.
          </p>
        </div>

        <div>
          <p className='text-xl text-gray-900 font-semibold mb-4'>COMPANY</p>
          <ul className='flex flex-col gap-3'>
            <li className='cursor-pointer hover:text-blue-600 transition'>Home</li>
            <li className='cursor-pointer hover:text-blue-600 transition'>About us</li>
            <li className='cursor-pointer hover:text-blue-600 transition'>Delivery</li>
            <li className='cursor-pointer hover:text-blue-600 transition'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl text-gray-900 font-semibold mb-4'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li>Homelook.com</li>
            <li>homelook@mail.com</li>
            <li>+1515151515</li>
          </ul>
        </div>

      </div>

      <div className='border-t border-gray-300'>
        <div className='max-w-7xl mx-auto px-6 sm:px-10 py-6 text-center text-xs text-gray-500 select-none'>
          &copy; 2025 homelook.com. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
