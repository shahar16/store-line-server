const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product.model');


const cartSchema = new Schema(
    {
        cartID: {
            type: String,
            required: true
        },
        cartProducts: {
            type: [Object],
            required: false
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);