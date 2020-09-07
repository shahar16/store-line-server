const usersDb = require('./users.fakeDb')
const WoodWorkStore = require('./woodWorkStore')
const storesNames = ['KSP', 'Ivory', 'Home Center', 'ACE', 'Shufersal']
const storesDesc = [
  'This is the first description, this is a description for stores not for products, this description should be long.',
  'This is the second description, its a little bit longer, this is a description for stores not for products, this description should be long.',
  'This is the third description. This description is much longer, but since i dont have something to write i will write some shit: shit., this is a description for stores not for products, this description should be long.',
  'I wish the 15.9.2020 will come fast. I want to be a free man after 4 years of studding this shit, this is a description for stores not for products, this description should be long.',
  'Dnaiel, do not warry, we will finish this project some day, this is a description for stores not for products, this description should be long.'
]
const imagesPrefix = 'uploads/images/'
let storesDb = []
let counter = 1

storesNames.forEach((productName, index) => {
  storesDesc.forEach((desc) => {
    let images = [
      `${imagesPrefix}pic${index % 8 + 1}.jpg`,
      `${imagesPrefix}pic${( index + 1 ) % 8 + 1}.jpg`,
      `${imagesPrefix}pic${( index + 2 ) % 8 + 1}.jpg`
    ]
    let store = {
      storeID:  counter,
      name:     productName,
      owner:    usersDb[counter].email,
      desc:     desc,
      image:    images,
      products: {},
      contact:  {
        email:       usersDb[counter].email,
        phoneNumber: '0555555',
        adress:      {
          city:     'Tel Aviv',
          street:   'street',
          houseNum: 41,
        }
      },
      fakeDB:   true
    }
    counter++
    storesDb.push(store)
  })
})
console.log(WoodWorkStore['store'])
storesDb.push(WoodWorkStore['store'])

module.exports = storesDb