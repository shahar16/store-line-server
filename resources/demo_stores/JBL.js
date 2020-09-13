const imagesPrefix = 'uploads/images/JBL'
const shortid = require('shortid')
const storeID = shortid.generate()

const JBL = {
    store: {
        storeID: storeID,
        name: 'JBL store',
        owner: 'danielahrak@gmail.com',
        desc: 'Premium speakers from JBL such as wireless bluetooth speakers, Android & iOS headphones, soundbars, subwoofers, home theater and more',
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
            name: 'JBL Bar 2.1',
            desc: 'Deep Bass Soundbar with 6.5" Wireless Subwoofer',
            price: 1062.62,
            image: [
                `${imagesPrefix}/Bar_2.1/pic1.jpg`,
                `${imagesPrefix}/Bar_2.1/pic2.jpg`,
                `${imagesPrefix}/Bar_2.1/pic3.jpg`,
                `${imagesPrefix}/Bar_2.1/pic4.jpg`,
                `${imagesPrefix}/Bar_2.1/pic5.jpg`,
                `${imagesPrefix}/Bar_2.1/pic6.jpg`
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 10
                }
            }
        },
        Boombox: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL Boombox',
            desc: 'Waterproof Portable Bluetooth Speaker with 24 hours of Playtime',
            price: 1416.88,
            image: [
                `${imagesPrefix}/boombox/pic1.jpg`,
                `${imagesPrefix}/boombox/pic2.jpg`,
                `${imagesPrefix}/boombox/pic3.jpg`,
                `${imagesPrefix}/boombox/pic4.jpg`,
                `${imagesPrefix}/boombox/pic5.jpg`,
                `${imagesPrefix}/boombox/pic6.jpg`,
                `${imagesPrefix}/boombox/pic7.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 20,
                    'forest green': 5,
                    'camo': 10
                }
            }
        },
        Live500bt: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL Live 500bt',
            desc: 'Wireless Over-Ear Bluetooth Headphones with Microphone, Amazon Alexa Voice Control, up to 30 Hour Battery, works with Android and Apple iOS',
            price: 354.99,
            image: [
                `${imagesPrefix}/live_500bt/pic1.jpg`,
                `${imagesPrefix}/live_500bt/pic2.jpg`,
                `${imagesPrefix}/live_500bt/pic3.jpg`,
                `${imagesPrefix}/live_500bt/pic4.jpg`,
                `${imagesPrefix}/live_500bt/pic5.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 10
                }
            }
        },
        Flip5: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL Flip 5',
            desc: 'JBL Waterproof Portable Bluetooth Speaker',
            price: 424.99,
            image: [
                `${imagesPrefix}/live_500bt/pic1.jpg`,
                `${imagesPrefix}/live_500bt/pic2.jpg`,
                `${imagesPrefix}/live_500bt/pic3.jpg`,
                `${imagesPrefix}/live_500bt/pic4.jpg`,
                `${imagesPrefix}/live_500bt/pic5.jpg`,
                `${imagesPrefix}/live_500bt/pic6.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'black camo': 10,
                    'camo': 10,
                    'green': 10,
                    'red': 10

                }
            }
        },
        Live500bt: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL Live 500bt',
            desc: 'Wireless Over-Ear Bluetooth Headphones with Microphone, Amazon Alexa Voice Control, up to 30 Hour Battery, works with Android and Apple iOS',
            price: 354.23,
            image: [
                `${imagesPrefix}/live_500bt/pic1.jpg`,
                `${imagesPrefix}/live_500bt/pic2.jpg`,
                `${imagesPrefix}/live_500bt/pic3.jpg`,
                `${imagesPrefix}/live_500bt/pic4.jpg`,
                `${imagesPrefix}/live_500bt/pic5.jpg`,
                `${imagesPrefix}/live_500bt/pic6.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'black camo': 10,
                    'camo': 10,
                    'green': 10,
                    'red': 10
                }
            }
        },
        Pulse4: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL Pulse 4',
            desc: 'Waterproof Portable Bluetooth Speaker with Light Show',
            price: 885.49,
            image: [
                `${imagesPrefix}/pulse_4/pic1.jpg`,
                `${imagesPrefix}/pulse_4/pic2.jpg`,
                `${imagesPrefix}/pulse_4/pic3.jpg`,
                `${imagesPrefix}/pulse_4/pic4.jpg`,
                `${imagesPrefix}/pulse_4/pic5.jpg`,
                `${imagesPrefix}/pulse_4/pic6.jpg`,
            ],
            stock: {
                type: 'color',
                quantities: {
                    'black': 10,
                    'white': 10,
                }
            }
        },
        Quantom300: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL Quantom 300',
            desc: 'Wired Over-Ear Gaming Headset with Microphone, PC, Xbox, PS4 Compatible',
            price: 885.49,
            image: [
                `${imagesPrefix}/quantom_300/pic1.jpg`,
                `${imagesPrefix}/quantom_300/pic2.jpg`,
                `${imagesPrefix}/quantom_300/pic3.jpg`,
                `${imagesPrefix}/quantom_300/pic4.jpg`,
                `${imagesPrefix}/quantom_300/pic5.jpg`,
                `${imagesPrefix}/quantom_300/pic6.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 10
                }
            }
        },
        Tune220TWS: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL TUNE 220TWS',
            desc: 'True Wireless In-Ear Bluetooth Headphones with Microphone, Wireless Bluetooth Earbuds, up to 19 Hours Battery, works with Android and Apple iOS',
            price: 212.99,
            image: [
                `${imagesPrefix}/tune_220tws/pic1.jpg`,
                `${imagesPrefix}/tune_220tws/pic2.jpg`,
                `${imagesPrefix}/tune_220tws/pic3.jpg`,
                `${imagesPrefix}/tune_220tws/pic4.jpg`,
                `${imagesPrefix}/tune_220tws/pic5.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 15,
                    'blue': 5,
                    'green': 10
                }
            }
        },
        ReflectFlow: {
            sn: shortid.generate(),
            storeID: storeID,
            name: 'JBL Reflect Flow',
            desc: 'True Wireless Earbuds, Bluetooth Sport Headphones with Microphone, Waterproof, up to 30 Hours Battery, Charging Case and Quick Charge, works with Android and Apple iOS ',
            price: 531.99,
            image: [
                `${imagesPrefix}/reflect_flow/pic1.jpg`,
                `${imagesPrefix}/reflect_flow/pic2.jpg`,
                `${imagesPrefix}/reflect_flow/pic3.jpg`,
                `${imagesPrefix}/reflect_flow/pic4.jpg`,
                `${imagesPrefix}/reflect_flow/pic5.jpg`,
            ],
            stock: {
                type: 'black',
                quantities: {
                    'black': 15,
                    'blue': 5,
                    'green': 10
                }
            }
        }
    }
}
module.exports = JBL
