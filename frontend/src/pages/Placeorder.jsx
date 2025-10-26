import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import Carttotal from '../components/Carttotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from "axios"
import { toast } from 'react-toastify';



const Placeorder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartitems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext)

    const [formData, setFormdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
        phonenumber: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormdata(data => ({ ...data, [name]: value }))
    }

    const initPay = async (order) => {
        const loadScript = (src) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });
        };

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            toast.error("Razorpay SDK failed to load. Are you online?");
            return;
        }

        if (!window.Razorpay) {
            toast.error("Razorpay SDK not available.");
            return;
        }


        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Order Payment',
            description: 'Order payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } })
                    if (data.success) {
                        navigate('/orders')
                        setCartItems({})
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            let orderitems = []

            for (const items in cartitems) {
                for (const item in cartitems[items]) {
                    if (cartitems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartitems[items][item]
                            orderitems.push(itemInfo)
                        }
                    }
                }
            }
            let orderdata = {
                address: formData,
                items: orderitems,
                amount: getCartAmount() + delivery_fee,
                userId: token ? JSON.parse(atob(token.split('.')[1])).id : null,
            }
            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderdata, { headers: { token } })

                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                    }
                    else {
                        toast.error(response.data.message)
                    }
                    break;

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderdata, { headers: { token } })
                    if (responseStripe.data.success) {
                        const { session_url } = responseStripe.data
                        window.location.replace(session_url)
                    }
                    else {
                        toast.error(responseStripe.data.message)
                    }
                    break;

                case 'razorpay':
                    const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderdata, { headers: { token } })
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order);
                    }
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col sm:flex-row justify-between gap-6 sm:pt-14 min-h-[80px] px-4 sm:px-0 max-w-7xl mx-auto"
        >

            {/* Left Section */}
            <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
                <div className="text-3xl font-semibold mb-4 tracking-wide text-gray-900">
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>

                <div className="flex gap-4">
                    <input
                        required
                        onChange={onChangeHandler}
                        value={formData.firstName}
                        name='firstName'
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        type="text"
                        placeholder='First Name'
                    />
                    <input
                        required
                        onChange={onChangeHandler}
                        value={formData.lastName}
                        name='lastName'
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        type="text"
                        placeholder='Last Name'
                    />
                </div>

                <input
                    required
                    onChange={onChangeHandler}
                    value={formData.email}
                    name='email'
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    type="email"
                    placeholder='Type Email'
                />
                <input
                    required
                    onChange={onChangeHandler}
                    value={formData.address}
                    name='address'
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    type="text"
                    placeholder='Address'
                />

                <div className="flex gap-4">
                    <input
                        required
                        onChange={onChangeHandler}
                        value={formData.city}
                        name='city'
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        type="text"
                        placeholder='City'
                    />
                    <input
                        required
                        onChange={onChangeHandler}
                        value={formData.state}
                        name='state'
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        type="text"
                        placeholder='State'
                    />
                </div>

                <div className="flex gap-4">
                    <input
                        required
                        onChange={onChangeHandler}
                        value={formData.pincode}
                        name='pincode'
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        type="text"
                        placeholder='Pincode'
                    />
                    <input
                        required
                        onChange={onChangeHandler}
                        value={formData.country}
                        name='country'
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        type="text"
                        placeholder='Country'
                    />
                </div>

                <div className="flex gap-4">
                    <input
                        required
                        onChange={onChangeHandler}
                        value={formData.phonenumber}
                        name='phonenumber'
                        className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                        type="number"
                        placeholder='Phonenumber'
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="mt-10 sm:mt-0 flex flex-col w-full max-w-sm">
                <div className="mt-8 min-w-[320px]">
                    <Carttotal />
                </div>

                <div className="text-3xl font-semibold mb-5 mt-8 tracking-wide text-gray-900">
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                    <div
                        onClick={() => setMethod('stripe')}
                        className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                        <p className={`w-4 h-4 border-2 rounded-full ${method === 'stripe' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}></p>
                        Stripe
                    </div>

                    <div
                        onClick={() => setMethod('razorpay')}
                        className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                        <p className={`w-4 h-4 border-2 rounded-full ${method === 'razorpay' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}></p>
                        Razorpay
                    </div>

                    <div
                        onClick={() => setMethod('cod')}
                        className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                        <p className={`w-4 h-4 border-2 rounded-full ${method === 'cod' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}></p>
                        <p className='text-2xl font-semibold text-gray-900'>CASH ON DELIVERY</p>
                    </div>
                </div>

                <div className="w-full text-right mt-8">
                    <button
                        type="submit"
                        className="bg-black text-white text-base font-semibold py-3 px-8 rounded-md hover:bg-gray-900 transition"
                    >
                        PLACE ORDER
                    </button>
                </div>
            </div>
        </form>

    )
}

export default Placeorder
