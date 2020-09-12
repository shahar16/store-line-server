const imagesPrefix = 'uploads/images/ShoesStore'
//TODO: change path
const shortid = require('shortid')
const storeID = shortid.generate()

const ShoesStore = {

  store: {
    storeID:  storeID,
    name:     'Shoes Store',
    owner:    'shaharyig@gmail.com',
    desc:     'Shoes store is a convenient place to purchase shoes of all brands.',
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
    Vans_Authentic:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Vans Authentic',
      desc:    'Vans Authentic trainer with gum sole in black',
      price:   319,
      image:   [
        `${imagesPrefix}/Vans_Authentic/pic1.jpg`,
        `${imagesPrefix}/Vans_Authentic/pic2.jpg`,
        `${imagesPrefix}/Vans_Authentic/pic3.jpg`,
        `${imagesPrefix}/Vans_Authentic/pic4.jpg`,
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    TIMBERLAND:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Timberland Kenniston',
      desc:    'Timberland Kenniston Nellie wheat beige nubuck leather flat ankle boots',
      price:   319,
      image:   [
        `${imagesPrefix}/TIMBERLAND/pic1.jpg`,
        `${imagesPrefix}/TIMBERLAND/pic2.jpg`,
        `${imagesPrefix}/TIMBERLAND/pic3.jpg`,
        `${imagesPrefix}/TIMBERLAND/pic4.jpg`,
        `${imagesPrefix}/TIMBERLAND/pic5.jpg`
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    Reebok_Club_C_Revenge:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Reebok Club C Revenge',
      desc:    'Reebok Club C Revenge trainers in white with gum sole',
      price:   719,
      image:   [
        `${imagesPrefix}/Reebok_Club_C_Revenge/pic1.jpg`,
        `${imagesPrefix}/Reebok_Club_C_Revenge/pic2.jpg`,
        `${imagesPrefix}/Reebok_Club_C_Revenge/pic3.jpg`,
        `${imagesPrefix}/Reebok_Club_C_Revenge/pic4.jpg`,
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    QUIKSILVER:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'QUIKSILVER flip flops',
      desc:    'QUIKSILVER flip flops',
      price:   99,
      image:   [
        `${imagesPrefix}/QUIKSILVER/pic1.jpg`,
        `${imagesPrefix}/QUIKSILVER/pic2.jpg`,
        `${imagesPrefix}/QUIKSILVER/pic3.jpg`
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    Nike_Metcon_5:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Nike Training Metcon 5',
      desc:    'Nike Training Metcon 5 trainers in grey and green',
      price:   579,
      image:   [
        `${imagesPrefix}/Nike_Metcon_5/pic1.jpg`,
        `${imagesPrefix}/Nike_Metcon_5/pic2.jpg`,
        `${imagesPrefix}/Nike_Metcon_5/pic3.jpg`,
        `${imagesPrefix}/Nike_Metcon_5/pic4.jpg`,
        `${imagesPrefix}/Nike_Metcon_5/pic5.jpg`,
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    Nike_Blazer:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Nike Blazer',
      desc:    'Nike Blazer Low Leather trainers in white',
      price:   399,
      image:   [
        `${imagesPrefix}/Nike_Blazer/pic1.jpg`,
        `${imagesPrefix}/Nike_Blazer/pic2.jpg`,
        `${imagesPrefix}/Nike_Blazer/pic3.jpg`,
        `${imagesPrefix}/Nike_Blazer/pic4.jpg`,
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    DR_MARTENS_Eye_Gibson:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Dr Martens 1461',
      desc:    'Dr Martens 1461 3-eye gibson flat shoes',
      price:   599,
      image:   [
        `${imagesPrefix}/DR_MARTENS_Eye_Gibson/pic1.jpg`,
        `${imagesPrefix}/DR_MARTENS_Eye_Gibson/pic2.jpg`,
        `${imagesPrefix}/DR_MARTENS_Eye_Gibson/pic3.jpg`,
        `${imagesPrefix}/DR_MARTENS_Eye_Gibson/pic4.jpg`,
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    CHAMPION_white:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Champion sliders',
      desc:    'Champion sliders in white',
      price:   179,
      image:   [
        `${imagesPrefix}/CHAMPION_white/pic1.jpg`,
        `${imagesPrefix}/CHAMPION_white/pic2.jpg`,
        `${imagesPrefix}/CHAMPION_white/pic3.jpg`,
        `${imagesPrefix}/CHAMPION_white/pic4.jpg`,
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    CHAMPION_black:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Champion sliders',
      desc:    'Champion sliders in black',
      price:   179,
      image:   [
        `${imagesPrefix}/CHAMPION_black/pic1.jpg`,
        `${imagesPrefix}/CHAMPION_black/pic2.jpg`,
        `${imagesPrefix}/CHAMPION_black/pic3.jpg`,
        `${imagesPrefix}/CHAMPION_black/pic4.jpg`,
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    },
    BILLABONG:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Billabong sliders',
      desc:    'Billabong sliders in green',
      price:   319,
      image:   [
        `${imagesPrefix}/BILLABONG/pic1.jpg`,
        `${imagesPrefix}/BILLABONG/pic2.jpg`
      ],
      stock:   {
        type:       'size',
        quantities: {
          '41': 20,
          '43': 20,
          '44': 20,
          '45': 20,
          '46': 20,
          '47': 20
        }
      }
    }
  }
}

module.exports = ShoesStore