const express = require('express');
const storeController = require('../controllers/store.controller');
const productController = require('../controllers/product.controller');
const userController = require('../controllers/users.controller');


const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const { route } = require('./users.rout');

//TODO: add isAuth
router.post('/addStore', storeController.addNewStore);
router.post('/deleteStore', productController.deleteAllProductsBelongsToStore, storeController.deleteStore);
router.post('/editStore', storeController.editStoreDetails);
router.post('/addProduct', productController.addNewProduct, storeController.addProductToStore);
router.post('/deleteProduct', storeController.deleteProduct, productController.deleteProduct,);
router.post('/editProduct', productController.editProduct, storeController.updateProduct);
router.post('/deleteAllProducts', storeController.deleteAllProductsFromStore);
router.post('/deleteDbStores', storeController.deleteDbStores);
router.post('/addDBProducts', productController.addAllDBProducts, storeController.addDbProductsToStores);
// router.post('/addDBProducts', productController.addAllDBProducts);
// router.post('/addDBProducts', storeController.addDbProductsToStores);
router.post('/addDBStores', storeController.addDbStores);

module.exports = router