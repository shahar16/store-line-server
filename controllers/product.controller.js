//mongoose model
const Product = require( "../models/product.model" );
const CTRL_NAME = "product.controller";
const appDB = require( '../resources/fakeDb/fakeDb' );

exports.getTestProduct = async ( req, res, next ) => {
	try {
		const productItemExists = await Product.findOne( { sn: req.query.sn } );
		if ( productItemExists ) {
			const {
					  id,
					  name,
					  image,
					  desc,
					  price,
					  sn
				  } = productItemExists
			return res.status( 200 ).json( {
				id:    id,
				name:  name,
				image: image,
				desc:  desc,
				price: price,
				sn:    sn
			} );

		} else {
			throw new Error( "Product not exist!" );
		}
	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}
exports.addProduct = async ( req, res, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		if ( !req.file ) {
			throw new Error( "Image did not received." )
		}

		const {
				  sn,
				  price,
				  desc,
				  name
			  } = req.body;
		const image = req.file.path;

		const productItemExists = await Product.findOne( { sn: sn } );
		if ( !productItemExists ) {
			const newProduct = new Product( {
				sn:    sn,
				name:  name,
				price: price,
				desc:  desc,
				image: image
			} );
			await newProduct.save();
			return res.status( 200 ).json( {
				message: `Product: ${name} created successfully.`,
			} );
		} else {
			throw new Error( "Product already exist!" );
		}
	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}

exports.addNewProduct = async ( req, res, next ) => {
	const fn = CTRL_NAME + "::addNewProduct";

	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		if ( !req.files ) {
			throw new Error( "Image did not received." )
		}

		const {
				  sn,
				  storeID,
				  name,
				  desc,
				  price,
				  stock,
				  fakeDB
			  } = req.body;

		const image = fakeDB ? req.file.path : req.files.map( file => file.path );

		const productDBObj = await Product.findOne( {
			sn:      sn,
			storeID: storeID
		} );

		if ( productDBObj ) {
			next( new Error( `${fn}: this product already exist in db:
			product name: ${name}
			product sn: ${sn}
			storeID: ${storeID},
			stock: ${stock}` ) );
		} else {
			const newProductInDB = new Product( {
				sn:      sn,
				storeID: storeID,
				name:    name,
				desc:    desc,
				price:   price,
				image:   image
			} );

			await newProductInDB.save();

			const productDetailsMsg = `product name: ${name}
				product sn: ${sn}
				storeID: ${storeID}
				desc: ${desc},
				price: ${price},
				stock: ${stock}`;

			const responseMsg = `${fn}: new product has successfully created:`
				+ productDetailsMsg;

			//console.log(responseMsg);

			// next(res.status(200).json({
			// 	message: responseMsg
			// }));
			next();
		}

	} catch ( err ) {
		err.message = ( `${fn}: ` + err.message ) ||
			( `${fn}: failed to create new Product` );

		next( err );
	}
}
exports.editProduct = async ( req, res, next ) => {

	const fn = CTRL_NAME + "::editProduct";

	try {

		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		const {
				  sn,
				  storeID,
				  name,
				  desc,
				  price,
				  image,
				  stock
			  } = req.body;

		const productDBObj = await Product.findOne( { sn: sn, storeID: storeID } );

		if ( !productDBObj ) {
			next( new Error( `${fn}: product does not exist in DB!` ) );
		}

		await productDBObj.updateOne( {
			name:  name,
			desc:  desc,
			price: price,
			image: image,
			stock: stock
		} );

		await productDBObj.save();

		const productDetailsMsg = `product name: ${name}
				product sn: ${sn}
				storeID: ${storeID}
				desc: ${desc},
				price: ${price},
				stock ${stock}`;

		const responseMsg = `${fn}: product was successfully updated:`
			+ productDetailsMsg;

		console.log( responseMsg );

		next();
	} catch ( err ) {
		err.message = err.message ||
			( `${fn}: failed to update product Product` );

		next( err );
	}
}

exports.deleteProduct = async ( req, res, next ) => {
	const fn = CTRL_NAME + "::deleteProduct"

	try {

		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		const {
				  sn,
				  storeID,
				  name,
				  desc,
				  price,
				  image,
				  stock
			  } = req.body;

		//const image = req.file.path;

		const productDBObj = await Product.findOne( {
			sn:      sn,
			storeID: storeID
		} );

		if ( !productDBObj ) {
			next( new Error( `${fn}: product does not exist in DB!` ) );
		}

		const productDetailsMsg = `product name: ${name}
			product sn: ${sn}
			storeID: ${storeID}
			desc: ${desc},
			price: ${price},
			stock: ${stock}`;

		await Product.deleteOne( { sn: sn, storeID: storeID } );

		return res.status( 200 ).json( {
			message: "product successfully deleted from DB:"
						 + productDetailsMsg
		} );
	} catch ( err ) {
		err.message = ( `${fn}: ` + err.message ) ||
			( `${fn}: Failed to delete product from DB!` );

		next( err );
	}
}

exports.deleteAllProducts = async ( req, res, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}
		console.log( `Login:: name:  ${name}
price: ${price}
desc:  ${desc}
sn:    ${sn}` );

		//get all product by user
		const storeID = req.body.storeID;

	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}
exports.deleteAllProductsBelongsToStore = async ( req, res, next ) => {
	const fn = CTRL_NAME + ':deleteAllProductsFromStore';

	try {
		const {
				  storeID,
				  name
			  } = req.body;

		// const storeDBObj = await Store.findOne({ storeID: storeID });

		// if (!storeDBObj) {
		// 	next(new Error("Store isn't exists in DB!"));
		// }

		const result = Product.deleteMany( { storeID: storeID } );
		const numOfDeletedItems = ( await result ).deletedCount;

		console.log( `${fn}: ${numOfDeletedItems} deleted from DB!` );

		next();

	} catch ( err ) {
		err.message = err.message ||
			`${fn}: Failed to delete store products from DB!`;

		next( err )
	}

}
exports.addAllDBProducts = async ( req, res, next ) => {
	const fn = CTRL_NAME + "::addAllDBProducts";
	try {

		console.log( "-------------------------------------" );
		console.log( `${fn}: ${req}` );
		let i = 1;
		await appDB["products"].forEach( ( singleProduct ) => {
			req.body = singleProduct;
			req.file = {};
			req.file.path = singleProduct.image;
			this.addNewProduct( req, res, next );
			console.log( `${fn}: ${i}` );
			i++;
		} );

		//next();
		return res.status( 200 );
	} catch ( err ) {
		err.message = ( `${fn}: ` + err.message ) ||
			( `${fn}: failed to add new db Products` );

		next( err );
	}
}
