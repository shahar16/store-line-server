const imagesPrefix = 'uploads/images/Apple'

const shortid = require('shortid')
const storeID = shortid.generate()

const Apple = {

  store: {
    storeID:  storeID,
    name:     'Apple',
    owner:    'shaharyig@gmail.com',
    desc:     'Apple Store-line is a convenient place to purchase Apple products and accessories from Apple and other manufacturers.',
    products: {},
    image:    [
      `${imagesPrefix}/EdgeTable/il_794xN.1857962939_h6c0.jpg`,
      `${imagesPrefix}/EdgeTable/il_794xN.1857974595_6zte.jpg`,
      `${imagesPrefix}/EdgeTable/il_794xN.1857978775_e40e.jpg`,
      `${imagesPrefix}/EdgeTable/pic3.jpg`
    ],
    contact:  {
      email:       'shaharyig@gmail.com',
      phoneNumber: '0555555',
      adress:      {
        city:     'Tel Aviv',
        street:   'Hakovshim',
        houseNum: 41,
      }
    },
    fakeDB:   true
  },

  products: {
    iPhone_SE_64:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone SE 64GB',
      desc:    'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.',
      price:   1849,
      image:   [
        `${imagesPrefix}/iPhone_SE/pic1.png`,
        `${imagesPrefix}/iPhone_SE/pic2.png`,
        `${imagesPrefix}/iPhone_SE/pic3.png`,
        `${imagesPrefix}/iPhone_SE/pic4.png`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 20,
          'red':   20,
          'white': 20,
        }
      }
    },
    iPhone_SE_128:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone SE 128GB',
      desc:    'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.',
      price:   2099,
      image:   [
        `${imagesPrefix}/iPhone_SE/pic1.png`,
        `${imagesPrefix}/iPhone_SE/pic2.png`,
        `${imagesPrefix}/iPhone_SE/pic3.png`,
        `${imagesPrefix}/iPhone_SE/pic4.png`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 20,
          'red':   20,
          'white': 20,
        }
      }
    },
    iPhone_SE_256:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone SE 256GB',
      desc:    'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.',
      price:   1849,
      image:   [
        `${imagesPrefix}/iPhone_SE/pic1.png`,
        `${imagesPrefix}/iPhone_SE/pic2.png`,
        `${imagesPrefix}/iPhone_SE/pic3.png`,
        `${imagesPrefix}/iPhone_SE/pic4.png`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 20,
          'red':   20,
          'white': 20,
        }
      }
    },
    iPhone_11_64:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone 11 64GB',
      desc:    'A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less.',
      price:   3149,
      image:   [
        `${imagesPrefix}/iPhone_11/pic1.jpg`,
        `${imagesPrefix}/iPhone_11/pic2.jpg`,
        `${imagesPrefix}/iPhone_11/pic3.jpg`,
        `${imagesPrefix}/iPhone_11/pic4.jpg`,
        `${imagesPrefix}/iPhone_11/pic5.jpg`,
        `${imagesPrefix}/iPhone_11/pic6.jpg`,
        `${imagesPrefix}/iPhone_11/pic7.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 20,
          'red':   20,
          'green': 20,
          'white': 20,
          'purple': 20,
          'yellow': 20
        }
      }
    },
    iPhone_11_256:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone 11 256GB',
      desc:    'A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less.',
      price:   3819,
      image:   [
        `${imagesPrefix}/iPhone_11/pic1.jpg`,
        `${imagesPrefix}/iPhone_11/pic2.jpg`,
        `${imagesPrefix}/iPhone_11/pic3.jpg`,
        `${imagesPrefix}/iPhone_11/pic4.jpg`,
        `${imagesPrefix}/iPhone_11/pic5.jpg`,
        `${imagesPrefix}/iPhone_11/pic6.jpg`,
        `${imagesPrefix}/iPhone_11/pic7.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 20,
          'red':   20,
          'green': 20,
          'white': 20,
          'purple': 20,
          'yellow': 20
        }
      }
    },
    iPhone_11_128:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone 11 128GB',
      desc:    'A new dual‑camera system captures more of what you see and love. The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less.',
      price:   3379,
      image:   [
        `${imagesPrefix}/iPhone_11/pic1.jpg`,
        `${imagesPrefix}/iPhone_11/pic2.jpg`,
        `${imagesPrefix}/iPhone_11/pic3.jpg`,
        `${imagesPrefix}/iPhone_11/pic4.jpg`,
        `${imagesPrefix}/iPhone_11/pic5.jpg`,
        `${imagesPrefix}/iPhone_11/pic6.jpg`,
        `${imagesPrefix}/iPhone_11/pic7.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 20,
          'red':   20,
          'green': 20,
          'white': 20,
          'purple': 20,
          'yellow': 20
        }
      }
    },
    iPhone_11_Pro_64:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone 11 Pro 64GB',
      desc:    'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life.',
      price:   4279,
      image:   [
        `${imagesPrefix}/iPhone_11_pro/pic1.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic2.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic3.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic4.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'midnight green': 20,
          'gold':   20,
          'silver': 20,
          'space grey': 20
        }
      }
    },
    iPhone_11_Pro_128:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone 11 Pro 128GB',
      desc:    'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life.',
      price:   4929,
      image:   [
        `${imagesPrefix}/iPhone_11_pro/pic1.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic2.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic3.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic4.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'midnight green': 20,
          'gold':   20,
          'silver': 20,
          'space grey': 20
        }
      }
    },
    iPhone_11_Pro_512:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone 11 Pro 512GB',
      desc:    'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life.',
      price:   5959,
      image:   [
        `${imagesPrefix}/iPhone_11_pro/pic1.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic2.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic3.jpg`,
        `${imagesPrefix}/iPhone_11_pro/pic4.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'midnight green': 20,
          'gold':   20,
          'silver': 20,
          'space grey': 20
        }
      }
    },
    MacBook_pro_16:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'MacBook pro 16"',
      desc:    'Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made.',
      price:   12699,
      image:   [
        `${imagesPrefix}/MacBook_pro_16/pic1.png`,
        `${imagesPrefix}/MacBook_pro_16/pic2.png`,
        `${imagesPrefix}/MacBook_pro_16/pic3.png`,
        `${imagesPrefix}/MacBook_pro_16/pic4.png`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'silver': 20,
          'space grey': 20
        }
      }
    },
    MacBook_pro_13:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'MacBook pro 13"',
      desc:    'Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made.',
      price:   10899,
      image:   [
        `${imagesPrefix}/MacBook_pro_16/pic1.png`,
        `${imagesPrefix}/MacBook_pro_16/pic2.png`,
        `${imagesPrefix}/MacBook_pro_16/pic3.png`,
        `${imagesPrefix}/MacBook_pro_16/pic4.png`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'silver': 20,
          'space grey': 20
        }
      }
    },
    AirPods_pro:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'AirPods pro',
      desc:    'We refined the details of comfort, creating a new class of in-ear headphones with a customizable fit that forms an exceptional seal for Active Noise Cancellation. You’ll feel your music, not your headphones.',
      price:   1179,
      image:   [
        `${imagesPrefix}/AirPods_pro/pic1.jpg`,
        `${imagesPrefix}/AirPods_pro/pic2.jpg`
      ],
      stock:   {
        type:       'white',
        quantities: {
          'white': 20,
        }
      }
    },
    AirPods:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'AirPods',
      desc:    'Now with more talk time, voice-activated Siri access — and a wireless charging case — AirPods deliver an unparalleled wireless headphone experience.',
      price:   689,
      image:   [
        `${imagesPrefix}/AirPods/pic1.jpeg`,
      ],
      stock:   {
        type:       'white',
        quantities: {
          'white': 20,
        }
      }
    },
    Apple_TV_4K:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Apple TV 4K',
      desc:    'Apple TV 4K lets you watch movies and shows in amazing 4K HDR and with Dolby Atmos sound. It has great content from apps like Amazon Prime Video, Netflix, Disney+, etc...',
      price:   689,
      image:   [
        `${imagesPrefix}/Apple_TV_4K/pic1.jpg`,
      ],
      stock:   {
        type:       'black',
        quantities: {
          'black': 20,
        }
      }
    },
  }
}

module.exports = Apple