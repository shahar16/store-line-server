const Product = require('../models/product.model')
const CTRL_NAME = 'labels.controller'

exports.getSimilarProducts = async function (req, res, next) {
    const fn = CTRL_NAME + "::getSimilarProducts"

    try {
        const { sn, storeID } = req.query
        const prodDBObj = await Product.findOne({ sn: sn, storeID: storeID });

        if (!prodDBObj) {
            next(new Error(`${fn}: product does not exist in DB!`))
        }

        const prodLabels = prodDBObj.label;
        const allProducts = await Product.find();
        let similarProductsArr = [];
        let minIdx = -1;
        let idx = 0
        allProducts.forEach(singleProd => {
            if (singleProd.id != prodDBObj.id) {
                const similarProdLabels = singleProd.label;
                let rank = 0;
                rank += getRankByLabelsMatch(prodLabels, similarProdLabels);
                if (similarProductsArr.length < 10) {
                    if (rank > 0) {
                        if (minIdx < 0) {
                            minIdx = 0;
                        } else {
                            if (similarProductsArr[minIdx]['rank'] > rank) {
                                minIdx = idx
                                idx++
                            }
                        }
                        similarProductsArr.push({
                            product: singleProd,
                            rank: rank
                        })
                    }
                } else {
                    if (similarProductsArr[minIdx]['rank'] < rank) {
                        const newArrProd = {
                            product: singleProd,
                            rank: rank
                        }
                        similarProductsArr[minIdx] = newArrProd
                        minIdx = findMinIdx(similarProductsArr)
                    }

                }
            }
        })
        //TODO: sort by rank
        return res.status(200).json(similarProductsArr);
    } catch (err) {
        err.message = err.message ||
            (`${fn}: failed to fetch similar products`)

        next(err)
    }
}

function getRankByLabelsMatch(currProdLabels, similarProdLabels) {
    let rank = 0;
    for (let i = 0; i < currProdLabels.length; i++) {
        for (let j = 0; j < similarProdLabels.length; j++) {
            if (currProdLabels[i] === similarProdLabels[j]) {
                rank++
            }
        }
    }
    return rank
}

function findMinIdx(similarProductsArr) {
    let minIdx = 0;
    for (let i = 1; i < similarProductsArr.length; i++) {
        if (similarProductsArr[minIdx]['rank'] > similarProductsArr[i]['rank']) {
            minIdx = i;
        }
    }
    return minIdx;
}