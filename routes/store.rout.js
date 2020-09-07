const express = require('express')
const storeController = require('../controllers/store.controller')
const productController = require('../controllers/product.controller')

const router = express.Router()
const isAuth = require('../middlewares/isAuth')
const uploadImages = require('../middlewares/uploadImage')

router.post('/addStore', isAuth, uploadImages, storeController.addNewStore)
router.get('/getStore', storeController.getStore)
router.post('/addStore', isAuth, uploadImages, storeController.addNewStore)
router.post('/deleteStore', isAuth, productController.deleteAllProductsBelongsToStore, storeController.deleteStore)
router.post('/editStore', isAuth, uploadImages, storeController.editStoreDetails)
router.post('/addProduct', isAuth, uploadImages, productController.addNewProduct, storeController.addProductToStore)
router.post('/deleteProduct', isAuth, storeController.deleteProduct, productController.deleteProduct,)
router.post('/editProduct', isAuth, uploadImages, productController.editProduct, storeController.updateProduct)
router.post('/deleteAllProducts', storeController.deleteAllProductsFromStore)
router.post('/deleteDbStores', storeController.deleteDbStores)
router.post('/addDBProducts', productController.addAllDBProducts, storeController.addDbProductsToStores)

router.post('/addDBStores', storeController.addDbStores)
router.get('/getStoresByUser', isAuth, storeController.getStoresByUser)
router.get('/getOwner', storeController.getOwner)

module.exports = router