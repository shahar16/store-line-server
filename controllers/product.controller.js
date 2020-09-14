//mongoose model
const Product = require('../models/product.model')
const CTRL_NAME = 'product.controller'
const appDB = require('../resources/fakeDb/fakeDb')
const fakeDb = require('../resources/fakeDb/fakeDb')
let ALL_PRODUCTS = []
let ALL_PRODUCTS_LENGTH = 0

exports.getHomePageProducts = async (req, res, next) => {
  try {
    console.log('req.query.storeID')
    console.log(req.query.init)
    if (ALL_PRODUCTS_LENGTH <= 0 && req.query.init === 'true') {
      console.log('initiate.........................')
      ALL_PRODUCTS_LENGTH = []
      let products = await Product.find()
      ALL_PRODUCTS = products
      ALL_PRODUCTS_LENGTH = ALL_PRODUCTS.length

    }
    console.log('ALL_PRODUCTS_LENGTH before loop: ' + ALL_PRODUCTS_LENGTH)
    let homePageProducts = []
    let newLength = ALL_PRODUCTS_LENGTH

    for (let i = 0; i < 20 && i < ALL_PRODUCTS_LENGTH; i++) {
      let rndNum = getRandomInt(0, newLength - 1)
      homePageProducts.push(ALL_PRODUCTS[rndNum])
      let tmp = ALL_PRODUCTS[rndNum]
      ALL_PRODUCTS[rndNum] = ALL_PRODUCTS[newLength - 1]
      ALL_PRODUCTS[newLength - 1] = tmp
      newLength--
    }
    ALL_PRODUCTS_LENGTH = newLength
    console.log('ALL_PRODUCTS_LENGTH: ' + ALL_PRODUCTS_LENGTH)
    // console.log(homePageProducts);
    return res.send(JSON.stringify(homePageProducts))

  } catch (err) {
    err.message = err.message || 'There was a problem with product creation'
    console.log(err)
    next(err)
  }
}
exports.addProduct = async (req, res, next) => {
  try {
    if (Object.entries(req.body).length === 0) {
      throw new Error('Request body is empty.')
    }

    if (!req.file) {
      throw new Error('Image did not received.')
    }

    const {
      sn,
      price,
      desc,
      name
    } = req.body
    const image = req.file.path

    const productItemExists = await Product.findOne({ sn: sn })
    if (!productItemExists) {
      const newProduct = new Product({
        sn: sn,
        name: name,
        price: price,
        desc: desc,
        image: image
      })
      await newProduct.save()
      return res.status(200).json({
        message: `Product: ${name} created successfully.`,
      })
    } else {
      throw new Error('Product already exist!')
    }
  } catch (err) {
    err.message = err.message || 'There was a problem with product creation'
    next(err)
  }
}

exports.addNewProduct = async (req, res, next) => {
  const fn = CTRL_NAME + '::addNewProduct'

  try {
    if (Object.entries(req.body).length === 0) {
      throw new Error('Request body is empty.')
    }

    if (!req.files) {
      throw new Error('Image did not received.')
    }

    const {
      sn,
      storeID,
      name,
      desc,
      price,
      stock,
      fakeDB
    } = req.body
    const parseFromJson = fakeDB ? stock : JSON.parse(stock)
    const image = fakeDB ? req.file.path : req.files.map(file => file.path);
    let labelWithDup = setLabelByProductName(name, desc, stock);
    if (fakeDB) {
    } else {
      const reqLabel = req.body.label;
      const parseLabel = JSON.parse(reqLabel);
      console.log(parseLabel);
      const lbl = labelWithDup.concat(parseLabel);
      labelWithDup = lbl;
      console.log(labelWithDup);
    }
    const label = removeDuplicates(labelWithDup);
    const productDBObj = await Product.findOne({
      sn: sn,
      storeID: storeID
    })

    if (productDBObj) {
      next(new Error(`${fn}: this product already exist in db:
			product name: ${name}
			product sn: ${sn}
			storeID: ${storeID},
			stock: ${stock}`))
    } else {
      const newProductInDB = new Product({
        sn: sn,
        storeID: storeID,
        name: name,
        desc: desc,
        price: price,
        image: image,
        stock: parseFromJson,
        label: label
      })

      await newProductInDB.save()

      const productDetailsMsg = `product name: ${name}
				product sn: ${sn}
				storeID: ${storeID}
				desc: ${desc},
				price: ${price},
				stock: ${stock}`

      const responseMsg = `${fn}: new product has successfully created:`
        + productDetailsMsg

      //console.log(responseMsg);

      // next(res.status(200).json({
      // 	message: responseMsg
      // }));
      next()
    }

  } catch (err) {
    err.message = (`${fn}: ` + err.message) ||
      (`${fn}: failed to create new Product`)

    next(err)
  }
}
exports.editProduct = async (req, res, next) => {

  const fn = CTRL_NAME + '::editProduct'

  try {

    let updateImages = Object.entries(req.files).length === 0 ? false : true
    if (Object.entries(req.body).length === 0) {
      throw new Error('Request body is empty.')
    }

    const {
      sn,
      storeID,
      name,
      desc,
      price,
      stock,
      label
    } = req.body

    const productDBObj = await Product.findOne({ sn: sn, storeID: storeID })
    const parseStockFromJson = JSON.parse(stock)
    const parseLabelFromJson = JSON.parse(label);

    if (!productDBObj) {
      next(new Error(`${fn}: product does not exist in DB!`))
    }
    const image = updateImages ? req.files.map(file => file.path) : productDBObj.image
    await productDBObj.updateOne({
      name: name,
      desc: desc,
      price: price,
      image: image,
      stock: parseStockFromJson,
      label: parseLabelFromJson
    })

    await productDBObj.save()

    const productDetailsMsg = `product name: ${name}
				product sn: ${sn}
				storeID: ${storeID}
				desc: ${desc},
				price: ${price},
				stock ${stock}`

    const responseMsg = `${fn}: product was successfully updated:`
      + productDetailsMsg

    console.log(responseMsg)

    next()
  } catch (err) {
    err.message = err.message ||
      (`${fn}: failed to update product Product`)

    next(err)
  }
}

exports.deleteProduct = async (req, res, next) => {
  const fn = CTRL_NAME + '::deleteProduct'

  try {

    if (Object.entries(req.body).length === 0) {
      throw new Error('Request body is empty.')
    }

    const {
      sn,
      storeID
    } = req.body

    const productDBObj = await Product.findOne({
      sn: sn,
      storeID: storeID
    })

    if (!productDBObj) {
      next(new Error(`${fn}: product does not exist in DB!`))
    }

    const productDetailsMsg = `	product sn: ${sn}
			storeID: ${storeID}`

    await Product.deleteOne({ sn: sn, storeID: storeID })

    return res.status(200).json({
      message: 'product successfully deleted from DB:'
        + productDetailsMsg
    })
  } catch (err) {
    err.message = (`${fn}: ` + err.message) ||
      (`${fn}: Failed to delete product from DB!`)

    next(err)
  }
}

exports.deleteAllProducts = async (req, res, next) => {
  try {
    if (Object.entries(req.body).length === 0) {
      throw new Error('Request body is empty.')
    }
    console.log(`Login:: name:  ${name}
price: ${price}
desc:  ${desc}
sn:    ${sn}`)

    //get all product by user
    const storeID = req.body.storeID

  } catch (err) {
    err.message = err.message || 'There was a problem with product creation'
    next(err)
  }
}
exports.deleteAllProductsBelongsToStore = async (req, res, next) => {
  const fn = CTRL_NAME + ':deleteAllProductsFromStore'

  try {
    const {
      storeID,
      name
    } = req.body

    // const storeDBObj = await Store.findOne({ storeID: storeID });

    // if (!storeDBObj) {
    // 	next(new Error("Store isn't exists in DB!"));
    // }

    const result = Product.deleteMany({ storeID: storeID })
    const numOfDeletedItems = (await result).deletedCount

    console.log(`${fn}: ${numOfDeletedItems} deleted from DB!`)

    next()

  } catch (err) {
    err.message = err.message ||
      `${fn}: Failed to delete store products from DB!`

    next(err)
  }

}
exports.addAllDBProducts = async (req, res, next) => {
  const fn = CTRL_NAME + '::addAllDBProducts'
  try {

    console.log('-------------------------------------')
    console.log(`${fn}: ${req}`)
    let i = 1
    await appDB['products'].forEach((singleProduct) => {
      req.body = singleProduct
      req.files = {}
      req.file = {}
      req.file.path = singleProduct.image
      this.addNewProduct(req, res, next)
      console.log(`${fn}: ${i}`)
      i++
    })

    //next();
    return res.status(200)
  } catch (err) {
    err.message = (`${fn}: ` + err.message) ||
      (`${fn}: failed to add new db Products`)

    next(err)
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

exports.getProduct = async (req, res, next) => {
  const fn = CTRL_NAME + '::getProduct'
  try {
    const { sn, storeID } = req.query

    if (!sn || !storeID) {
      throw new Error('Please enter serial number and storeID')
    }

    const productDBObj = await Product.findOne({
      sn: sn,
      storeID: storeID
    })

    if (!productDBObj) {
      throw new Error(`Product: ${sn} did not exist in store: ${storeID}`)
    }

    return res.status(200).json(productDBObj)
  } catch (err) {
    err.message = err.message || (`${fn}: failed to add new db Products`)
    next(err)
  }
}

exports.getProductsList = async (req, res, next) => {
  const fn = CTRL_NAME + '::getProductsList'
  try {
    const products = await Product.find()
    if (!products) {
      throw new Error('Did not found any products')
    }
    let productsNames = products.map(product => product.name)
    productsNames = productsNames.filter((value, index, self) => self.indexOf(value) === index)
    productsNames = productsNames.map(item => {
      return {
        title: item.toLowerCase()
      }
    })

    return res.status(200).json(productsNames)
  } catch (err) {
    err.message = err.message || (`${fn}: failed get products list`)
    next(err)
  }
}

exports.search = async (req, res, next) => {
  const fn = CTRL_NAME + '::search'

  try {
    const query = req.query.searchQuery
    const products = await Product.find()

    if (!products) {
      throw new Error('Did not found any products')
    }
    const productsNames = products.filter((product) => product.name.toLowerCase().includes(query))

    return res.status(200).json(productsNames)
  } catch (err) {
    err.message = err.message || (`${fn}: failed get products list`)
    next(err)
  }
}

exports.getLabelProducts = async (req, res, next) => {
  const fn = CTRL_NAME + '::getLabelProducts'

  try {
    const label = req.query.label
    const products = await Product.find()

    if (!products) {
      throw new Error('Did not found any products')
    }
    const productsNames = products.filter((product) => product.label.includes(label))

    return res.status(200).json(productsNames)
  } catch (err) {
    err.message = err.message || (`${fn}: failed get products list`)
    next(err)
  }
}

exports.getLabels = async (req, res, next) => {
  const fn = CTRL_NAME + '::getLabels'

  try {
    const products = await Product.find()

    if (!products) {
      throw new Error('Did not found any products')
    }

    let labels = []
    products.forEach(product => {
      labels = labels.concat(product.label)
    })
    labels = labels.filter((value, index, self) => self.indexOf(value) === index)

    return res.status(200).json(labels)
  } catch (err) {
    err.message = err.message || (`${fn}: failed get products list`)
    next(err)
  }
}
function setLabelByProductName(name, description, itemStock) {
  const prodName = String(name).toLowerCase();
  const desc = String(description).toLowerCase();
  const stock = String(itemStock.type).toLowerCase();
  const label = [];

  if (String(prodName).includes("computer") || String(desc).includes("computer") || String(prodName).includes("notebook") || String(desc).includes("notebook")) {
    label.push("computer");
    label.push("electrical-equipment");
  }
  if (String(prodName).includes("monitor") || String(desc).includes("monitor")) {
    label.push("monitor");
    label.push("electrical-equipment");
  }
  if (String(prodName).includes("screen") || String(desc).includes("screen")) {
    label.push("screen");
    label.push("electrical-equipment");
  }
  if (String(prodName).includes("keyboard") || String(desc).includes("keyboard")) {
    label.push("keyboard");
    label.push("computer-accessories");
  }
  if (String(prodName).includes("mouse") || String(desc).includes("mouse")) {
    label.push("computer mouse");
    label.push("computer-accessories");
  }
  if (String(prodName).includes("speaker") || String(desc).includes("speaker")) {
    label.push("speaker");
    label.push("electrical-equipment");
    label.push("audio-devices");
  }
  if (String(prodName).includes("headphone") || String(desc).includes("headphone")) {
    label.push("headphones");
    label.push("electrical-equipment");
    label.push("audio-devices");
  }
  if (String(prodName).includes("earbuds") || String(desc).includes("earbuds")) {
    label.push("headphones");
    label.push("electrical-equipment");
    label.push("audio-devices");
  }
  if (String(prodName).includes("headset") || String(desc).includes("headset")) {
    label.push("headphones");
    label.push("electrical-equipment");
    label.push("audio-devices");
  }
  if (String(prodName).includes("soundbar") || String(desc).includes("soundbar")) {
    label.push("soundbar");
    label.push("electrical-equipment");
    label.push("audio-devices");
  }
  if ((String(prodName).includes("phone") || String(desc).includes("phone")) && !label.includes("headphones")) {
    label.push("phone");
    label.push("electrical-equipment");
  }
  if (String(prodName).includes("tv") || String(desc).includes("tv") || String(prodName).includes("television") || String(desc).includes("television")) {
    label.push("tv");
    label.push("television");
    label.push("electrical-equipment");
  }
  if (String(prodName).includes("pot") || String(desc).includes("pot")) {
    label.push("pot");
    label.push("kitchen-tools");
  }
  if (String(prodName).includes("knife") || String(desc).includes("knife")) {
    label.push("knife");
    label.push("kitchen-tools");
  }
  if (String(prodName).includes("placement") || String(desc).includes("placement")) {
    label.push("placement");
    label.push("kitchen-tools");
  }
  if ((String(prodName).includes("table") || String(desc).includes("table")) &&
    (!String(desc).includes("portable") && !String(desc).includes("mountable"))) {
    label.push("table");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("wood") || String(desc).includes("wood")) {
    label.push("wood");
    label.push("art");
  }
  if (String(prodName).includes("chair") || String(desc).includes("chair")) {
    label.push("chair");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("shelf") || String(desc).includes("shelf")) {
    label.push("shelf");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("footstool") || String(desc).includes("footstool")) {
    label.push("footstool");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("carpet") || String(desc).includes("carpet")) {
    label.push("carpet");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("partition") || String(desc).includes("partition")) {
    label.push("partition");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("dresser") || String(desc).includes("dresser")) {
    label.push("dresser");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("lamp") || String(desc).includes("lamp")) {
    label.push("lamp");
    label.push("home-design");
    label.push("furniture");
  }
  if (String(prodName).includes("shoe") || String(desc).includes("shoe")) {
    label.push("shoe");
    label.push("fashion");
    label.push("fashion-accessories")
  }
  if (String(prodName).includes("trainer") || String(desc).includes("trainer")) {
    label.push("trainers");
    label.push("shoe");
    label.push("fashion");
    label.push("fashion-accessories")
  }
  if ((String(prodName).includes("boot") || String(desc).includes("boot")) && String(stock).includes("size")) {
    label.push("boots");
    label.push("shoe");
    label.push("fashion");
    label.push("fashion-accessories")
  }
  if (String(prodName).includes("shirt") || String(desc).includes("shirt")) {
    label.push("shirt");
    label.push("fashion");
  }
  if (String(prodName).includes("hoodie") || String(desc).includes("hoodie")) {
    label.push("hoodie");
    label.push("fashion");
  }
  if (String(prodName).includes("sandal") || String(desc).includes("sandal")) {
    label.push("sandal");
    label.push("shoe");
    label.push("fashion");
  }
  if ((String(prodName).includes("sliders") || String(desc).includes("sliders")) && String(stock).includes("size")) {
    label.push("flipflops");
    label.push("sliders");
    label.push("fashion");
  }
  if ((String(prodName).includes("flops") || String(desc).includes("flops")) && String(stock).includes("size")) {
    label.push("flipflops");
    label.push("sliders");
    label.push("fashion");
  }
  if (!String(desc).includes("monitor") && !String(desc).includes("screen") && !String(desc).includes("tv") && String(stock).includes("size")) {
    label.push("fashion");
  }
  if (String(prodName).includes("shorts") || String(desc).includes("shorts")) {
    label.push("shorts");
    label.push("fashion");
  }
  if (String(prodName).includes("trousers") || String(desc).includes("trousers")) {
    label.push("trousers");
    label.push("fashion");
  }
  if (String(prodName).includes("saw") || String(desc).includes("saw")) {
    label.push("saw");
    label.push("working-tools");
    label.push("wood");
    label.push("art");
  }
  if (String(prodName).includes("hammer") || String(desc).includes("hammer")) {
    label.push("hammer");
    label.push("working-tools");
  }
  if (String(prodName).includes("screws") || String(desc).includes("screws")) {
    label.push("screws");
    label.push("working-tools");
    label.push("wood");
    label.push("art");
  }
  if (String(prodName).includes("drill") || String(desc).includes("drill")) {
    label.push("drill");
    label.push("working-tools");
    label.push("wood");
    label.push("art");
    label.push("electrical-equipment");
  }
  if (String(prodName).includes("router") || String(desc).includes("router")) {
    label.push("router");
    label.push("working-tools");
    label.push("wood");
    label.push("art");
    label.push("electrical-equipment");
  }
  if (String(prodName).includes("pliers") || String(desc).includes("pliers")) {
    label.push("pliers");
    label.push("working-tools");
  }
  if (String(prodName).includes("measure") || String(desc).includes("measure")) {
    label.push("measure");
    label.push("working-tools");
  }
  if (String(prodName).includes("glue") || String(desc).includes("glue")) {
    label.push("wood-glue");
    label.push("working-tools");
  }
  return label;
}

function removeDuplicates(arr) {
  const labels = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
  return labels;
}
