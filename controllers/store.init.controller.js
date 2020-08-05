const Store = require('../models/store.model');

exports.seedStores = async (req, res, next) => {
    console.log("seed stores");

    try {
        let stores = [];
        for (let i = 1; i <= 5; i++) {
            const newStoreID = i.toString();
            let singleStore = { name: `store no.${i}`, storeID: newStoreID, desc: "online store", logo: "logo", contact: "none", owner: "shaharyig@gmail.com" };
            stores.push(singleStore);
        }

        for (let i = 0; i < 5; i++) {
            const storeExists = await Store.findOne({ storeID: stores[i].storeID });
            //console.log(`storeExists: ${storeExists}`);
            if (storeExists) {
                console.log("1");
                throw new Error(`Store: ${stores[i].name} is already exists!`);
            }
            const newStore = new Store({
                contact: stores[i].contact,
                name: stores[i].name,
                desc: stores[i].desc,
                logo: stores[i].logo,
                storeID: stores[i].storeID,
                owner: stores[i].owner
            });
            await newStore.save();
            console.log(`new store ${stores[i].storeID} has been created`);
        }

        return res.status(200).json({
            message: "Seed dummy stores added to DB."
        });
    }
    catch (err) {
        console.log("3");
        err.message = err.message || "Failed to add seed Stores to DB";
        //console.log(err.message);
        next(err);
    }
};

exports.removeAllStoresFromDb = async (req, res, next) => {
    console.log("Remove all stores from DB");

    try {
        await Store.deleteMany({});
    } catch (e) {
        e.message = "Failed to remove all stores from DB";
        console.log(e.message);
        next(e);
    }

    return res.status(200).json({
        message: "Removed all stores from DB."
    });
};