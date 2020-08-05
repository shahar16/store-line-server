const express = require('express');
const storeController = require('../controllers/store.controller');
const productController = require('../controllers/product.controller');


const router = express.Router();
const isAuth = require("../middlewares/isAuth");

//TODO: add isAuth
router.post('/addStore', storeController.addStore);
router.post('/deleteStore', storeController.deleteStore);
router.post('/editStore', storeController.editStore);
router.post('/addProduct', productController.addNewProduct, storeController.addProductToStore);
router.post('/deleteProduct', storeController.DeleteSingleProduct);
router.post('/deleteAllProducts', storeController.deleteAllProductsFromStore);


module.exports = router