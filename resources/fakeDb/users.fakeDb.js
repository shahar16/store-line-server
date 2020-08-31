const firstNames = [ "Koby", "Lior", "Eyal", "Pini", "Itzik", "Omer", "Zohar", "Moshik" ];
const lastNames = [ "Perets", "Narkis", "Golan", "Hadad", "Kala", "Adam", "Argov", "Afia" ];
const superUsers = [ "shaharyig@gmail.com", "danielahrak@gmail.com" ];
const password = "123456";
let usersDb = [];

firstNames.forEach( ( firatName ) => {
	lastNames.forEach( ( lastName ) => {
		let user = {
			email:       `${firatName}.${lastName}@gmail.com`,
			password:    password,
			firstName:   firatName,
			lastName:    lastName,
			ownedStores: [],
			cartID:      ""
		}
		usersDb.push( user );
	} );
} );

superUsers.forEach( ( user ) => {
	usersDb.push( {
		email:       user,
		password:    password,
		firstName:   "Super",
		lastName:    "User",
		ownedStores: [],
		cartID:      ""
	} );
} );

module.exports = usersDb
