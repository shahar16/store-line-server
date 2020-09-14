const imagesPrefix = 'uploads/images/WoodStore'

const shortid = require('shortid')
const storeID = shortid.generate()

const WoodWorkStore = {

  store: {
    storeID:  storeID,
    name:     'wood-work shop',
    owner:    'shaharyig@gmail.com',
    desc:     'This is a pop-up store of wood working. Here you can find and buy all my latest wood work. Enjoy!',
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
    BookShelf:             {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Book Shelf',
      desc:    'Contemporary design with traditional (albeit routed) dovetail joinery. I\'ve never been a fan of adjustable shelving, which was the genesis for a fixed shelf case that could',
      price:   100,
      image:   [
        `${imagesPrefix}/BookShelf/pic1.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 5
        }
      }
    },
    KeyHook:             {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Key Hook',
      desc:    'Handmade key board made of solid wood//key hook//Various variants//gifts for men//gifts for women// key holder',
      price:   135,
      image:   [
        `${imagesPrefix}/KeyHook/pic1.jpg`,
        `${imagesPrefix}/KeyHook/pic2.jpg`,
        `${imagesPrefix}/KeyHook/pic3.jpg`,
        `${imagesPrefix}/KeyHook/pic4.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 5
        }
      }
    },
    WoodCoaster:             {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Wood Coaster',
      desc:    'Cedar Wood coaster, wood coaster, wood slice coaster, rustic coaster set , cedar slice coaster, wedding Gift , gift for him, gift for her',
      price:   117,
      image:   [
        `${imagesPrefix}/WoodCoaster/pic1.jpg`,
        `${imagesPrefix}/WoodCoaster/pic2.jpg`,
        `${imagesPrefix}/WoodCoaster/pic3.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 5
        }
      }
    },
    WoodiPhoneCase:             {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'iPhone Case',
      desc:    'Cellular - Real Wood iPhone Case - iPhone 11, 11 Pro/Max, XR, XS Max, X/XS, 8/7, 8/7 Plus, 6s - Made in Canada by Keyway Designs',
      price:   85,
      image:   [
        `${imagesPrefix}/WoodiPhoneCase/pic1.jpg`,
        `${imagesPrefix}/WoodiPhoneCase/pic2.jpg`,
        `${imagesPrefix}/WoodiPhoneCase/pic3.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 5
        }
      }
    },
    WoodenBook:             {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Wooden Book',
      desc:    'Journal, Tree Of Life, Diaries, Wooden Book, Personal Diary, Wood Book Cover, Unique Gifts, Smoked Poplar, Coptic Stitch',
      price:   120,
      image:   [
        `${imagesPrefix}/WoodenBook/pic1.jpg`,
        `${imagesPrefix}/WoodenBook/pic2.jpg`,
        `${imagesPrefix}/WoodenBook/pic3.jpg`,
        `${imagesPrefix}/WoodenBook/pic4.jpg`,
        `${imagesPrefix}/WoodenBook/pic5.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 5
        }
      }
    },
    EdgeTable:             {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Edge Table',
      desc:    'If you ever wanted to bring the elegance of water bodies into your home, this classy waterfall table is just perfect. Made with glass insert waterfall table with beautiful waves snaking through the center of the table top and leg are an eye candy',
      price:   330,
      image:   [
        `${imagesPrefix}/EdgeTable/il_794xN.1857962939_h6c0.jpg`,
        `${imagesPrefix}/EdgeTable/il_794xN.1857974595_6zte.jpg`,
        `${imagesPrefix}/EdgeTable/il_794xN.1857978775_e40e.jpg`,
        `${imagesPrefix}/EdgeTable/pic3.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 5
        }
      }
    },
    CoffeeTable:           {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Coffee Table',
      desc:    'Coffee table is an important part of a living room, but you start to think when space comes for a premium. In such a situation, you need a coffee table that serves multiple purposes and helps you make the most out of available space',
      price:   400,
      image:   [
        `${imagesPrefix}/CoffeeTable/Lipscomb-coffee-table-has-Four-Hidden-Storage-Drawers.jpg`,
        `${imagesPrefix}/CoffeeTable/Lipscomb-coffee-table-has-Four-Hidden-Storage-Drawers_2.jpg`,
        `${imagesPrefix}/CoffeeTable/pic2.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 5
        }
      }
    },
    FlowerPots:            {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Flower Pots',
      desc:    'Pots and planters perhaps are lifesavers to your gardening experience',
      price:   120,
      image:   [
        `${imagesPrefix}/FlowerPots/pic1.jpg`,
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 15
        }
      }
    },
    SunLounger:            {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Sun Lounger',
      desc:    'A sun lounger made from pallet wood (slats) and a bottom plate. Uncertain I’m still on the coat',
      price:   120,
      image:   [
        `${imagesPrefix}/SunLounger/pic1.jpg`,
        `${imagesPrefix}/SunLounger/pic2.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 15
        }
      }
    },
    RecycledOakWineBarrel: {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Wine Barrel',
      desc:    'Recycled Oak Wine Barrel Products Furniture par StilNovoDesign',
      price:   120,
      image:   [
        `${imagesPrefix}/RecycledOakWineBarrel/pic1.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 15
        }
      }
    },
    WoodCalender:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Wood Calender',
      desc:    'Perpetual calendar, wooden perpetual calendar, wood calendar, perpetual calender, never ending calendar',
      price:   120,
      image:   [
        `${imagesPrefix}/WoodCalender/pic1.jpg`,
        `${imagesPrefix}/WoodCalender/pic2.jpg`,
        `${imagesPrefix}/WoodCalender/pic3.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 3
        }
      }
    },
    Shelf:                 {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Shelf',
      desc:    'Modern Wall Shelf, Solid Walnut for Hanging Plants, Books, Photos. Handmade, Wood, Adjustable, Mid-century, Scandinavian',
      price:   100,
      image:   [
        `${imagesPrefix}/Shelf/pic1.jpg`,
        `${imagesPrefix}/Shelf/pic2.jpg`,
        `${imagesPrefix}/Shelf/pic3.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 10
        }
      }
    },
    OldWoodPalletsLamps:   {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Wood Lamps',
      desc:    'Nice lamps made with old pallets',
      price:   350,
      image:   [
        `${imagesPrefix}/OldWoodPalletsLamps/pic1.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 7
        }
      }
    },
    BicycleBookShelf:      {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Book Shelf',
      desc:    'Bicycle Book Shelf',
      price:   350,
      image:   [
        `${imagesPrefix}/BicycleBookShelf/pic1.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 8
        }
      }
    },

  }
}

module.exports = WoodWorkStore