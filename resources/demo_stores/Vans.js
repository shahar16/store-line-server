const imagesPrefix = 'uploads/images/Vans'
const shortid = require('shortid')
const storeID = shortid.generate()

const Vans = {
    store: {
        storeID: storeID,
        name: 'Vans Official store',
        owner: 'danielahrak@gmail.com',
        desc: 'Vans fashion Store',
        products: {},
        image: [
            `${imagesPrefix}/EdgeTable/il_794xN.1857962939_h6c0.jpg`,
            `${imagesPrefix}/EdgeTable/il_794xN.1857974595_6zte.jpg`,
            `${imagesPrefix}/EdgeTable/il_794xN.1857978775_e40e.jpg`,
            `${imagesPrefix}/EdgeTable/pic3.jpg`
        ],
        contact: {
            email: 'danielahrak@gmail.com',
            phoneNumber: '0555555',
            adress: {
                city: 'Tel Aviv',
                street: 'Haim Havshush 12',
                houseNum: 12,
            }
        },
        fakeDB: true
    },

    products: {
        ROSETSHIRT: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Vans Rose T-Shirt',
            desc: 'KYLE WALKER CLASSIC ROSE T-SHIRT',
            price: 119.99,
            image: [
                `${imagesPrefix}/t1/pic1.png`,
                `${imagesPrefix}/t1/pic2.png`,
                `${imagesPrefix}/t1/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        CHECKERBOARDTSHIRT: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Vans CHECKERBOARD T-Shirt',
            desc: 'KYLE WALKER CHECKERBOARD T-SHIRT',
            price: 119.99,
            image: [
                `${imagesPrefix}/t2/pic1.png`,
                `${imagesPrefix}/t2/pic2.png`,
                `${imagesPrefix}/t2/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        LONGSLEEVESHIRT: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Vans LONG SLEEVE SHIRT',
            desc: 'KYLE WALKER LONG SLEEVE SHIRT',
            price: 189.99,
            image: [
                `${imagesPrefix}/s2/pic1.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        CHICKENWAFFELSTSHIRT: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Vans CHICKEN & WAFFLE T-SHIRT',
            desc: 'VANS X SHAKE JUNT CHICKEN & WAFFLE T-SHIRT',
            price: 119.99,
            image: [
                `${imagesPrefix}/t4/pic1.png`,
                `${imagesPrefix}/t4/pic2.png`,
                `${imagesPrefix}/t4/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        SIMPSONSTSHIRT: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Vans SIMPSONS T-SHIRT',
            desc: 'VANS SIMPSONS X VANS FAMILY T-SHIRT',
            price: 119.99,
            image: [
                `${imagesPrefix}/t5/pic1.png`,
                `${imagesPrefix}/t5/pic2.png`,
                `${imagesPrefix}/t5/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        SIMPSONSSHIRT: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Vans SIMPSONS SHIRT',
            desc: 'THE SIMPSONS X VANS HOUSER BUTTONDOWN SHIRT',
            price: 189.99,
            image: [
                `${imagesPrefix}/s1/pic1.png`,
                `${imagesPrefix}/s1/pic2.png`,
                `${imagesPrefix}/s1/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        SIMPSONSHOODIE: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Vans SIMPSONS Hoodie',
            desc: 'THE SIMPSONS X VANS BART PULLOVER HOODIE',
            price: 189.99,
            image: [
                `${imagesPrefix}/h1/pic1.png`,
                `${imagesPrefix}/h1/pic2.png`,
                `${imagesPrefix}/h1/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        NATIONALGEOGRAPHIC: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'VANS X NATIONAL GEOGRAPHIC T-SHIRT',
            desc: 'Vans and National Geographic come together for a collection of footwear and apparel that celebrates over 130 years of the never-ending quest to explore our planet',
            price: 189.99,
            image: [
                `${imagesPrefix}/t6/pic1.png`,
                `${imagesPrefix}/t6/pic2.png`,
                `${imagesPrefix}/t6/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    'small': 10,
                    'medium': 10,
                    'large': 10,
                    'X-large': 10
                }
            }
        },
        oldSkullBlack: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'VANS OLD SKOOL BLACK/WHITE',
            desc: 'The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe',
            price: 189.99,
            image: [
                `${imagesPrefix}/os1/pic1.png`,
                `${imagesPrefix}/os1/pic2.png`,
                `${imagesPrefix}/os1/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    '41': 10,
                    '42': 10,
                    '43': 10,
                    '44': 10,
                    '45': 10,
                    '46': 10,
                    '47': 10
                }
            }
        },
        oldSkullYELLOW: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'VANS OLD SKOOL YELLOW/WHITE',
            desc: 'The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe',
            price: 189.99,
            image: [
                `${imagesPrefix}/os2/pic1.png`,
                `${imagesPrefix}/os2/pic2.png`,
                `${imagesPrefix}/os2/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    '41': 10,
                    '42': 10,
                    '43': 10,
                    '44': 10,
                    '45': 10,
                    '46': 10,
                    '47': 10
                }
            }
        },
        oldSkullGRAY: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'VANS OLD SKOOL GRAY/WHITE',
            desc: 'The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe',
            price: 189.99,
            image: [
                `${imagesPrefix}/os3/pic1.png`,
                `${imagesPrefix}/os3/pic2.png`,
                `${imagesPrefix}/os3/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    '41': 10,
                    '42': 10,
                    '43': 10,
                    '44': 10,
                    '45': 10,
                    '46': 10,
                    '47': 10
                }
            }
        },
        oldSkullRED: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'VANS OLD SKOOL RED/WHITE',
            desc: 'The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe',
            price: 189.99,
            image: [
                `${imagesPrefix}/os4/pic1.png`,
                `${imagesPrefix}/os4/pic2.png`,
                `${imagesPrefix}/os4/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    '41': 10,
                    '42': 10,
                    '43': 10,
                    '44': 10,
                    '45': 10,
                    '46': 10,
                    '47': 10
                }
            }
        },
        oldSkullGOLDENHAZE: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'VANS OLD SKOOL GOLDEN HAZE/WHITE',
            desc: 'The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe',
            price: 189.99,
            image: [
                `${imagesPrefix}/os5/pic1.png`,
                `${imagesPrefix}/os5/pic2.png`,
                `${imagesPrefix}/os5/pic3.png`,
            ],
            stock: {
                type: 'size',
                quantities: {
                    '41': 10,
                    '42': 10,
                    '43': 10,
                    '44': 10,
                    '45': 10,
                    '46': 10,
                    '47': 10
                }
            }
        },

    }
}
module.exports = Vans
