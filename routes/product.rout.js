const express = require('express')
const controller = require('../controllers/product.controller')

const router = express.Router()

router.get('/getHomePageProducts', controller.getHomePageProducts)
router.get('/getProduct', controller.getProduct)
router.get('/getProductsList', controller.getProductsList)
router.get('/search', controller.search)
router.get('/getLabels', controller.getLabels)

module.exports = router