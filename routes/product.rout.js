const express = require('express')
const productController = require('../controllers/product.controller')
const labelsController = require('../controllers/labels.controller')

const router = express.Router()

router.get('/getHomePageProducts', productController.getHomePageProducts)
router.get('/getProduct', productController.getProduct)
router.get('/getProductsList', productController.getProductsList)
router.get('/search', productController.search)
router.get('/getLabels', productController.getLabels)
router.get('/getSimilarProducts', labelsController.getSimilarProducts)


module.exports = router