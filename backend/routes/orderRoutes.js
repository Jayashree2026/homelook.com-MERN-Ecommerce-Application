import express from 'express'
import {placeorder,placeorderRazorpay,placeorderStripe,allOrders,userOrders,updateStatus,verifyStripe, verifyRazorpay} from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from '../middleware/authUser.js'

const orderRouter =express.Router()
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

orderRouter.post('/place',authUser,placeorder)
orderRouter.post('/stripe',authUser,placeorderStripe)
orderRouter.post('/razorpay',authUser,placeorderRazorpay)

orderRouter.post('/userorders',authUser,userOrders)

orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)


export default orderRouter

//updateStatus,allOrders,userOrders,verifyRazorpay,verifyStripe,placeOrder,placeOrderRazorpay,placeOrderStripe