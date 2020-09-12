const imagesPrefix = 'uploads/images/Samsung'
const shortid = require('shortid')
const storeID = shortid.generate()

const Samsung = {
    store: {
        storeID: storeID,
        name: 'Samsung Official store',
        owner: 'danielahrak@gmail.com',
        desc: 'Premium phones, Audio devices, monitors and more',
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
        Bar: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung SoundBar HW-Q950T',
            desc: 'Soundbar with Dolby Atmos/DTS:X and Alexa Built-in (2020)',
            price: 5319.99,
            image: [
                `${imagesPrefix}/HW-Q950T/pic1.jpg`,
                `${imagesPrefix}/HW-Q950T/pic2.jpg`,
                `${imagesPrefix}/HW-Q950T/pic3.jpg`,
                `${imagesPrefix}/HW-Q950T/pic4.jpg`,
                `${imagesPrefix}/HW-Q950T/pic5.jpg`,
                `${imagesPrefix}/HW-Q950T/pic6.jpg`
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 10
                }
            }
        },
        AKGN700NC: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'AKG_N700NC',
            desc: 'Over-Ear Foldable Wireless Headphones, Active Noise Cancelling Headphones',
            price: 521.55,
            image: [
                `${imagesPrefix}/AKG_N700NC/pic1.jpg`,
                `${imagesPrefix}/AKG_N700NC/pic2.jpg`,
                `${imagesPrefix}/AKG_N700NC/pic3.jpg`,
                `${imagesPrefix}/AKG_N700NC/pic4.jpg`,
                `${imagesPrefix}/AKG_N700NC/pic5.jpg`,
                `${imagesPrefix}/AKG_N700NC/pic6.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 20,
                    'red': 5,
                    'white': 10
                }
            }
        },
        GalaxyBuds: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Galaxy Buds',
            desc: 'rue Wireless Earbuds (Wireless Charging Case included)',
            price: 181.99,
            image: [
                `${imagesPrefix}/Galaxy_buds/pic1.jpg`,
                `${imagesPrefix}/Galaxy_buds/pic2.jpg`,
                `${imagesPrefix}/Galaxy_buds/pic3.jpg`,
                `${imagesPrefix}/Galaxy_buds/pic4.jpg`,
                `${imagesPrefix}/Galaxy_buds/pic5.jpg`,
                `${imagesPrefix}/Galaxy_buds/pic6.jpg`
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'white': 10
                }
            }
        },
        GalaxyS9256GB: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung Galaxy S9 256GB',
            desc: 'Android-based smartphones unveiled, manufactured, released and marketed by Samsung Electronics ',
            price: 999.99,
            image: [
                `${imagesPrefix}/galaxy_s9/pic1.jpg`,
                `${imagesPrefix}/galaxy_s9/pic2.jpg`,
                `${imagesPrefix}/galaxy_s9/pic3.jpg`,
                `${imagesPrefix}/galaxy_s9/pic4.jpg`,
                `${imagesPrefix}/galaxy_s9/pic5.jpg`,
                `${imagesPrefix}/galaxy_s9/pic6.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'titanium gray': 10,
                    'sunrise gold': 10,

                }
            }
        },
        GalaxyS9128GB: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung Galaxy S9 128GB',
            desc: 'Android-based smartphones unveiled, manufactured, released and marketed by Samsung Electronics ',
            price: 1199.99,
            image: [
                `${imagesPrefix}/galaxy_s9/pic1.jpg`,
                `${imagesPrefix}/galaxy_s9/pic2.jpg`,
                `${imagesPrefix}/galaxy_s9/pic3.jpg`,
                `${imagesPrefix}/galaxy_s9/pic4.jpg`,
                `${imagesPrefix}/galaxy_s9/pic5.jpg`,
                `${imagesPrefix}/galaxy_s9/pic6.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'titanium gray': 10,
                    'sunrise gold': 10,

                }
            }
        },
        GalaxyS964GB: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung Galaxy S9 64GB',
            desc: 'Android-based smartphones unveiled, manufactured, released and marketed by Samsung Electronics',
            price: 999.99,
            image: [
                `${imagesPrefix}/galaxy_s9/pic1.jpg`,
                `${imagesPrefix}/galaxy_s9/pic2.jpg`,
                `${imagesPrefix}/galaxy_s9/pic3.jpg`,
                `${imagesPrefix}/galaxy_s9/pic4.jpg`,
                `${imagesPrefix}/galaxy_s9/pic5.jpg`,
                `${imagesPrefix}/galaxy_s9/pic6.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'titanium gray': 10,
                    'sunrise gold': 10,

                }
            }
        },
        GalaxyS10256GB: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung Galaxy S10 256GB',
            desc: 'Android-based smartphones unveiled, manufactured, released and marketed by Samsung Electronics ',
            price: 1999.99,
            image: [
                `${imagesPrefix}/galaxy_s10/pic1.jpg`,
                `${imagesPrefix}/galaxy_s10/pic2.jpg`,
                `${imagesPrefix}/galaxy_s10/pic3.jpg`,
                `${imagesPrefix}/galaxy_s10/pic4.jpg`,
                `${imagesPrefix}/galaxy_s10/pic5.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'titanium gray': 10,
                    'sunrise gold': 10,

                }
            }
        },
        GalaxyS10128GB: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung Galaxy S10 128GB',
            desc: 'Android-based smartphones unveiled, manufactured, released and marketed by Samsung Electronics ',
            price: 1699.99,
            image: [
                `${imagesPrefix}/galaxy_s10/pic1.jpg`,
                `${imagesPrefix}/galaxy_s10/pic2.jpg`,
                `${imagesPrefix}/galaxy_s10/pic3.jpg`,
                `${imagesPrefix}/galaxy_s10/pic4.jpg`,
                `${imagesPrefix}/galaxy_s10/pic5.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'titanium gray': 10,
                    'sunrise gold': 10,

                }
            }
        },
        GalaxyS1064GB: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung Galaxy S10 64GB',
            desc: 'Android-based smartphones unveiled, manufactured, released and marketed by Samsung Electronics',
            price: 1499.99,
            image: [
                `${imagesPrefix}/galaxy_s10/pic1.jpg`,
                `${imagesPrefix}/galaxy_s10/pic2.jpg`,
                `${imagesPrefix}/galaxy_s10/pic3.jpg`,
                `${imagesPrefix}/galaxy_s10/pic4.jpg`,
                `${imagesPrefix}/galaxy_s10/pic5.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'titanium gray': 10,
                    'sunrise gold': 10,

                }
            }
        },
        TU700075: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung 75\' QLED TV',
            desc: '4K UHD Direct Full Array 16X Quantum HDR 16X Smart TV with Alexa Built-in',
            price: 8599.99,
            image: [
                `${imagesPrefix}/TU-7000/pic1.jpg`,
                `${imagesPrefix}/TU-7000/pic2.jpg`,
                `${imagesPrefix}/TU-7000/pic3.jpg`,
                `${imagesPrefix}/TU-7000/pic4.jpg`,
                `${imagesPrefix}/TU-7000/pic5.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 10,
                }
            }
        },
        TU700065: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung 65\' QLED TV',
            desc: '4K UHD Direct Full Array 16X Quantum HDR 16X Smart TV with Alexa Built-in',
            price: 6659.99,
            image: [
                `${imagesPrefix}/TU-7000/pic1.jpg`,
                `${imagesPrefix}/TU-7000/pic2.jpg`,
                `${imagesPrefix}/TU-7000/pic3.jpg`,
                `${imagesPrefix}/TU-7000/pic4.jpg`,
                `${imagesPrefix}/TU-7000/pic5.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 10,
                }
            }
        },
        TU700055: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'Samsung 55\' QLED TV',
            desc: '4K UHD Direct Full Array 16X Quantum HDR 16X Smart TV with Alexa Built-in',
            price: 4985.99,
            image: [
                `${imagesPrefix}/TU-7000/pic1.jpg`,
                `${imagesPrefix}/TU-7000/pic2.jpg`,
                `${imagesPrefix}/TU-7000/pic3.jpg`,
                `${imagesPrefix}/TU-7000/pic4.jpg`,
                `${imagesPrefix}/TU-7000/pic5.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 10,
                }
            }
        },
    }
}
module.exports = Samsung
