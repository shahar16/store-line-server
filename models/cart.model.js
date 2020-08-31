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
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);