import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import {ShopContext} from "../context/ShopContext"
import axios from "axios"
import {toast} from "react-toastify"

const Login = () => {
     const [currentState, setCurrentState] = useState('Sign Up');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
        } else {
            toast.error(response.data.message)
        }
      }else{
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
        } else {
            toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
}
useEffect(()=>{
    if(token){
        navigate('/')
    }

},[token])


    return (
        <form
  onSubmit={onSubmitHandler}
  className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-purple-900 bg-white p-6 rounded-2xl shadow-md"
>
  <div className="inline-flex items-center gap-2 mb-2 mt-6">
    <p className="text-3xl font-semibold">{currentState}</p>
    <hr className="border-none h-[1.5px] bg-purple-400 w-8" />
  </div>

  {currentState === "Login" ? (
    ""
  ) : (
    <input
      onChange={(e) => setName(e.target.value)}
      value={name}
      type="text"
      className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-50"
      placeholder="Name"
    />
  )}

  <input
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    type="email"
    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-50"
    placeholder="Email"
    required
  />

  <input
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    type="password"
    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-purple-50"
    placeholder="Password"
    required
  />

  <div className="text-sm text-purple-700 space-y-1 gap-y-3">
    <p className="cursor-pointer hover:text-purple-500 transition">
      forgot your password?
    </p>
    {currentState === "Login" ? (
      <p
        onClick={() => setCurrentState("Sign Up")}
        className="cursor-pointer hover:text-purple-500 transition"
      >
        Create Account
      </p>
    ) : (
      <p
        onClick={() => setCurrentState("Login")}
        className="cursor-pointer hover:text-purple-500 transition"
      >
        Login
      </p>
    )}
  </div>

  <button className="w-full py-2 mt-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
    {currentState === "Login" ? "Sign In" : "Sign Up"}
  </button>
</form>

    )
}


export default Login


