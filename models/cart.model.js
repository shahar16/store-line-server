const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        products: {
            type: [Object],
            required: false,
        },
        totalSum: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        shippingAddress: {
            type: Object,
            required: false
        },
        paymentMethod: {
            type: Object,
            required: false
        },
        orderDate: {
            type: Date,
            required: false
        },
        payed: {
            type: Boolean,
            required: false
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);