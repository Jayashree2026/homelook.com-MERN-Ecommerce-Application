import React from 'react'
import { useState, useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from "react-toastify"
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
const Orders = () => {
    const { backendUrl, token, currency } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null;
            }

            const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })



            if (response.data.success) {
                let allOrdersItem = [];
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status;
                        item['payment'] = order.payment;
                        item['paymentMethod'] = order.paymentMethod;
                        item['date'] = order.date;
                        allOrdersItem.push(item);
                    });
                });

                setOrderData(allOrdersItem.reverse());
            }

        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        loadOrderData()
    }, [token])
    return (
        <div className='border-t border-purple-200 pt-16 pb-10 pl-5 pr-5'>
            <div className='text-center text-4xl font-semibold py-4 text-purple-900'>
                <Title text1={'MY'} text2={'ORDERS'} />
            </div>

            <div className='space-y-6'>
                {orderData.map((item, index) => (
                    <div
                        key={index}
                        className='bg-white/80 hover:bg-purple-50 border border-purple-100 rounded-2xl shadow-md hover:shadow-purple-200 transition-all duration-300 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6'
                    >
                        {/* Product Info */}
                        <div className='flex items-start gap-5 text-sm text-gray-700'>
                            <img
                                className='w-20 h-20 object-cover rounded-xl border border-purple-200 shadow-sm'
                                src={item.image[0]}
                                alt={item.name}
                            />

                            <div className='space-y-1'>
                                <p className='text-lg font-semibold text-purple-900'>{item.name}</p>
                                <p className='text-gray-700'><span className='font-semibold'>Price:</span> ₹{item.price}</p>
                                <p className='text-gray-700'><span className='font-semibold'>Quantity:</span> {item.quantity}</p>
                                <p className='text-gray-700'><span className='font-semibold'>Size:</span> {item.sizes}</p>
                                <p className='text-gray-500 text-sm'>
                                    <span className='font-medium text-purple-700'>Date:</span> {new Date(item.date).toDateString()}
                                </p>
                                <p className='text-gray-500 text-sm'>
                                    <span className='font-medium text-purple-700'>Payment:</span> {item.paymentMethod}
                                </p>
                            </div>
                        </div>

                        {/* Order Status */}
                        <div className='flex flex-col sm:items-end gap-3'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 bg-green-500 rounded-full shadow-sm'></div>
                                <p className='text-sm font-semibold text-green-700'>{item.status}</p>
                            </div>

                            <button
                                onClick={loadOrderData}
                                className='mt-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-full shadow-md hover:shadow-purple-400/40 hover:scale-105 transition-transform duration-300'
                            >
                                Track Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
