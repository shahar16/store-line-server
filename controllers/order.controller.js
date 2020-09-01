const CTRL_NAME = "order.controller";

const Cart = require('../models/cart.model');
const User = require('../models/user.model');

exports.placeOrder = async (req, res, next) => {
    const fn = CTRL_NAME + "::placeOrder";
    try {
        const {
            id,
            shippingAddress,
            paymentMethod
        } = req.body;

        const email = req.userEmail;
        const cartDBObj = await Cart.findOne({ id: id });

        if (!cartDBObj) {
            next(new Error(`${fn}: failed to locate cart for ${email}`));
        }

        await cartDBObj.updateOne({
            email: email,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod,
            payed: true,
            orderDate: new Date()
        })

        //payment functionality

        const userDBObj = await User.findOne({ email: email });

        if (!userDBObj) {
            next(new Error(`${fn}: failed to locate ${email}!`));
        }

        await userDBObj.updateOne({
            cartID: ""
        });

        return res.status(200).json({
            message: `${fn}: order no. ${cartDBObj.id} has placed!`
        });

    } catch (err) {
        err.message = err.message ||
            `${fn}: Failed to place order!`;

        next(new Error(err));
    }
}

exports.getOrder = async (req, res, next) => {
    const fn = CTRL_NAME + "::getOrderSummary";

    try {
        const { id } = req.query;

        if (!id) {
            next(new Error(`${fn}: cart ID wasn't attached to request!`))
        }

        const orderDBObj = await Cart.findOne({ id: id, payed: true });

        if (!orderDBObj) {
            next(new Error(`${fn}: failed to fetch order from db!`));
        }
        console.log(orderDBObj);

        return res.send(orderDBObj);
    } catch (err) {
        err.message = err.message ||
            `${fn}: Failed to get orderSummary!`;

        next(new Error(err))
    }
}

exports.getOrdersSummary = async (req, res, next) => {
    const fn = CTRL_NAME + "::getOrderSummary";

    try {
        const email = req.userEmail;

        const ordersDBObj = await Cart.find({ email: email, payed: true });

        if (!ordersDBObj) {
            next(new Error(`${fn}: failed to fetch orders from db!`));
        }
        console.log(ordersDBObj);

        return res.send(ordersDBObj);
    } catch (err) {
        err.message = err.message ||
            `${fn}: Failed to get orderSummary!`;

        next(new Error(err))
    }
}