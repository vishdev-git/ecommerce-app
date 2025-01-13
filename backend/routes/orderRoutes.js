import express from 'express'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin features
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

// Payment features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)
orderRouter.post('/stripe',authUser, placeOrderStripe)

// User features
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter;