//mongoose model
const Store = require("../models/store.model");
const Product = require('../models/product.model');
const User = require('../models/user.model');
const CTRL_NAME = "store.controller";
const appDB = require('../resources/fakeDb/fakeDb');
const { v4: uuidv4 } = require('uuid');


exports.addNewStore = async (req, res, next) => {

	const fn = CTRL_NAME + "::addNewStore";

	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		if ( !req.files ) {
			throw new Error( "Image did not received." )
		}


		const {
			name,
			storeID,
			owner,
			desc,
			contact,
			fakeDB
		} = req.body
		const newStoreID = fakeDB ? storeID :uuidv4();
		console.log(req.id);
		const contactAsJson = fakeDB ? contact : JSON.parse(contact);
		const image = fakeDB ? req.file.path : req.files.map( file => file.path );

		const storeDBObj = await Store.findOne({ storeID: newStoreID });
		const userDBObj = await User.findOne({ email: owner });

		if (storeDBObj) {
			throw new Error(`${fn}: Store already exists!`);
		}

		if (!userDBObj) {
			throw new Error(`${fn}: store owner doesn't exist!`);
		}

		const newStoreInDB = new Store({
			storeID:  newStoreID,
			name:     name,
			owner:    owner,
			desc:     desc,
			image:     image,
			products: [],
			contact:  contactAsJson
		});
		await newStoreInDB.save();

		//console.log(newStoreInDB);
		addNewStoreToUserOwner(userDBObj, newStoreInDB);

		const storeDetailsMsg = `storeID: ${storeID}
		name: ${name},
		owner: ${owner},
		desc: ${desc},
		contact: ${contact}`;

		if (req.mode === "db") {
			console.log(`${fn}: in db mode!
			store details:
			` + storeDetailsMsg);
			next();
		} else {
			return res.status(200).json({
				message: `${fn}: new store created successfully!
			store details:
			` + storeDetailsMsg
			});
		}
	} catch (err) {
		err.message = `${fn}: ` +
			(err.message || "Failed to create new Store!");
		next(err);
	}
}

exports.getStore = async (req, res, next) => {
	const fn = CTRL_NAME + '::getStore';

	try {

		if (Object.entries(req.query).length === 0) {
			throw new Error("Request body is empty.");
		}

		const storeID = req.query.storeID;
		console.log(storeID);
		const storeDBObj = await Store.findOne({ storeID: storeID });
		console.log(storeDBObj);

		if (!storeDBObj) {
			throw new Error(`${fn}: Store doesn't exists!`);
		}

		return res.send(JSON.stringify(storeDBObj));

	} catch (err) {
		err.message = `${fn}:`
			+
			(err.message || "Failed to get store!");
		next(err);
	}
}

exports.deleteStore = async (req, res, next) => {
	const fn = CTRL_NAME + '::deleteStore';

	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}
		const {
			storeID,
			name,
			owner
		} = req.body;

		const storeDBObj = await Store.findOne({ name: name, storeID: storeID });
		const ownerDBObj = await User.findOne({ email: owner });

		if (!storeDBObj) {
			throw new Error(`Store ${name} did not exists in DB`);
		}

		const storeDetailsMsg = `storeID: ${storeDBObj.storeID}
		name: ${storeDBObj.name},
		owner: ${storeDBObj.owner},
		desc: ${storeDBObj.desc},
		contact: ${storeDBObj.contact}`;

		await Store.deleteOne({ storeID: storeID });
		removeStoreFromUserOwner(name, storeID, ownerDBObj);

		const deleteStoreSuccessMsg = {
			message: `${fn}: Store deleted from DB successfully!
		store details:
		` + storeDetailsMsg
		};

		if (req.mode === "db") {
			console.log("in db mode ... ");
			console.log(deleteStoreSuccessMsg);
		} else {
			return res.status(200).json(deleteStoreSuccessMsg);
		}
	} catch (err) {
		err.message = `${fn}:`
			+
			(err.message || "Failed to delete store!");
		next(err);
	}
}

exports.editStoreDetails = async (req, res, next) => {
	const fn = CTRL_NAME + '::editStoreDetails';

	try {
		let updateImages = Object.entries(req.files).length === 0 ? false :true;
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			storeID,
			name,
			owner,
			desc,
			contact,
		} = req.body;

		const contactAsJson = JSON.parse(contact);


		const storeDBObj = await Store.findOne({ storeID: storeID });

		if (!storeDBObj) {
			next(new Error(`Store ${name} did not exists in DB`));
		} else {
			const image = updateImages ? req.files.map( file => file.path ) : storeDBObj.image;
			console.log(image);
			await storeDBObj.updateOne({
				name: name,
				owner: owner,
				desc: desc,
				image: image,
				contact: contactAsJson
			})

			const storeDetailsMsg = `storeID: ${storeDBObj.storeID}
			name: ${storeDBObj.name},
			owner: ${owner},
			desc: ${desc},
			contact: ${contact}`;

			return res.status(200).json({
				message: `${fn}: Store updated successfully!
				store updated details:
				` + storeDetailsMsg
			});
		}
	} catch (err) {
		err.message = `${fn}: ` +
			(err.message || "Failed to update store details");
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


		const storeDBObj = await Store.findOne({ storeID: storeID });
		const productDBObj = await Product.findOne({ sn: sn, storeID: storeID });

		if (!productDBObj) {
			next(new Error(`${fn}: product or store does not exist in DB!`));
		}

		const storeDetailsMsg = `storeID: ${storeDBObj.storeID}
		name: ${storeDBObj.name}`;

		const productDetailsMsg = `product name: ${productDBObj.name}
		product sn: ${productDBObj.sn}`;

		await storeDBObj.products.push(productDBObj);
		await storeDBObj.save();

		if (req.mode === "db") {
			console.log(`${fn}: in db mode!`
				+ storeDetailsMsg
				+ productDetailsMsg);
			console.log(`${fn}: in db mode!`);
			next();
		} else {
			console.log(`${fn}: in regular mode!`)
			return res.status(200).json({
				message: `${fn}: new product added to store successfully!`
					+ storeDetailsMsg
					+ productDetailsMsg
			});
		}
	}
	catch (err) {
		err.message = err.message ||
			`${fn}: Failed to add new product to store!`;

		throw new Error(err);
	}
}

exports.deleteProduct = async (req, res, next) => {

	const fn = CTRL_NAME + "deleteProduct"
	try {

		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			sn,
			storeID
		} = req.body;

		const storeDBObj = await Store.findOne({ storeID: storeID })
		const productDBObj = await Product.findOne({ sn: sn, storeID: storeID });

		if (!productDBObj) {
			next(new Error(`${fn}: product does not exist in DB!`));
		}

		const storeDetailsMsg = `storeID: ${storeDBObj.storeID}
		name: ${storeDBObj.name}`;

		const productDetailsMsg = `product name: ${productDBObj.name}
		product sn: ${productDBObj.sn}`;

		const newProdObj = [];
		for (let i = 0; i < storeDBObj.products.length; i++) {
			const singleProd = storeDBObj.products[i];
			if (singleProd.sn != sn) {
				newProdObj.push(singleProd);
			}
		}
		console.log(newProdObj);
		await Store.updateOne({ storeID: storeID }, {
			$set: { products: newProdObj }
		});

		console.log(`${fn}: product deleted from store successfully!`
			+ storeDetailsMsg
			+ productDetailsMsg);

		next();
	}
	catch (err) {
		err.message = err.message ||
			`${fn}: Failed to delete product from store!`;

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

exports.updateProduct = async (req, res, next) => {
	const fn = CTRL_NAME + "::updateObject";

	try {

		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			sn,
			storeID
		} = req.body;

		const storeDBObj = await Store.findOne({ storeID: storeID })
		const productDBObj = await Product.findOne({ sn: sn, storeID: storeID });

		if (!productDBObj || !storeDBObj) {
			next(new Error(`${fn}: product or store does not exist in DB!`));
		}

		const storeDetailsMsg = `storeID: ${storeDBObj.storeID}
		name: ${storeDBObj.name}`;

		const productDetailsMsg = `product name: ${productDBObj.name}
		product sn: ${productDBObj.sn}
		desc: ${productDBObj.desc}
		storeID: ${productDBObj.storeID}
		price: ${productDBObj.price}`;

		const newProdObj = storeDBObj.products;
		//if(newProdObj) - check if not null
		for (let i = 0; i < storeDBObj.products.length; i++) {
			if (newProdObj[i].sn == sn) {
				newProdObj[i] = productDBObj;
				console.log(newProdObj[i]);
			}
		}

		await Store.updateOne({ storeID: storeID },
			{ $set: { products: newProdObj } });

		console.log(storeDBObj);

		return res.status(200).json({
			message: `${fn}: product has successfully updated!`
				+ storeDetailsMsg
				+ productDetailsMsg
		});

	} catch (err) {
		err.message = err.message ||
			`${fn}: Failed to update product in store!`;

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

exports.addDbProductsToStores = async (req, res, next) => {
	const fn = CTRL_NAME + "::addDbProductsToStores";
	try {
		await appDB["products"].forEach((singleProduct) => {
			req.body = singleProduct;
			req.mode = "db";
			this.addProductToStore(req, res, next);
		});

		return res.status(200).json({
			message: `${fn}: DB products added successfully to appropriate stores!`
		});


	} catch (err) {
		err.message = (`${fn}: ` + err.message) ||
			(`${fn}: failed to add new db Products to stores`);

		next(err);
	}
}

exports.addDbStores = async (req, res, next) => {
	const fn = CTRL_NAME + "::addDbStores";

	try {
		await appDB["stores"].forEach((singleStore) => {
			req.body = singleStore;
			req.mode = "db"
			req.file = {};
			req.files = {};
			req.file.path = singleStore.image;
			this.addNewStore(req, res, next);
		});

		return res.status(200).json({
			message: `${fn} store has added successfully`
		});

	} catch (err) {
		err.message = (`${fn}: ` + err.message) ||
			(`${fn}: failed to add new db Stores`);

		throw new Error(err);
	}
}

exports.deleteDbStores = async (req, res, next) => {
	const fn = CTRL_NAME + "::deleteDbStores";

	try {
		await appDB["stores"].forEach((singleStore) => {
			req.body = singleStore;
			req.mode = "db";
			//console.log(singleStore);
			this.deleteStore(req, res, next);
		});

		return res.status(200).json({
			message: `${fn} store deleted successfully`
		});

	} catch (err) {
		err.message = (`${fn}: ` + err.message) ||
			(`${fn}: failed to delete db Stores`);

		throw new Error(err);
	}
}

exports.getStoresByUser = async (req, res, next) => {
	try {
		const email = req.userEmail;
		const user = await User.findOne({ email: email });
		if (!user) {
			throw new Error(`User: ${email} did not exists`);
		}
		const stores = await Store.find({ owner: email });

		return res.status(200).json(stores);
	} catch (err) {
		err.message = err.message || "There was a problem logging in. Check your email and password or create an account.";
		next(err);
	}
}

async function addNewStoreToUserOwner(userDBObj, storeDBObj) {
	const fn = CTRL_NAME + "::addNewStoreToUserOwner";

	try {
		const ownedStoresObj = userDBObj.ownedStores;
		for (let i = 0; i < userDBObj.ownedStores.length; i++) {
			if (ownedStoresObj[i].storeName === storeDBObj.name
				&&
				ownedStoresObj[i].storeID === storeDBObj.storeID) {
				throw new Error(`${fn}: store belongs to user already`)
			}
		}
		ownedStoresObj.push({
			storeName: storeDBObj.name,
			storeID: storeDBObj.storeID
		});

		await userDBObj.updateOne(
			{ $set: { ownedStores: ownedStoresObj } });
		//await userDBObj.save();
	} catch (err) {
		err.message = err.message ||
			`${fn}: Failed to add store to his owner!`;
		throw new Error(err);
	}
}

async function removeStoreFromUserOwner(storeName, storeID, ownerDBObj) {
	const fn = CTRL_NAME + "::removeStoreFromUserOwner";

	try {
		const updatedOwnedStoresObj = [];
		console.log(`store name: ${storeName}`);
		console.log(`storeID: ${storeID}`);
		console.log(`ownerObj: ${ownerDBObj}`);
		for (let i = 0; i < ownerDBObj.ownedStores.length; i++) {
			if (ownerDBObj.ownedStores[i].storeName != storeName
				&&
				ownerDBObj.ownedStores[i].storeID != storeID) {
				updatedOwnedStoresObj.push({
					storeName: ownerDBObj.ownedStores[i].storeName,
					storeID: ownerDBObj.ownedStores[i].storeID
				});
			}
		}
		console.log(updatedOwnedStoresObj);
		await ownerDBObj.updateOne(
			{
				$set: {
					ownedStores: updatedOwnedStoresObj
				}
			}
		);

	} catch (err) {
		err.message = err.message ||
			`${fn}: Failed to remove store from his owner!`;
		throw new Error(err);
	}
}

exports.getOwner = async ( req, res, next ) => {
	const fn = CTRL_NAME + "::getOwner";
	try {
		const { storeID } = req.query

		if ( !storeID ) {
			throw new Error( "Please enter storeID" );
		}

		const store = await Store.findOne( {
			storeID: storeID
		} );

		if ( !store ) {
			throw new Error( `Product: ${sn} did not exist in store: ${storeID}` )
		}

		return res.status( 200 ).json( {
			owner: store.owner
		} );
	} catch ( err ) {
		err.message = err.message || ( `${fn}: failed to add new db Products` );
		next( err );
	}
}
