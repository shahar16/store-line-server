//mongoose model
const Product = require("../models/product.model");
const CTRL_NAME = "product.controller";

exports.getTestProduct = async (req, res, next) => {
	try {
		const productItemExists = await Product.findOne({ sn: req.query.sn });
		if (productItemExists) {
			const {
				name,
				image,
				desc,
				price,
				sn
			} = productItemExists
			return res.status(200).json({
				name: name,
				image: image,
				desc: desc,
				price: price,
				sn: sn
			});
		} else {
			throw new Error("Product not exist!");
		}
	} catch (err) {
		err.message = err.message || "There was a problem with product creation";
		next(err);
	}
}
exports.addProduct = async (req, res, next) => {
	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		if (!req.file) {
			throw new Error("Image did not received.")
		}

		const {
			sn,
			price,
			desc,
			name
		} = req.body;
		const image = req.file.path;

		const productItemExists = await Product.findOne({ sn: sn });
		if (!productItemExists) {
			const newProduct = new Product({
				sn: sn,
				name: name,
				price: price,
				desc: desc,
				image: image
			});
			await newProduct.save();
			return res.status(200).json({
				message: `Product: ${name} created successfully.`,
			});
		} else {
			throw new Error("Product already exist!");
		}
	} catch (err) {
		err.message = err.message || "There was a problem with product creation";
		next(err);
	}
}

exports.addNewProduct = async (req, res, next) => {
	const fn = CTRL_NAME + "::addNewProduct";

	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		// if (!req.file) {
		// 	throw new Error("Image did not received.")
		// }

		const {
			sn,
			storeID,
			name,
			desc,
			price,
			image
		} = req.body;

		//const image = req.file.path;

		const productAlreadyExistInDB = await Product.findOne({
			sn: sn,
			storeID: storeID
		});

		if (productAlreadyExistInDB) {
			next(new Error(`${fn}: this product already exist in db:
			product name: ${name}
			product sn: ${sn}
			storeID: ${storeID}`));
		}
		else {
			const newProductInDB = new Product({
				sn: sn,
				storeID: storeID,
				name: name,
				desc: desc,
				price: price,
				image: image
			});

			await newProductInDB.save();

			const productDetailsMsg = `product name: ${name}
				product sn: ${sn}
				storeID: ${storeID}
				desc: ${desc},
				price: ${price}`;

			const responseMsg = `${fn}: new product has successfully created:`
				+ productDetailsMsg;

			console.log(responseMsg);

			// next(res.status(200).json({
			// 	message: responseMsg
			// }));
			next();
		}

	} catch (err) {
		err.message = (`${fn}: ` + err.message) ||
			(`${fn}: failed to create new Product` + productDetailsMsg);

		next(err);
	}
}
exports.editProduct = async (req, res, next) => {
	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}
		const {
			sn,
			image,
			price,
			desc,
			name
		} = req.body;
		console.log(`Login:: name:  ${name}
price: ${price}
desc:  ${desc}
sn:    ${sn}`);

		const productItemFromDb = await Product.findOne({ sn: sn });
		console.log(productItemFromDb);

		if (!productItemFromDb) {
			throw new Error("Item isn't appear in database")
		} else {
			productItemFromDb.sn = sn;
			productItemFromDb.name = name;
			productItemFromDb.desc = desc;
			productItemFromDb.image = image;
			productItemFromDb.price = price;
			await productItemFromDb.save();
		}
		return res.status(200).json({
			message: `Product: ${name} updated successfully.`,
		});
	} catch (err) {
		err.message = err.message || "There was a problem with product creation";
		next(err);
	}
}

exports.deleteProduct = async (req, res, next) => {
	const fn = CTRL_NAME + "::deleteProduct"

	try {

		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}
		const {
			sn,
			storeID,
			name,
			desc,
			price,
			image
		} = req.body;

		//const image = req.file.path;

		const productAlreadyExistInDB = await Product.findOne({
			sn: sn,
			storeID: storeID
		});

		if (!productItemFromDb) {
			throw new Error("deleted Item isn't appear in database")
		} else {
			const productDetailsMsg = `product name: ${name}
				product sn: ${sn}
				storeID: ${storeID}
				desc: ${desc},
				price: ${price}`;

			await Product.deleteOne({ sn: sn, storeID: storeID });
		}

		console.log("product successfully deleted:"
			+ productDetailsMsg);

		next();

	} catch (err) {
		err.message = (`${fn}: ` + err.message) ||
			(`${fn}: ` + "Failed to delete product from DB");
		next(err);
	}
}

exports.deleteAllProducts = async (req, res, next) => {
	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}
		console.log(`Login:: name:  ${name}
price: ${price}
desc:  ${desc}
sn:    ${sn}`);

		//get all product by user
		const storeID = req.body.storeID;

	} catch (err) {
		err.message = err.message || "There was a problem with product creation";
		next(err);
	}
}
