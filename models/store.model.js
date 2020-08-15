const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const storeSchema = new Schema(
	{
		storeID: {
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
			type: [Object],
			required: false
		},
		contact: {
			type: Object,
			required: false
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Store', storeSchema);