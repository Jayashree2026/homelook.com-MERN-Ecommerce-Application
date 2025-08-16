import React from 'react'

const Newsletterbox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center bg-purple-50 py-14 rounded-md shadow-md max-w-xl mx-auto my-12 px-6'>
      <p className='text-black text-4xl font-bold mb-2'>Subscribe Now</p>
      <p className='text-gray-600 mb-6'>Get exclusive updates, offers, and inspirations.</p>
      <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row items-center gap-4 justify-center'>
        <input
          className='w-full sm:flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600'
          type="email"
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300 w-full sm:w-auto'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletterbox
