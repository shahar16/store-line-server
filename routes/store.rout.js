const express = require('express');
const controller = require('../controllers/store.controller');

const router = express.Router();
const isAuth = require("../middlewares/isAuth");

//TODO: add isAuth
router.post('/addStore', controller.addStore);
router.post('/deleteStore', controller.deleteStore);
router.post('/editStore', controller.editStore);
router.post('/addProduct', controller.addProduct);
router.post('/deleteProduct', controller.DeleteSingleProduct);
router.post('/deleteAllProducts', controller.deleteAllProductsFromStore);


module.exports = router