const imagesPrefix = 'uploads/images/Ace'
//TODO: change path
const shortid = require('shortid')
const storeID = shortid.generate()

const Ace = {

  store: {
    storeID:  storeID,
    name:     'Ace',
    owner:    'shaharyig@gmail.com',
    desc:     'In this store you will find all the working tools you need.',
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
    Makita_VJ04Z_12V:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Makita VJ04Z 12V',
      desc:    'Makita VJ04Z 12V MAX CXT Lithium-Ion Cordless Jig Saw, Tool Only',
      price:   350,
      image:   [
        `${imagesPrefix}/Makita_VJ04Z_12V/pic1.jpg`,
        `${imagesPrefix}/Makita_VJ04Z_12V/pic2.jpg`,
        `${imagesPrefix}/Makita_VJ04Z_12V/pic3.jpg`,
        `${imagesPrefix}/Makita_VJ04Z_12V/pic4.jpg`,
        `${imagesPrefix}/Makita_VJ04Z_12V/pic5.jpg`,
      ],
      stock:   {
        type:       'blue',
        quantities: {
          'blue': 20
        }
      }
    },
    Makita_XTR01T7:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Makita XTR01T7',
      desc:    'Makita XTR01T7 18V LXT Lithium-Ion Brushless Cordless Compact Router Kit. The electronically-controlled BL Brushless motor efficiently uses energy to match torque and RPM to the changing demands of the application',
      price:   1199,
      image:   [
        `${imagesPrefix}/Makita_XTR01T7/pic1.jpg`,
        `${imagesPrefix}/Makita_XTR01T7/pic2.jpg`,
        `${imagesPrefix}/Makita_XTR01T7/pic3.jpg`,
        `${imagesPrefix}/Makita_XTR01T7/pic4.jpg`,
      ],
      stock:   {
        type:       'blue',
        quantities: {
          'blue': 20
        }
      }
    },
    Makita_XFD12Z_18V:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Makita XFD12Z 18V',
      desc:    'Makita XFD12Z 18V LXT Lithium-Ion Brushless Cordless 1/2" Driver-Drill, Tool Only,',
      price:   361,
      image:   [
        `${imagesPrefix}/Makita_XFD12Z_18V/pic1.jpg`,
        `${imagesPrefix}/Makita_XFD12Z_18V/pic2.jpg`,
        `${imagesPrefix}/Makita_XFD12Z_18V/pic3.jpg`,
        `${imagesPrefix}/Makita_XFD12Z_18V/pic4.jpg`,
      ],
      stock:   {
        type:       'blue',
        quantities: {
          'blue': 20
        }
      }
    },
    IRWIN_Hand_Saw:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'IRWIN Hand Saw',
      desc:    'IRWIN Hand Saw, Coarse Cut, ProTouch Handle, 15-Inch (2011201)',
      price:   110,
      image:   [
        `${imagesPrefix}/IRWIN_Hand_Saw/pic1.jpg`,
        `${imagesPrefix}/IRWIN_Hand_Saw/pic2.jpg`,
        `${imagesPrefix}/IRWIN_Hand_Saw/pic3.jpg`
      ],
      stock:   {
        type:       'blue',
        quantities: {
          'blue': 20
        }
      }
    },
    Bahco_saw:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Bahco saw',
      desc:    'Bahco 10-30-23 30-Inch Ergo Bow Saw for Green Wood',
      price:   579,
      image:   [
        `${imagesPrefix}/Bahco_saw/pic1.jpg`
      ],
      stock:   {
        type:       'orange',
        quantities: {
          'orange': 20
        }
      }
    },
    SUIZAN_Japanese_Saw:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'SUIZAN Japanese Saw',
      desc:    'SUIZAN Japanese Hand Saw 6 Inch Dozuki Dovetail Pull Saw for Woodworking',
      price:   97,
      image:   [
        `${imagesPrefix}/SUIZAN_Japanese_Saw/pic1.jpg`,
        `${imagesPrefix}/SUIZAN_Japanese_Saw/pic2.jpg`,
        `${imagesPrefix}/SUIZAN_Japanese_Saw/pic3.jpg`
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'unique': 20
        }
      }
    },
    Hammer:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Hammer',
      desc:    '16 oz Fiber Glass Claw Hammer Heavy Duty Construction Shock Resistant Rubberized Non Slip Handle for Contractors, General Laborers, Repair Men, Automotive Mechanics, Household Maintenance by BASTEX',
      price:   44,
      image:   [
        `${imagesPrefix}/Hammer/pic1.jpg`,
        `${imagesPrefix}/Hammer/pic2.jpg`,
        `${imagesPrefix}/Hammer/pic3.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'yellow': 20,
          'green': 20
        }
      }
    },
    Pliers:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Pliers',
      desc:    'Swpeet Heavy Duty Key Fob Pliers Tool, Metal Glass Running Pliers with Curved Jaws, Studio Running Pliers Attach Rubber Tips Perfect for Key Fob Hardware Install and Stained Glass Work',
      price:   37,
      image:   [
        `${imagesPrefix}/Pliers/pic1.jpg`,
        `${imagesPrefix}/Pliers/pic2.jpg`,
        `${imagesPrefix}/Pliers/pic3.jpg`,
      ],
      stock:   {
        type:       'color',
        quantities: {
          'red': 20,
          'blue': 20,
          'yellow': 20
        }
      }
    },
    Wood_Glue:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Wood Glue',
      desc:    'Gorilla Wood Glue, 4 Ounce Bottle, (Pack of 1)',
      price:   28,
      image:   [
        `${imagesPrefix}/Wood_Glue/pic1.jpg`,
        `${imagesPrefix}/Wood_Glue/pic2.jpg`,
        `${imagesPrefix}/Wood_Glue/pic3.jpg`,
      ],
      stock:   {
        type:       '1L',
        quantities: {
          '1L': 20
        }
      }
    },
    Measure_Tape:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Measure Tape',
      desc:    'Komelon SM5425 Speed Mark Gripper Acrylic Coated Steel Blade Measuring Tape, 1-Inch X 25Ft',
      price:   29,
      image:   [
        `${imagesPrefix}/Measure_Tape/pic1.jpg`,
        `${imagesPrefix}/Measure_Tape/pic2.jpg`,
        `${imagesPrefix}/Measure_Tape/pic3.jpg`,
        `${imagesPrefix}/Measure_Tape/pic4.jpg`,
      ],
      stock:   {
        type:       'color',
        quantities: {
          'yellow': 20,
          'red': 20,
          'blue': 20,
          'black': 20
        }
      }
    },
    Screws:          {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Screws',
      desc:    'Screws Drywall Screws Quality Black Steel #7 Sharp Point Self Tapping Screws Black Steel Wood Screws,Screws Assortment Set ，Machine Screws,200PCS - for Drywall Sheetrock, Wood, Furniture Cabinet',
      price:   29,
      image:   [
        `${imagesPrefix}/Screws/pic1.jpg`,
        `${imagesPrefix}/Screws/pic2.jpg`,
        `${imagesPrefix}/Screws/pic3.jpg`,
        `${imagesPrefix}/Screws/pic4.jpg`,
      ],
      stock:   {
        type:       'unique',
        quantities: {
          'one size': 20
        }
      }
    }
  }
}

module.exports = Ace