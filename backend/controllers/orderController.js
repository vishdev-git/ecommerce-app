import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel";


// Placing Order using COD
const placeOrder = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:'Order Placed'})

    } catch (error) {
        console.log(error)
        res.json({success:false,nessage:error.nessage})
    }
}

// Placing Order using Stripe
const placeOrderStripe = async (req, res) => {
    try {



    } catch (error) {

    }
}

// Placing Order using Razorpay
const placeOrderRazorpay = async (req, res) => {
    try {



    } catch (error) {

    }
}

// All Orders data for admin panel
const allOrders = async (req, res) => {
    try {

    } catch (error) {

    }

}

// User Order data for frontend
const userOrders = async (req, res) => {
    try {

    } catch (error) {

    }

}

// Update order status from Admin panel
const updateStatus = async (req, res) => {
    try {

    } catch (error) {

    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }