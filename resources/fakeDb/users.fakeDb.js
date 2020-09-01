const firstNames = [ "Koby", "Lior", "Eyal", "Pini", "Itzik", "Omer", "Zohar", "Moshik" ];
const lastNames = [ "Perets", "Narkis", "Golan", "Hadad", "Kala", "Adam", "Argov", "Afia" ];
const superUsers = [ "shaharyig@gmail.com", "danielahrak@gmail.com" ];
const address = {
	city:     "Tel Aviv",
	street:   "Haim Havashus",
	houseNum: 12
}
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
			cartID:      "",
			address:     address
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
		cartID:      "",
		address:     address
	} );
} );

module.exports = usersDb
