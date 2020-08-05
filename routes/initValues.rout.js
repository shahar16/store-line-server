const express = require('express');
const userController = require('../controllers/users.controller');
const productController = require('../controllers/products.init.controller');
const storeController = require('../controllers/store.init.controller');

const router = express.Router();

router.post('/createTestEnv', userController.seedUsers, storeController.seedStores, productController.seedProducts);
router.post('/addSeedUsers', userController.seedUsers);
router.post('/addSeedStores', storeController.seedStores);
router.post('/addSeedProducts', productController.seedProducts);
router.post('/deleteTestEnv', productController.removeAllProductsFromDb, storeController.removeAllStoresFromDb, userController.removeAllUsersFromDb);
router.post('/deleteSeedUsers', userController.removeAllUsersFromDb);
router.post('/deleteSeedStores', storeController.removeAllStoresFromDb);
router.post('/deleteSeedProducts', productController.removeAllProductsFromDb);

module.exports = router;