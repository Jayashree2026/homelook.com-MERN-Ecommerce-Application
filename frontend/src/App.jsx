import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Verify from './pages/Verify'
import Placeorder from "./pages/Placeorder"
import Footer from "./components/Footer"

import SearchBar from './components/Searchbar'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/placeorder' element={<Placeorder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
