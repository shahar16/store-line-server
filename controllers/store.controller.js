//mongoose model
const Store = require("../models/store.model");
const Product = require('../models/product.model');
const CTRL_NAME = "store.controller";

exports.addStore = async (req, res, next) => {
	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			storeID,
			name,
			owner,
			desc,
			logo,
			contact,
		} = req.body;

		const storeExists = await Store.findOne({ storeID: storeID });
		if (storeExists) {
			throw new Error("Store already exists.");
		}

		const newStore = new Store({
			storeID: storeID,
			name: name,
			owner: owner,
			desc: desc,
			logo: logo,
			products: [],
			contact: contact
		});
		await newStore.save();
		return res.status(200).json({
			message: `Store: ${name} created successfully.`,
		});
	} catch (err) {
		err.message = err.message || "There was a problem with product creation";
		next(err);
	}
}

// TODO: add remove products functionality
exports.deleteStore = async (req, res, next) => {
	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}
		const {
			storeID,
			name
		} = req.body;

		const storeExists = await Store.findOne({ storeID: storeID });
		if (!storeExists) {
			throw new Error(`Store ${name} did not exists.`);
		} else {
			await Store.deleteOne({ storeID: storeID });

			return res.status(200).json({
				message: `Store: ${name} deleted successfully.`,
			});
		}
	} catch (err) {
		err.message = err.message || "There was a problem with product creation";
		next(err);
	}
}

exports.editStore = async (req, res, next) => {
	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			storeID,
			name,
			owner,
			desc,
			logo,
			contact,
		} = req.body;

		const storeExists = await Store.findOne({ storeID: storeID });
		if (!storeExists) {
			throw new Error(`Store ${name} did not exists.`);
		} else {
			await Store.updateOne({ storeID: storeID }, {
				name: name,
				owner: owner,
				desc: desc,
				logo: logo,
				contact: contact
			})

			return res.status(200).json({
				message: `Store: ${name} updated successfully.`,
			});
		}
	} catch (err) {
		err.message = err.message || "There was a problem with product creation";
		next(err);
	}
}

exports.addProductToStore = async (req, res, next) => {

	const fn = CTRL_NAME + "::addProductToStore";

	try {

		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		// if (!req.file) {
		// 	throw new Error("Image did not received.")
		// }

		const {
			sn,
			storeID
		} = req.body;

		const storeDBObj = await getStoreFromDb(storeID);
		const productDBObj = await Product.findOne({ sn: sn, storeID: storeID });

		if (!productDBObj) {
			next(new Error(`${fn}: product does not exist in DB!`));
		}

		const storeDetailsMsg = `storeID: ${storeDBObj.storeID}
		name: ${storeDBObj.name}`;

		const productDetailsMsg = `product name: ${productDBObj.name}
		product sn: ${productDBObj.sn}`;

		await storeDBObj.products.push(productDBObj);
		await storeDBObj.save();

		return res.status(200).json({
			message: `${fn}: new product added to store successfully!`
				+ storeDetailsMsg
				+ productDetailsMsg
		});
	}
	catch (err) {
		err.message = err.message ||
			`${fn} Failed to add new product to store!`;
		next(err);
	}
}

exports.DeleteSingleProduct = async (req, res, next) => {
	try {
		const {
			sn,
			name,
			desc,
			price,
			image,
			storeID
		} = req.body;
		const storeFromDb = await getStoreFromDb(storeID);
		const productItemExists = await Product.findOne({
			sn: sn, storeID: storeID
		});
		if (!productItemExists) {
			throw new Error("product isn't exist in store!");
		}
		await deleteProductFromStore(storeFromDb, sn);
		await deleteProductFromDB(storeFromDb, sn);
		return res.status(200).json({
			message: `Product: ${sn} deleted successfully from Store ${storeID} .`,
		});
	}
	catch (err) {
		err.message = err.message || "There was a problem with adding product to store";
		next(err);
	}
}

exports.deleteAllProductsFromStore = async (req, res, next) => {
	try {
		const storeID = req.body.storeID;
		const storeFromDb = await getStoreFromDb(storeID);
		console.log(storeFromDb.products);
		await storeFromDb.products.forEach(function (prodItem) {
			deleteProductFromStore(storeFromDb, prodItem.sn);
			deleteProductFromDB(storeFromDb, prodItem.sn);
		});
		return res.status(200).json({
			message: `All Products deleted successfully from Store ${storeID} .`,
		});
	}
	catch (err) {
		err.message = err.message || "There was a problem with deleting all products from store";
		next(err);
	}
}

async function getStoreFromDb(storeID) {
	if (!storeID) {
		throw new Error("store id is empty!");
	}
	const storeFromDb = await Store.findOne({ storeID: storeID });
	if (!storeFromDb) {
		throw new Error("store isn't found in DB");
	}
	return storeFromDb;
}

/*TODO: split to 2 functions: 
	1. deleteProductFromdb
	2. deleteProductFromStore
*/
async function deleteProductFromStore(storeFromDb, sn) {
	try {
		console.log("@@@ enter to deleteProductFromStore");
		console.log(`@@@ storeFromDb.storeID:
		${storeFromDb.storeID}
		sn:
		${sn}`);
		//TODO: add validation in case it cant delete a product
		const deletedProduct = await storeFromDb.products.pop(sn);
		await storeFromDb.save();
		return true;
	}
	catch (err) {
		err.message = err.message || "There was a problem in deleteProductFromStore";
		throw new Error(err);
	}
}

async function deleteProductFromDB(storeFromDb, sn) {
	console.log("enter: deleteProductFromDB");
	try {
		await Product.deleteOne({
			sn: sn,
			storeID: storeFromDb.storeID
		});
		return true;
	}
	catch (err) {
		err.message = err.message || "couldn't delete store from DB";
		throw new Error(err);
	}
}
