import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from "react-toastify";
import axios from "axios"
import { IconTrash } from '@tabler/icons-react';

const List = ({ token }) => {
  const [list,setList]=useState([])
  const currency = '₹'

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if(response.data.success){
        setList(response.data.products);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    if(!token){
      toast.error("Admin token missing")
      return
    }
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", { id }, { headers: { token } })
      if(response.data.success){
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-purple-200 text-left">
            <tr>
              <th className="px-3 py-2">Image</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="px-3 py-2">
                  <img className="w-16 h-12 object-cover rounded" src={item.image?.[0] || ''} alt={item.name} />
                </td>
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2">{item.category}</td>
                <td className="px-3 py-2">{currency}{item.price}</td>
                <td className="px-3 py-2">
                  <IconTrash stroke={2}  onClick={() => removeProduct(item._id)} className="text-red-600 hover:underline"/>
                </td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td colSpan="5" className="px-3 py-4 text-gray-500">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List
