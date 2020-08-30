const express = require('express');
const controller = require('../controllers/product.controller');

const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const uploadImage = require("../middlewares/uploadImage");

//TODO: add isAuth
//TODO: delete dummyIsAouth
// router.post('/addProduct', dummyIsAuth, uploadImage, controller.addProduct);
// router.post('/editProduct', controller.editProduct);
// router.post('/deleteProduct', controller.deleteProduct);
router.get('/getHomePageProducts', controller.getHomePageProducts);
router.get('/getProduct', controller.getProduct);
router.get('/getProductsList', controller.getProductsList);
router.get('/search', controller.search);


module.exports = router