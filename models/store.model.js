const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Product = require('./product.model');


const storeSchema = new Schema(
	{
		storeId: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		owner: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		},
		logo: {
			type: String,
			required: true
		},
		products: {
			type: [String],
			required: false
		},
		contact: {
			type: Object,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Store', storeSchema);