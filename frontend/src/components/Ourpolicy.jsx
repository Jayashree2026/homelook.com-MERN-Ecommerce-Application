import React from 'react'
import { IconCrown,IconTruck,IconRefresh} from '@tabler/icons-react';

const Ourpolicy = () => {
  return (
   <div className='flex flex-col sm:flex-row justify-around gap-12 py-20 text-center text-gray-700 text-xs sm:text-sm md:text-base'>
  {[
    {
      title: "Premium Quality",
      desc: "Crafted with the finest materials for long-lasting beauty.",
      icon: <IconCrown stroke={2} className='w-20 h-20 mb-3 text-purple-600' />
    },
    {
      title: "Fast Delivery",
      desc: "Get your favorite décor delivered quickly and safely.",
      icon: <IconTruck stroke={2} className='w-20 h-20 mb-3 text-purple-600' />
    },
    {
      title: "Easy Returns",
      desc: "Hassle-free return policy for a worry-free shopping experience.",
      icon: <IconRefresh stroke={2} className='w-20 h-20 mb-3 text-purple-600' />
    }
  ].map((item, index) => (
    <div key={index} className='flex flex-col items-center max-w-xs mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
      {item.icon}
      <p className='font-semibold text-lg mb-1'>{item.title}</p>
      <p className='text-gray-400 max-w-[200px]'>{item.desc}</p>
    </div>
  ))}
</div>

  )
}

export default Ourpolicy
