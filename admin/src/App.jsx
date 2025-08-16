import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from "./pages/Add"
import Orders from "./pages/Orders"
import List from "./pages/List"
import Login from './components/Login'
export const backendUrl= import.meta.env.VITE_BACKEND_URL
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token') : '');

  useEffect(()=>{
    localStorage.setItem('token', token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full min-h-[calc(100vh-64px)]">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r shadow-sm">
              <div className="p-4">
                <Sidebar />
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
              <div className="max-w-6xl mx-auto">
                <Routes>
                  <Route path='/add' element={<Add token={token} />} />
                  <Route path='/orders' element={<Orders token={token} />} />
                  <Route path='/list' element={<List token={token} />} />
                </Routes>
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  )
}

export default App
