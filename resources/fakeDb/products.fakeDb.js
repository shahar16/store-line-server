const WoodWorkStore = require('../demo_stores/woodWorkStore')

const productNames = ['Computer 13"', 'Computer 15"', 'Computer 17"', 'Pot 2L', 'Pot 3L', 'Keybord', 'Mouse', 'Speaker',
  'Screen 21"', 'Screen 24"', 'Screen 27"', 'Tent 3 people', 'Tent 4 people', 'Iphone', 'Drill', 'Bottle 1L', 'Bottle 1.5L',
  'Dresser', 'Frame', 'Partition', 'Placement', 'Footstool', 'Knife', 'Rug', 'Chair', 'Table', 'Lamp']
const shortid = require('shortid')

const productsDesc = [
  'This is the first description',
  'This is the second description, its a little bit longer',
  'This is the third description. This description is much longer, and it came from our amazing fake DB',
  'Description from fake DB',
  'This is good product, trust me',
  'Dnaiel, do not worry, we will finish this project some day',
  'Very very long description to test the UI. I dont now what to write in this description but it is already long. Few more words and its fine.',
]

const stock = {
  type:       'color',
  quantities: {
    'black':  50,
    'white':  60,
    'silver': 70
  }
}
const imagesPrefix = 'uploads/images'
let productsDb = []
let numOfStores = 25
let counter = 1
let numberOfImages = 3
let storeId

productNames.forEach((productName, index) => {
  let productFolder = productName.split(' ')[0]
  productsDesc.forEach((desc) => {
    storeId = counter
    let images = [
      `${imagesPrefix}/${productFolder}/pic${counter % numberOfImages + 1}.jpg`,
      `${imagesPrefix}/${productFolder}/pic${( counter + 1 ) % numberOfImages + 1}.jpg`,
      `${imagesPrefix}/${productFolder}/pic${( counter + 2 ) % numberOfImages + 1}.jpg`
    ]
    let product = {
      name:    productName,
      desc:    desc,
      price:   ( ( index + 1 ) * 100 ),
      sn:      shortid.generate(),
      image:   images,
      storeID: storeId,
      stock:   stock,
      fakeDB:  true
    }
    if (++counter > numOfStores) {
      counter = 1
    }
    productsDb.push(product)
  })
})

const woodStoreProducts = WoodWorkStore['products']

for (const [key, value] of Object.entries(woodStoreProducts)) {
  let product = value
  product['fakeDB'] = true
  productsDb.push(product)
}

module.exports = productsDb