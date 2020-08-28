const productNames = ["Computer", "Keybord", "Mouse", "Speaker", "Screen", "Tent", "Pizza", "Iphone"];

const productsDesc = [
	"This is the first description",
	"This is the second description, its a little bit longer",
	"This is the third description. This description is much longer, but since i dont have something to write i will write some shit: shit.",
	"Description",
	"I wish the 15.9.2020 will come fast. I want to be a free man after 4 years of studding this shit",
	"Dnaiel, do not warry, we will finish this project some day",
	"drfjkfdahkljflisdhfklhdlkfhklds",
	"dfnlksdhfklhdwkvhiohvlfsblvkdbkvsbdkv"
]
const imagesPrefix = "uploads/images/"
let productsDb = [];
let numOfStores = 25;
let counter = 1;
let storeId;
//TODO: add stock!
productNames.forEach((productName, index) => {
	productsDesc.forEach((desc) => {
		storeId = counter;
		let images = [
			`${imagesPrefix}pic${index % 8 + 1}.jpg`,
			`${imagesPrefix}pic${( index + 1 ) % 8 + 1}.jpg`,
			`${imagesPrefix}pic${( index + 2 ) % 8 + 1}.jpg`
		]
		let product = {
			name: productName,
			desc: desc,
			price: ((index + 1) * 100),
			sn: index,
			image: images,
			storeID: storeId,
			fakeDB: true
		}
		if (++counter > numOfStores) {
			counter = 1;
		}
		productsDb.push(product);
	});
});

module.exports = productsDb