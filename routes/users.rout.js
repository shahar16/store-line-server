const express = require('express')
const userController = require('../controllers/users.controller')
const cartController = require('../controllers/cart.controller')
const storeController = require('../controllers/store.controller')
const orderController = require('../controllers/order.controller')

const router = express.Router()
const isAuth = require('../middlewares/isAuth')

router.post('/editUser', isAuth, userController.editUser)
router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/seedUsers', isAuth, userController.seedUsers)//router.post('/deleteUsers', isAuth, controller.removeAllUsersFromDb);
router.post('/deleteUsers', userController.removeAllUsersFromDb)
router.post('/addDbUsers', userController.addDbUsers)

/**
 * cart routes
 */
router.post('/addtocart', isAuth, cartController.addToCart, storeController.updateProduct)
router.post('/removefromcart', isAuth, cartController.removeFromCart, storeController.updateProduct)
router.post('/editcartitems', isAuth, cartController.editCartItems, storeController.updateProduct)
router.get('/getcart', isAuth, cartController.getCart)
router.post('/deletedbcarts', cartController.deleteDBCartItems)

/**
 * order routes
 */
router.post('/placeorder', isAuth, orderController.placeOrder)
router.get('/getorder', isAuth, orderController.getOrder)
router.get('/getuserorders', isAuth, orderController.getOrdersSummary)


module.exports = router