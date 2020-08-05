const Product = require('../models/product.model');

exports.seedProducts = async (req, res, next) => {
    console.log("Seed Products");
    try {
        const products = [];
        for (let i = 1, j = 1; i <= 20; i++) {
            const price = (i * 20).toString();
            const newSn = (i * 12) + 4;
            const newStoreID = j.toString();
            let singleProd = { name: `no.${i}`, desc: "none", price: price + "$", image: "uploads/dummy@gmail.com-2955-pic1.jpg", sn: newSn.toString(), storeID: newStoreID };
            if (i % 5 == 0) {
                j++;
            }
            products.push(singleProd);
        }

        products.forEach(async el => {
            const proExists = await Product.findOne({ sn: el.sn, storeID: el.storeID });
            if (proExists) {
                console.log(`Product: ${el.name} is already exists.`)
            }
            const newProduct = new Product({
                sn: el.sn,
                name: el.name,
                desc: el.desc,
                price: el.price,
                image: el.image,
                storeID: el.storeID
            });

            try {
                await newProduct.save();

            } catch (err) {
                err.message = "There was a problem with Seeding dummy products.";
                next(err);
            }
        });


        return res.status(200).json({
            message: "Seed dummy products to DB."
        });
    }
    catch (e) {
        e.message = "Failed to add Seed products";
        console.log(e.message);
        next(e);
    }
};

exports.removeAllProductsFromDb = async (req, res, next) => {
    console.log("Remove all products from DB");

    try {
        await Product.deleteMany({});
    } catch (e) {
        e.message = "Failed to remove all products from DB";
        console.log(e.message);
        next(e);
    }

    return res.status(200).json({
        message: "Removed all products from DB."
    });
};
