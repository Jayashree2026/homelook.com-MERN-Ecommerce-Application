import React from 'react'
import { NavLink } from "react-router-dom"

import { IconLocation } from '@tabler/icons-react';

const Sidebar = () => {
  return (<div className="min-h-screen border-r bg-gradient-to-br from-purple-100 via-white to-purple-50 bg-white shadow-sm px-4 py-6">
  <div className="flex flex-col gap-4 gap-y-3 text-sm font-medium text-purple-700">
    <NavLink 
      className="rounded-lg w-full h-15 flex flex-row gap-1  px-4 py-2 border border-purple-300 hover:border-purple-500 hover:bg-purple-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-400 outline-none transition"
      to="/add"
    >
      <IconLocation stroke={2}  className="w-5 h-5"  alt="Add" />
      <p className="hidden md:block ">Add Items</p>
    </NavLink>

    <NavLink 
      className="rounded-lg h-15 w-full flex flex-row px-4 gap-1 py-2 border border-purple-300 hover:border-purple-500 hover:bg-purple-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-400 outline-none transition" 
      to="/list"
    >
      <IconLocation stroke={2}  className="w-5 h-5"  alt="List" />
      <p className="hidden md:block">List Items</p>
    </NavLink>

    <NavLink 
      className="rounded-lg h-15 w-full flex flex-row px-4 gap-1 py-2 border border-purple-300 hover:border-purple-500 hover:bg-purple-100 focus:border-purple-600 focus:ring-2 focus:ring-purple-400 outline-none transition"
      to="/orders"
    >
     <IconLocation stroke={2}  className="w-5 h-5"  alt="Orders" />
      <p className="hidden md:block">Orders</p>
    </NavLink>
  </div>
</div>
  )
}

export default Sidebar
