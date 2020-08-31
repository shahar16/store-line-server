const { v4: uuidv4 } = require('uuid');

const productNames = [ "Computer", "Keybord", "Mouse", "Speaker", "Screen", "Tent", "Iphone", "Computer", "Keybord", "Mouse", "Speaker", "Screen", "Tent", "Iphone" ];

const productsDesc = [
	"This is the first description",
	"This is the second description, its a little bit longer",
	"This is the third description. This description is much longer, but since i dont have something to write i will write some shit: shit.",
	"Description",
	"I wish the 15.9.2020 will come fast. I want to be a free man after 4 years of studding this shit",
	"Dnaiel, do not warry, we will finish this project some day",
	"drfjkfdahkljflisdhfklhdlkfhklds",
]

const stocks = {
	Computer: {
		type:       "screen size",
		quantities: {
			"13\"": 50,
			"15\"": 60,
			"16\"": 70
		}
	},
	Keybord: {
		type:       "color",
		quantities: {
			"black": 50,
			"white": 60
		}
	},
	Mouse: {
		type:       "color",
		quantities: {
			"black": 50,
			"white": 60,
			"blue":  20,
			"red":   10
		}
	},
	Speaker: {
		type:       "color",
		quantities: {
			"black": 50,
			"white": 60,
			"blue":  20,
			"red":   10
		}
	},
	Screen : {
		type:       "screen size",
		quantities: {
			"21\"": 50,
			"24\"": 60,
			"17\"": 70
		}
	},
	Tent: {
		type:       "tent size",
		quantities: {
			"2 people": 50,
			"3 people": 60,
			"4 people": 70
		}
	},
	Iphone: {
		type:       "color",
		quantities: {
			"black": 50,
			"white": 60,
			"gold":  20,
			"silver":   10
		}
	}
}
const imagesPrefix = "uploads/images"
let productsDb = [];
let numOfStores = 25;
let counter = 1;
let numberOfImages = 3;
let storeId;
//TODO: add stock!
productNames.forEach( ( productName, index ) => {
	productsDesc.forEach( ( desc ) => {
		storeId = counter;
		let images = [
			`${imagesPrefix}/${productName}/pic${counter % numberOfImages + 1}.jpg`,
			`${imagesPrefix}/${productName}/pic${(counter + 1) % numberOfImages + 1}.jpg`,
			`${imagesPrefix}/${productName}/pic${(counter + 2) % numberOfImages + 1}.jpg`
		];
		let product = {
			name:    productName,
			desc:    desc,
			price:   ( ( index + 1 ) * 100 ),
			sn:      uuidv4(),
			image:   images,
			storeID: storeId,
			stock:   stocks[productName],
			fakeDB:  true
		}
		if ( ++counter > numOfStores ) {
			counter = 1;
		}
		productsDb.push( product );
	} );
} );

module.exports = productsDb