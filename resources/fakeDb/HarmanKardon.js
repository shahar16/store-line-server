const imagesPrefix = 'uploads/images/HarmanKardon'

const shortid = require('shortid')
const storeID = shortid.generate()

const HarmanKardon = {

  store: {
    storeID:  storeID,
    name:     'Harman/Kardon',
    owner:    'shaharyig@gmail.com',
    desc:     'For over 65 years for Harman Kardon has been dedicated to delivering luxurious audio experiences that allow the listener to feel the music and immerse them in the moment. Citation is the ultimate expression and is the worlds first truly premium product of its kind.',
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
    Sound_Sticks:   {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'SoundSticks III 2.1',
      desc:    'Harman Kardon SoundSticks III 2.1 Speaker System',
      price:   457,
      image:   [
        `${imagesPrefix}/Sound_Sticks/pic1.jpg`,
        `${imagesPrefix}/Sound_Sticks/pic2.jpg`,
        `${imagesPrefix}/Sound_Sticks/pic3.jpg`,
        `${imagesPrefix}/Sound_Sticks/pic4.jpg`
      ],
      stock:   {
        type:       'black',
        quantities: {
          'black': 30
        }
      }
    },
    Sonos_Playbar:  {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Sonos Playbar',
      desc:    'Sonos Playbar - The Mountable Sound Bar for TV, Movies, Music, and More',
      price:   1050,
      image:   [
        `${imagesPrefix}/Sonos_Playbar/pic1.jpg`,
        `${imagesPrefix}/Sonos_Playbar/pic2.jpg`,
        `${imagesPrefix}/Sonos_Playbar/pic3.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 30,
          'grey':  40,
          'blue':  40,
        }
      }
    },
    SOHO:           {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Harman Kardon SOH',
      desc:    'Harman Kardon SOHO Black Premium, On-Ear Headset with Bluetooth Connectivity and Touch Control',
      price:   570,
      image:   [
        `${imagesPrefix}/SOHO/pic1.jpg`,
        `${imagesPrefix}/SOHO/pic2.jpg`,
        `${imagesPrefix}/SOHO/pic3.jpg`,
        `${imagesPrefix}/SOHO/pic4.jpg`
      ],
      stock:   {
        type:       'black',
        quantities: {
          'black': 30
        }
      }
    },
    Onyx_Studio:    {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Harman Kardon Onyx Studio',
      desc:    'Wireless Bluetooth Speaker - IPX7 Waterproof Extra Bass Sound System with Rechargeable Battery and Built-in Microphone',
      price:   780,
      image:   [
        `${imagesPrefix}/Onyx_Studio/pic1.jpg`,
        `${imagesPrefix}/Onyx_Studio/pic2.jpg`,
        `${imagesPrefix}/Onyx_Studio/pic3.jpg`,
        `${imagesPrefix}/Onyx_Studio/pic4.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 50,
          'blue':  60,
          'grey':  70,
        }
      }
    },
    Go_Play_Mini_2: {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Go+Play Mini 2',
      desc:    'Harman Kardon Go+Play Mini 2 - Portable Bluetooth Speaker',
      price:   120,
      image:   [
        `${imagesPrefix}/Go_Play_Mini_2/pic1.jpg`,
        `${imagesPrefix}/Go_Play_Mini_2/pic2.jpg`,
        `${imagesPrefix}/Go_Play_Mini_2/pic3.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 50,
          'blue':  60,
          'grey':  70,
        }
      }
    },
    Citation:       {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Harman Kardon Citation',
      desc:    'Harman Kardon Citation surround speakers',
      price:   330,
      image:   [
        `${imagesPrefix}/Citation/pic1.jpg`,
        `${imagesPrefix}/Citation/pic2.jpg`,
        `${imagesPrefix}/Citation/pic3.jpg`,
        `${imagesPrefix}/Citation/pic4.jpg`
      ],
      stock:   {
        type:       'color',
        quantities: {
          'black': 50,
          'grey':  70,
        }
      }
    },
    Aura_Studio_2:  {
      sn:      shortid.generate(),
      storeID: storeID,
      name:    'Aura Studio 3',
      desc:    'Harman Kardon Aura Studio 3 - Elegant, BT Wireless Speaker with Premium Design and Ambient Lighting',
      price:   675,
      image:   [
        `${imagesPrefix}/Aura_Studio_2/pic1.jpg`,
        `${imagesPrefix}/Aura_Studio_2/pic2.jpg`,
        `${imagesPrefix}/Aura_Studio_2/pic3.jpg`,
        `${imagesPrefix}/Aura_Studio_2/pic4.jpg`,
      ],
      stock:   {
        type:       'color',
        quantities: {
          'transparent white': 25,
          'transparent black': 25,
        }
      }
    }
  }
}

module.exports = HarmanKardon