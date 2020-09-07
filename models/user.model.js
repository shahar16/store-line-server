const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    firstName:              {
      type:     String,
      required: true
    },
    lastName:               {
      type:     String,
      required: true
    },
    email:                  {
      type:     String,
      required: true
    },
    password:               {
      type:     String,
      required: true
    },
    ownedStores:            {
      type:      [Object], //type: [Store]
      required:  false,
      storeName: String,
      storeID:   String
    },
    cartID:                 {
      type:    String,
      require: false
    },
    defaultShippingAddress: {
      type:     Object,
      required: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)