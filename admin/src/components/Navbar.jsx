import React from 'react'
import { assets } from "../assets/assets"

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-purple-100 via-white to-purple-50 shadow-md px-6 py-4 border-b border-purple-200">
  <div className="flex items-center gap-3">
    <img className="w-80 h-20 object-contain" src={assets.logo} alt="Logo" />
    <b className="text-purple-800 text-xl font-bold tracking-wide"> Admin Panel 👑</b>
  </div>
  <button 
    onClick={() => setToken('')} 
    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-5 rounded-lg shadow transition transform hover:scale-[1.05]"
  >
    Logout
  </button>
</div>
  )
}

export default Navbar
