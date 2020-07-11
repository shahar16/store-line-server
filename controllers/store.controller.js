//mongoose model
const Store = require( "../models/store.model" );

exports.addStore = async ( req, res, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		const {
			storeId,
			name,
			owner,
			desc,
			logo,
			contact,
		} = req.body;

		const storeExists = await Store.findOne( { storeId: storeId } );
		if ( storeExists ) {
			throw new Error( "Store already exists." );
		}

		const newStore = new Store( {
			storeId: storeId,
			name: name,
			owner: owner,
			desc: desc,
			logo: logo,
			products: {},
			contact: contact
		} );
		await newStore.save();
		return res.status( 200 ).json( {
			message: `Store: ${name} created successfully.`,
		} );
	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}

// TODO: add remove products functionality
exports.deleteStore = async ( req, res, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		const {
			storeId,
			name
		} = req.body;

		const storeExists = await Store.findOne( { storeId: storeId } );
		if ( !storeExists ) {
			throw new Error( `Store ${name} did not exists.` );
		} else {
			await Store.deleteOne( { storeId: storeId } )

			return res.status( 200 ).json( {
				message: `Store: ${name} deleted successfully.`,
			} );
		}
	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}

exports.editStore = async ( req, res, next ) => {
	try {
		if ( Object.entries( req.body ).length === 0 ) {
			throw new Error( "Request body is empty." );
		}

		const {
			storeId,
			name,
			owner,
			desc,
			logo,
			contact,
		} = req.body;

		const storeExists = await Store.findOne( { storeId: storeId } );
		if ( !storeExists ) {
			throw new Error( `Store ${name} did not exists.` );
		} else {
			await Store.updateOne( { storeId: storeId }, {
				name: name,
				owner: owner,
				desc: desc,
				logo: logo,
				contact: contact
			} )

			return res.status( 200 ).json( {
				message: `Store: ${name} updated successfully.`,
			} );
		}
	} catch ( err ) {
		err.message = err.message || "There was a problem with product creation";
		next( err );
	}
}