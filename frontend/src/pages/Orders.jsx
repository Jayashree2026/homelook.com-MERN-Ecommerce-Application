import React from 'react'
import { useState, useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {toast} from "react-toastify"
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

            const response = await axios.post(backendUrl + '/api/order/userorders', {}, {  headers:{token}  })



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
    useEffect(()=>{
        loadOrderData()
    },[token])
        return (
            <div className='border-t pt-16'>
                <div className='text-center text-3xl font-semibold py-2 text-gray-900'>
                    <Title text1={'MY'} text2={'ORDERS'} />
                </div>
                <div>
                    {
                        orderData.map((item, index) => (
                            <div key={index} className='py-4 border-t borer-b text-gray-700 flex flex-col'>
                                <div className='flex items-start gap-6 text-sm'>
                                    <img className='w-16 sm:w-20' src={item.image[0]} />
                                    <div>
                                        <p>{item.name}</p>
                                        <div>
                                            <p>{currency}{item.price}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Sizes:{item.sizes}</p>
                                        </div>
                                        <p>Date: <span>{new Date(item.date).toDateString()}</span></p>

                                        <p>Payment Method:<span>{item.paymentMethod}</span></p>
                                        
                                    
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <p className='min-w-2 h-2 bg-green-500 rounded-full'></p>
                                        <p>{item.status}</p>
                                    </div>
                                    <button onClick={loadOrderData} className='border px-4 text-sm'>Track Order</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }

export default Orders
