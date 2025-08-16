import React, { useState } from 'react'

import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { IconPhotoScan } from '@tabler/icons-react';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Lamps')
  const [subcategory, setSubcategory] = useState('Modern')
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("Admin token missing")
      return
    }
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subcategory", subcategory)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setSizes([])
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  const toggleSize = (s) => {
    setSizes(prev => prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s])
  }

  return (<div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-semibold mb-4 text-purple-800">Add Product</h2>
    <form onSubmit={onSubmitHandler} className="space-y-6">
      <div>
        <p className='mb-2 font-medium text-purple-700'>Upload images</p>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map(n => {
            const file = n === 1 ? image1 : n === 2 ? image2 : n === 3 ? image3 : image4
            return (
              <label key={n} htmlFor={`image${n}`} className="cursor-pointer">
                <div className="w-28 h-28 bg-purple-50 rounded-md flex items-center justify-center overflow-hidden border border-black">
                  {file
                    ? <img src={URL.createObjectURL(file)} alt={`img${n}`} className="object-cover w-full h-full" />
                    : <IconPhotoScan stroke={2}   alt="placeholder" className="w-12 h-12 opacity-40" />}
                </div>
                <input id={`image${n}`} type="file" accept="image/*" hidden onChange={(e) => {
                  const f = e.target.files?.[0]
                  if (n === 1) setImage1(f)
                  if (n === 2) setImage2(f)
                  if (n === 3) setImage3(f)
                  if (n === 4) setImage4(f)
                }} />
              </label>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-purple-700">Product name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Type product name" className="w-full border rounded px-3 py-2 focus:ring focus:ring-purple-200 border-black" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-purple-700">Price</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="0" className="w-full border rounded px-3 py-2 focus:ring focus:ring-purple-200 border-black" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 text-purple-700">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" placeholder="Short description" className="w-full border rounded px-3 py-2 focus:ring focus:ring-purple-200 border-black"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-purple-700">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded px-3 py-2 border-black">
            <option>Lamps</option>
            <option>Sculptures</option>
            <option>Wall Frames</option>
            <option>Plants</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-purple-700">Subcategory</label>
          <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)} className="w-full border rounded px-3 py-2 border-black">
            <option>Modern</option>
            <option>Classic</option>
            <option>Abstract</option>
          </select>
        </div>
      </div>

      <div>
        <p className="mb-2 font-medium text-purple-700">Sizes</p>
        <div className="flex gap-3">
          {['A1', 'A2', 'A3'].map(s => (
            <button
              type="button"
              key={s}
              onClick={() => toggleSize(s)}
              className={`px-3 py-2 rounded ${sizes.includes(s) ? 'bg-purple-200' : 'bg-purple-50'} border-black transition`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition">Add product</button>
      </div>
    </form>
  </div>
  )
}

export default Add
