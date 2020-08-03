/**
 * This factory exports a fakeDb in object.
 * fakeDb["users"] : array of users
 * fakeDb["products"] : array of products
 * fakeDb["stores"] : array of stores
 * */
const usersDb = require( "./users.fakeDb" );
const productsDb = require( "./products.fakeDb" );
const storesDb = require( "./stores.fakeDb" );
const fakeDb = {}

storesDb.forEach( ( store ) => {
	const owner = store.owner;
	usersDb.forEach( ( user ) => {
		if ( user.email === owner ) {
			user.ownedStores.push( store );
		}
	} );
} );

fakeDb["users"] = usersDb;
fakeDb["products"] = productsDb;
fakeDb["stores"] = storesDb;

module.exports = fakeDb;