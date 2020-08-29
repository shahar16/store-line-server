const express = require('express');
const controller = require('../controllers/users.controller');

const router = express.Router();
const isAuth = require("../middlewares/isAuth");

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/seedUsers', isAuth, controller.seedUsers);//router.post('/deleteUsers', isAuth, controller.removeAllUsersFromDb);
router.post('/deleteUsers', controller.removeAllUsersFromDb);
router.post('/addDbUsers', controller.addDbUsers);
router.post('/editUser', controller.editUser);
//TODO: deleteuser -> deleteStore -> deleteProductsInStore



module.exports = router