//mongoose model
const Product = require( "../models/product.model" );

exports.getTestProduct = async ( req, res, next ) => {
	try {
		const productItemExists = await Product.findOne( { sn: req.query.sn } );
		if ( productItemExists ) {
			const {
				name,
				image,
				desc,
				price,
				sn
			} = productItemExists
			return res.status( 200 ).json( {
				name: name,
				image: image,
				desc: desc,
				price: price,
				sn: sn
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

		if (!req.file) {
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
				sn: sn,
				name: name,
				price: price,
				desc: desc,
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
exports.editProduct = async ( req, res, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}
		const {
			sn,
			image,
			price,
			desc,
			name
		} = req.body;
		console.log( `Login:: name:  ${name}
price: ${price}
desc:  ${desc}
sn:    ${sn}` );

		const productItemFromDb = await Product.findOne( { sn: sn } );
		console.log( productItemFromDb );

		if ( !productItemFromDb ) {
			throw new Error( "Item isn't appear in database" )
		} else {
			productItemFromDb.sn = sn;
			productItemFromDb.name = name;
			productItemFromDb.desc = desc;
			productItemFromDb.image = image;
			productItemFromDb.price = price;
			await productItemFromDb.save();
		}
		return res.status( 200 ).json( {
			message: `Product: ${name} updated successfully.`,
		} );
	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}

exports.deleteProduct = async ( req, res, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}
		const {
			sn,
			image,
			price,
			desc,
			name
		} = req.body;
		console.log( `Login:: name:  ${name}
price: ${price}
desc:  ${desc}
sn:    ${sn}` );

		const productItemFromDb = await Product.findOne( { sn: sn } );
		console.log( productItemFromDb );

		if ( !productItemFromDb ) {
			throw new Error( "deleted Item isn't appear in database" )
		} else {
			await Product.deleteOne( { sn: sn } );
		}
		return res.status( 200 ).json( {
			message: `Product: ${name} deleted successfully.`,
		} );
	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}

exports.deleteAllProducts = async ( res, req, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}
		console.log( `Login:: name:  ${name}
price: ${price}
desc:  ${desc}
sn:    ${sn}` );

		//get all product by user
		const storeId = req.body.storeId;

	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}
