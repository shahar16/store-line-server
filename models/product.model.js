const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
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
    stock: {
      type: Object,
      required: false
    },
    label: {
      type: [String],
      required: false
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)