import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { IconSearch, IconUserCircle, IconShoppingCartPlus, IconMenuDeep, IconArrowLeftDashed } from '@tabler/icons-react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartitems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartitems({})
  }

  return (
    <div className='flex flex-col shadow-md'>
      <div className='flex flex-row items-center justify-between py-5 px-6 md:px-14 font-medium bg-gradient-to-br from-purple-300 via-white to-purple-50'>
        <Link to="/">
          <img src={assets.logo} className='w-66 h-auto' alt='homelook.com' />
        </Link>

        <ul className='hidden sm:flex gap-8 text-sm font-semibold text-gray-800'>
          <NavLink to="/" className='flex flex-col items-center gap-1 hover:text-blue-700'>
            <p>HOME</p>
            <hr className='w-2/4 border-none bg-blue-700 h-[2px] hidden' />
          </NavLink>
          <NavLink to="/about" className='flex flex-col items-center gap-1 hover:text-blue-700'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none bg-blue-700 h-[2px] hidden' />
          </NavLink>
          <NavLink to="/collections" className='flex flex-col items-center gap-1 hover:text-blue-700'>
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none bg-blue-700 h-[2px] hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-4 text-gray-700'>
          <IconSearch
            stroke={2}
            className='cursor-pointer hover:text-blue-600 transition'
            onClick={() => setShowSearch(true)}
          />
          

      
            <div className='group relative'>
              <IconUserCircle
                stroke={2}
                className='w-8 h-8 cursor-pointer hover:text-blue-600'
                onClick={() => token ? null : navigate('/login')}
              />
              {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 mt-3 rounded-md shadow-lg bg-white py-3 px-4 w-40 text-gray-700 z-50'>
                <div className='flex flex-col gap-2 w-36'>
                <p className='cursor-pointer hover:text-blue-600'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-blue-600'>My Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-blue-600'>Logout</p>
                </div>
              </div>}
            </div>
         

          <Link to="/cart" className='relative'>
            <IconShoppingCartPlus stroke={2} className='w-7 h-7 hover:text-blue-600' />
            <p className='absolute -right-2 -bottom-2 w-5 h-5 text-xs text-center bg-black text-white rounded-full leading-5'>{getCartCount()}</p>
          </Link>

          {/* Sidebar menu for responsiveness */}
          <button className="sm:hidden" onClick={() => setVisible(true)}>
            <IconMenuDeep stroke={2} className='w-10 h-10 text-gray-700 hover:text-blue-600' />
          </button>

          <div className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-all duration-300 overflow-auto z-50 ${visible ? 'w-64 p-6' : 'w-0 p-0'} `}>
            <div className='flex flex-col text-gray-700'>
              <button onClick={() => setVisible(false)} className='flex items-center gap-3 mb-8 text-lg font-semibold hover:text-blue-700'>
                <IconArrowLeftDashed stroke={2} className='w-6 h-6' />
                <span>Back</span>
              </button>
              <NavLink onClick={() => setVisible(false)} to="/" className="py-3 pl-2 hover:text-blue-700 font-semibold">HOME</NavLink>
              <NavLink onClick={() => setVisible(false)} to="/about" className="py-3 pl-2 hover:text-blue-700 font-semibold">ABOUT</NavLink>
              <NavLink onClick={() => setVisible(false)} to="/collections" className="py-3 pl-2 hover:text-blue-700 font-semibold">COLLECTIONS</NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr className='h-1 bg-blue-900' />
    </div>
  )
}

export default Navbar
