const CTRL_NAME = "cart.controller";

const Cart = require('../models/cart.model');
const User = require("../models/user.model");
const Store = require("../models/store.model");
const Product = require("../models/product.model");
const CartProduct = require("../models/cartProduct.model");
const { v4: uuidv4 } = require('uuid');
const REDUCE = "reduce";
const ADD = "add";
const EDIT = "edit";

exports.getCart = async (req, res, next) => {
    const fn = CTRL_NAME + "::getCart";

    try {
        const userEmail = req.userEmail;

        const userDBObj = await User.findOne({ email: userEmail });

        if (!userDBObj.cartID) {
            next(new Error(`${fn}: failed to locate a cart for ${userDBObj.email}!`));
        }

        const cartDBObj = await Cart.findOne({ id: userDBObj.cartID });

        if (!cartDBObj) {
            next(new Error(`${fn}: cart no. ${userDBObj.cartID} is no longer exist in db!`));
        }

        return res.send(JSON.stringify(cartDBObj));
    } catch (err) {
        err.message = err.message ||
            `${fn}: Failed to get cart!`;

        next(new Error(err));
    }
}

exports.addToCart = async (req, res, next) => {
    const fn = CTRL_NAME + "::addToCart";
    try {

        if (Object.entries(req.body).length === 0) {
            next(new Error("Request body is empty."));
        }

        const {
            sn,
            storeID,
            categoryName,
            quantity
        } = req.body;

        const userDBObj = await User.findOne({ email: req.userEmail });
        console.log(userDBObj);
        const productDBObj = await Product.findOne({ sn: sn, storeID: storeID });

        if (!productDBObj) {
            next(new Error(`${fn}: product is no longer exist in db!`));
        }

        console.log(`${fn}: checking cart id .....`);

        const cartDBObj = userDBObj.cartID === "" ? await Cart.findOne({ id: userDBObj.cartID }) : await createNewCartObj();

        console.log(`${fn}: FINISHED checking cart id .....`);

        const cartProd = await createCartProdDBObj(cartDBObj, productDBObj, categoryName, quantity);
        await cartDBObj.products.push(cartProd);
        await cartDBObj.save();

        await userDBObj.updateOne({
            cartID: cartDBObj.id
        })

        console.log(`${fn}: product added to cart successfully!`);
        next();

    } catch (err) {
        err.message = err.message ||
            `${fn}: Failed to add new product to Cart!`;

        next(new Error(err));
    }
}

exports.removeFromCart = async (req, res, next) => {
    const fn = CTRL_NAME + "::removeFromCart";
    try {
        if (Object.entries(req.body).length === 0) {
            next(new Error("Request body is empty."));
        }

        const {
            id,
            sn,
            storeID,
            categoryName,
            quantity
        } = req.body;

        const cartProduct = await CartProduct.findOne({ id: id });

        if (!cartProduct) {
            next(new Error(`${fn}: cart product doesn't exist in db!`));
        }

        const userDBObj = await User.findOne({ email: req.userEmail });
        const productDBObj = await Product.findOne({ sn: sn, storeID: storeID });

        if (!productDBObj) {
            next(new Error(`${fn}: product is no longer exist in db!`));
        }

        if (!userDBObj.cartID) {
            next(new Error(`${fn}: failed to locate a cart for ${userDBObj.email}!`));
        }

        const cartDBObj = await Cart.findOne({ id: userDBObj.cartID });

        if (!cartDBObj) {
            next(new Error(`${fn}: cart no. ${userDBObj.cartID} is no longer exist in db!`));
        }

        await updateProductStock(productDBObj, categoryName, quantity, ADD);

        await updateCartItems(cartDBObj, cartProduct);

        await CartProduct.deleteOne({ id: cartProduct.id });

        console.log(`${fn}: product ${productDBObj.name} removed from cart successfully!`);

        next();

    } catch (err) {
        err.message = err.message ||
            `${fn}: Failed to remove product from Cart!`;

        next(new Error(err));
    }
}

exports.editCartItems = async (req, res, next) => {
    const fn = CTRL_NAME + "::editCartItems";
    try {
        if (Object.entries(req.body).length === 0) {
            next(new Error("Request body is empty."));
        }

        const {
            id,
            sn,
            storeID,
            categoryName,
            quantity
        } = req.body;

        console.log(`${fn}: cartProd id: ` + id);
        const cartProduct = await CartProduct.findOne({ id: id });
        console.log(`${fn}: cartProd id: ` + id);

        if (!cartProduct) {
            next(new Error(`${fn}: cart product doesn't exist in db!`));
        }

        const userDBObj = await User.findOne({ email: req.userEmail });
        const productDBObj = await Product.findOne({ sn: sn, storeID: storeID });

        if (!productDBObj) {
            next(new Error(`${fn}: product is no longer exist in db!`));
        }

        if (!userDBObj.cartID) {
            next(new Error(`${fn}: failed to locate a cart for ${userDBObj.email}!`));
        }

        const cartDBObj = await Cart.findOne({ id: userDBObj.cartID });

        if (!cartDBObj) {
            next(new Error(`${fn}: cart no. ${userDBObj.cartID} is no longer exist in db!`));
        }

        await updateProductStock(productDBObj, categoryName, cartProduct.quantity, quantity);
        console.log(`${fn}: quantity = ` + quantity);
        await cartProduct.updateOne(
            { quantity: quantity });
        const updatedObj = await CartProduct.findOne({ id: cartProduct.id });
        await updateCartItems(cartDBObj, updatedObj, EDIT);

        console.log(`${fn}: cart product: ${productDBObj.name} updated successfully!`);

        next();

    } catch (err) {
        err.message = err.message ||
            `${fn}: Failed to remove product from Cart!`;

        next(new Error(err));
    }
}



async function createNewCartObj() {
    const fn = CTRL_NAME + "::createNewCartObj";
    const newCartDBObj = new Cart({
        id: uuidv4()
    });
    console.log(`${fn}: new cart has been created, cartID: ${newCartDBObj.id}`);
    await newCartDBObj.save();
    return newCartDBObj;
}

async function createCartProdDBObj(cartDBObj, productDBObj, categoryName, quantity) {
    const fn = CTRL_NAME + "::createCartProdDBObj";
    const newCartProdDBObj = new CartProduct({
        id: uuidv4(),
        cartID: cartDBObj.id,
        sn: productDBObj.sn,
        storeID: productDBObj.storeID,
        name: productDBObj.name,
        desc: productDBObj.desc,
        price: productDBObj.price,
        image: productDBObj.image,
        categoryName: categoryName,
        quantity: quantity
    });
    console.log(`${fn}: new cart product has been created, cartID: ${newCartProdDBObj.id}`);
    await newCartProdDBObj.save();
    await updateProductStock(productDBObj, categoryName, 0, quantity, REDUCE);
    return newCartProdDBObj;
}

async function updateProductStock(productDBObj, categoryName, oldQuantity, quantity, action) {
    const fn = CTRL_NAME + "::updateProductStock";

    const updatedStock = productDBObj.stock;
    if (action === REDUCE) {
        console.log("reducing...");
        updatedStock.quantities[categoryName] = updatedStock.quantities[categoryName] - quantity;
    } else if (action === ADD) {
        console.log("adding...");
        updatedStock.quantities[categoryName] = updatedStock.quantities[categoryName] + quantity;
    } else { //called from editCartItems
        console.log("editing...");
        const diff = oldQuantity - quantity;
        updatedStock.quantities[categoryName] += diff;
    }

    await productDBObj.updateOne({
        $set: { stock: updatedStock }
    })

}

async function updateCartItems(cartDBObj, cartProduct, action) {
    const fn = CTRL_NAME + "::updateCartItems";
    const cartProdArr = [];

    for (let i = 0; i < cartDBObj.products.length; i++) {
        const singleProd = cartDBObj.products[i];
        if (singleProd.id != cartProduct.id) {
            cartProdArr.push(singleProd);
        } else if (action === EDIT) {
            console.log(`${fn}: insert updated cart product`);
            cartProdArr.push(cartProduct);
        }
    }
    await cartDBObj.updateOne(
        {
            $set: { products: cartProdArr }
        });
}

async function changeProductQuantity(cartDBObj, sn, newQuantity) {
    const cartProdArr = [];

    for (let i = 0; i < cartDBObj.products.length; i++) {
        const singleProd = cartDBObj.products[i];
        if (singleProd.sn != sn) {
            cartProdArr.push(singleProd);
        }
        else {
            if (newQuantity > 0) {
                cartProdArr.push({
                    productItem: singleProd.productItem,
                    quantity: newQuantity
                })
            }
        }
    }

    await cartDBObj.updateOne(
        {
            $set: { products: cartProdArr }
        });
}
