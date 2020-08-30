//mongoose model
const Product = require( "../models/product.model" );
const CTRL_NAME = "product.controller";
const appDB = require( '../resources/fakeDb/fakeDb' );
let ALL_PRODUCTS = [];
let ALL_PRODUCTS_LENGTH = 0;

exports.getHomePageProducts = async ( req, res, next ) => {
	try {
		console.log( "req.query.storeID" );
		console.log( req.query.init );
		if ( ALL_PRODUCTS_LENGTH <= 0 && req.query.init === "true" ) {
			console.log( "initiate........................." );
			ALL_PRODUCTS_LENGTH = [];
			let products = await Product.find();
			ALL_PRODUCTS = products;
			ALL_PRODUCTS_LENGTH = ALL_PRODUCTS.length;

		}
		console.log( "ALL_PRODUCTS_LENGTH before loop: " + ALL_PRODUCTS_LENGTH );
		let homePageProducts = [];
		let newLength = ALL_PRODUCTS_LENGTH;

		for ( let i = 0; i < 20 && i < ALL_PRODUCTS_LENGTH; i++ ) {
			let rndNum = getRandomInt( 0, newLength - 1 );
			homePageProducts.push( ALL_PRODUCTS[rndNum] );
			let tmp = ALL_PRODUCTS[rndNum];
			ALL_PRODUCTS[rndNum] = ALL_PRODUCTS[newLength - 1];
			ALL_PRODUCTS[newLength - 1] = tmp;
			newLength--;
		}
		ALL_PRODUCTS_LENGTH = newLength;
		console.log( "ALL_PRODUCTS_LENGTH: " + ALL_PRODUCTS_LENGTH );
		// console.log(homePageProducts);
		return res.send( JSON.stringify( homePageProducts ) );

	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		console.log( err );
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
				image:   image,
				stock:   stock
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

		let updateImages = Object.entries( req.files ).length === 0 ? false : true;
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		const {
				  sn,
				  storeID,
				  name,
				  desc,
				  price,
				  stock
			  } = req.body;

		const productDBObj = await Product.findOne( { sn: sn, storeID: storeID } );

		if ( !productDBObj ) {
			next( new Error( `${fn}: product does not exist in DB!` ) );
		}
		const image = updateImages ? req.files.map( file => file.path ) : productDBObj.image;
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
				  storeID
			  } = req.body;

		const productDBObj = await Product.findOne( {
			sn:      sn,
			storeID: storeID
		} );

		if ( !productDBObj ) {
			next( new Error( `${fn}: product does not exist in DB!` ) );
		}

		const productDetailsMsg = `	product sn: ${sn}
			storeID: ${storeID}`;

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
			req.files = {}
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

function getRandomInt( min, max ) {
	min = Math.ceil( min );
	max = Math.floor( max );
	return Math.floor( Math.random() * ( max - min ) + min ); //The maximum is exclusive and the minimum is inclusive
}

exports.getProduct = async ( req, res, next ) => {
	const fn = CTRL_NAME + "::getProduct";
	try {
		const { sn, storeID } = req.query

		if ( !sn || !storeID ) {
			throw new Error( "Please enter serial number and storeID" );
		}

		const productDBObj = await Product.findOne( {
			sn:      sn,
			storeID: storeID
		} );

		if ( !productDBObj ) {
			throw new Error( `Product: ${sn} did not exist in store: ${storeID}` )
		}

		return res.status( 200 ).json( productDBObj );
	} catch ( err ) {
		err.message = err.message || ( `${fn}: failed to add new db Products` );
		next( err );
	}
}

exports.getProductsList = async ( req, res, next ) => {
	const fn = CTRL_NAME + "::getProductsList";
	try {
		const products = await Product.find();
		if ( !products ) {
			throw new Error( "Did not found any products" );
		}
		let productsNames = products.map( product => product.name );
		productsNames = productsNames.filter( ( value, index, self ) => self.indexOf( value ) === index );
		productsNames = productsNames.map(item => {
			return {
				title: item.toLowerCase()
			}
		})

		return res.status( 200 ).json( productsNames );
	} catch ( err ) {
		err.message = err.message || ( `${fn}: failed get products list` );
		next( err );
	}
}
