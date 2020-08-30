const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        cartID: {
            type: String,
            required: true
        },
        sn: {
            type: String,
            required: true
        },
        storeID: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        image: {
            type: [String],
            required: false
        },
        categoryName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('CartProduct', productSchema);