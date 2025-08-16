import React, { useState } from 'react'
import { backendUrl } from '../App';
import axios from "axios"
import { toast } from "react-toastify"

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault(); 
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
      if (response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50 px-4">
  <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl px-10 py-8 w-full max-w-md border border-purple-200">
    <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center tracking-wide">
      Welcome Back 👑
    </h1>
    <p className="text-center text-gray-600 mb-8">
      Please sign in to continue to your <span className="text-purple-700 font-medium">Royal Dashboard</span>
    </p>
    
    <form onSubmit={onSubmitHandler} className="space-y-5">
      <div>
        <label className="text-sm font-semibold text-purple-700 mb-1 block">
          Username
        </label>
        <input  
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          className="rounded-lg w-full px-4 py-2 border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none transition" 
          type="text" 
          placeholder="Enter your username" 
          required
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-purple-700 mb-1 block">
          Secret Key
        </label>
        <input 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className="rounded-lg w-full px-4 py-2 border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none transition" 
          type="password" 
          placeholder="Enter your secret key" 
          required
        />
      </div>

      <button 
        className="mt-4 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold shadow-md hover:from-purple-700 hover:to-purple-900 transition transform hover:scale-[1.02]" 
        type="submit"
      >
        Enter the Realm
      </button>
    </form>

    <p className="text-xs text-center text-gray-500 mt-6">
      © 2025 homelook.com. All Rights Reserved.
    </p>
  </div>
</div>

  )
}

export default Login
