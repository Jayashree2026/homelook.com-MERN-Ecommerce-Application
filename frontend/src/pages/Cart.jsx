import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Carttotal from '../components/Carttotal';
import { IconTrash } from '@tabler/icons-react';

const Cart = () => {
    const { products, currency, cartitems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartdata] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            for (const items in cartitems) {
                for (const item in cartitems[items]) {
                    if (cartitems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartitems[items][item]
                        })
                    }
                }
            }
            setCartdata(tempData);
        }
        
    }, [cartitems, products])



    return (
        <div className='border-t pt-14 px-6 sm:px-16'>
            <div className='text-2xl font-semibold mb-6'>
                <Title text1={'YOUR '} text2={'Cart'} />
            </div>

            <div className='space-y-6'>
                {
                    cartData.map((item, index) => {
                        const productdata = products.find((product) => product._id === item._id)
                        return (
                            <div
                                key={index}
                                className='py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_1fr_0.5fr] items-center gap-6'
                            >
                                <div className='flex items-start gap-6'>
                                    <img
                                        className='w-16 sm:w-20 rounded-md object-cover'
                                        src={productdata.image[0]}
                                        alt={productdata.name}
                                    />
                                    <div>
                                        <p className='text-sm sm:text-lg font-medium text-gray-900'>{productdata.name}</p>
                                        <div className='flex items-center gap-5 mt-2 text-gray-600'>
                                            <p>{currency}{productdata.price.toFixed(2)}</p>
                                            <p className='px-3 py-1 bg-gray-100 rounded-md text-xs sm:text-sm'>{item.size}</p>
                                        </div>
                                    </div>
                                </div>

                                <input
                                    onChange={(e) =>
                                        e.target.value === '' || e.target.value === '0'
                                            ? ''
                                            : updateQuantity(item._id, item.size, Number(e.target.value))
                                    }
                                    className='border border-gray-300 rounded-md max-w-[60px] px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    type="number"
                                    min={1}
                                    defaultValue={item.quantity}
                                />

                                <IconTrash
                                    onClick={() => updateQuantity(item._id, item.size, 0)}
                                    className='w-5 sm:w-6 cursor-pointer hover:opacity-70 transition-opacity'
                                    src={assets.symbol}
                                    alt="Remove item"
                                    title="Remove item"
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div className='flex justify-end my-20 mr-4 sm:mr-20'>
                <div className='w-full sm:w-[450px]'>
                    <Carttotal />
                    <div className='w-full text-right'>
                        <button
                            onClick={() => navigate('/placeorder')}
                            className='mt-10 bg-black text-white text-sm sm:text-base font-semibold rounded-md px-6 py-3 hover:bg-gray-800 transition-colors'
                        >
                            PROCEED TO BUY
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart
