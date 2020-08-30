const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product.model');


const cartSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        products: {
            type: [Object],
            required: false,
            cartProd: Object
        },
        totalSum: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);