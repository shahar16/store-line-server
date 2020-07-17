//mongoose model
const Store = require("../models/store.model");
const Product = require('../models/product.model');

exports.addStore = async (req, res, next) => {
	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			storeId,
			name,
			owner,
			desc,
			logo,
			contact,
		} = req.body;

		const storeExists = await Store.findOne({ storeId: storeId });
		if (storeExists) {
			throw new Error("Store already exists.");
		}

		const newStore = new Store({
			storeId: storeId,
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
			storeId,
			name
		} = req.body;

		const storeExists = await Store.findOne({ storeId: storeId });
		if (!storeExists) {
			throw new Error(`Store ${name} did not exists.`);
		} else {
			await Store.deleteOne({ storeId: storeId });

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
			storeId,
			name,
			owner,
			desc,
			logo,
			contact,
		} = req.body;

		const storeExists = await Store.findOne({ storeId: storeId });
		if (!storeExists) {
			throw new Error(`Store ${name} did not exists.`);
		} else {
			await Store.updateOne({ storeId: storeId }, {
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

exports.addProduct = async (req, res, next) => {
	try {
		const {
			sn,
			name,
			desc,
			price,
			image,
			storeId
		} = req.body;
		const storeFromDb = await getStoreFromDb(storeId);
		const productItemExists = await Product.findOne({ sn: sn, storeId: storeId });
		if (productItemExists) {
			throw new Error("product already exist in store!");
		}
		const newStoreProduct = new Product({
			name: name,
			desc: desc,
			price: price,
			image: image,
			sn: sn,
			storeId: storeId
		});
		await newStoreProduct.save();
		await storeFromDb.products.push(sn);
		await storeFromDb.save();
		return res.status(200).json({
			message: `Product: ${sn} added to Store ${storeId} successfully.`,
		});
	}
	catch (err) {
		err.message = err.message || "There was a problem with adding product to store";
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
			storeId
		} = req.body;
		const storeFromDb = await getStoreFromDb(storeId);
		const productItemExists = await Product.findOne({
			sn: sn, storeId: storeId
		});
		if (!productItemExists) {
			throw new Error("product isn't exist in store!");
		}
		await deleteProductFromDbAndStore(storeFromDb, sn);
		return res.status(200).json({
			message: `Product: ${sn} deleted successfully from Store ${storeId} .`,
		});
	}
	catch (err) {
		err.message = err.message || "There was a problem with adding product to store";
		next(err);
	}
}

exports.deleteAllProductsFromStore = async (req, res, next) => {
	try {
		const storeId = req.body.storeId;
		const storeFromDb = await getStoreFromDb(storeId);
		console.log(storeFromDb.products);
		await storeFromDb.products.forEach(function (prodItem) {
			deleteProductFromDbAndStore(storeFromDb, prodItem);
		});
		return res.status(200).json({
			message: `All Products deleted successfully from Store ${storeId} .`,
		});
	}
	catch (err) {
		err.message = err.message || "There was a problem with deleting all products from store";
		next(err);
	}
}

async function getStoreFromDb(storeId) {
	if (!storeId) {
		throw new Error("store id is empty!");
	}
	const storeFromDb = await Store.findOne({ storeId: storeId });
	if (!storeFromDb) {
		throw new Error("store isn't found in DB");
	}
	return storeFromDb;
}

async function deleteProductFromDbAndStore(storeFromDb, sn) {
	try {
		console.log("@@@ enter to deleteProductFromDbAndStore");
		console.log(`@@@ storeFromDb.storeId:
		${storeFromDb.storeId}
		sn:
		${sn}`);
		//TODO: add validation in case it cant delete a product
		await Product.deleteOne({
			sn: sn,
			storeId: storeFromDb.storeId
		});
		console.log("@@@ enter to after deleteOne");
		const deletedProduct = await storeFromDb.products.pop(sn);
		await storeFromDb.save();
		return true;
	}
	catch (err) {
		err.message = err.message || "There was a problem in deleteProductFromDbAndStore";
		throw new Error(err);
	}
}
