const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Sunray Drop Hoops',
    price: 769,
    image: 'images/sunrayhoops.jpeg',
    category: 'Earrings',
    description: 'Hand-polished 22k gold plated sunray styled hoops.'
  },
  {
    name: 'Gold Hoops',
    price: 679,
    image: 'images/gold hoops.jpeg',
    category: 'Earrings',
    description: 'Elegant 18k gold-toned hoops—minimalist luxury designed for your daily sparkle.'
  },
  {
    name: 'Gold Leaf Statement Earrings',
    price: 599,
    image: 'images/leaf earring.jpeg',
    category: 'Earrings',
    description: 'Elegant leaf-textured golden earrings that add a touch of nature-inspired charm.'
  },
  {
    name: 'Luxe Watch & Bracelet Stack',
    price: 899,
    image: 'images/hand stack.jpeg',
    category: 'Bracelet',
    description: 'Elegant gold watch paired with chic bracelets for timeless wrist look.'
  },
  {
    name: 'Bow Ring',
    price: 379,
    image: 'images/bow ring.jpeg',
    category: 'Ring',
    description: 'Cute bow-shaped gold ring that adds a playful yet classy touch to your finger.'
  },
  {
    name: 'Hand Chain Bracelet',
    price: 349,
    image: 'images/hand chain.jpeg',
    category: 'Bracelet',
    description: 'Delicate pearl hand chain connecting ring and bracelet for a graceful feminine look.'
  },
  {
    name: 'Aurelian Hoops',
    price: 8500,
    image: 'images/aurelian _hoops.jpeg',
    category: 'Earrings',
    description: 'Elegant 20k gold-toned hoops—minimalist luxury designed for your daily sparkle.'
  },
  {
    name: 'Emerald Cut Ring',
    price: 4000,
    image: 'images/emerald_cut ring.jpeg',
    category: 'Ring',
    description: 'A striking emerald-cut solitaire set on a sleek gold band, embodying vintage glamour and modern precision.'
  },
  {
    name: 'Floral Cuff Bracelet with Ring',
    price: 6600,
    image: 'images/floral_ring.jpeg',
    category: 'Bracelet',
    description: 'An exquisite floral-inspired cuff linked to a matching ring, blending delicate artistry with bold statement style.'
  },
  {
    name: 'Luna Gold Pendant',
    price: 5200,
    image: 'images/luna_pendant.jpeg',
    category: 'Necklace',
    description: 'A radiant crescent moon pendant in polished 18k gold, symbolizing grace and the timeless beauty of the night sky.'
  },
  {
    name: 'Retro Acrylic Bracelets',
    price: 2800,
    image: 'images/vintage_acrylic.jpeg',
    category: 'Bracelet',
    description: 'Bold and playful acrylic bangles in retro-inspired hues, designed to add a pop of vintage color to your modern look.'
  },
  {
    name: 'Pearl Drop Gold Earrings',
    price: 9900,
    image: 'images/pearl_drop.jpeg',
    category: 'Earrings',
    description: 'Lustrous freshwater pearls suspended from elegant gold studs, blending classic charm with a graceful modern drop.'
  },
  {
    name: 'Butterfly Bracelet',
    price: 589,
    image: 'images/butterfly_bracelet.jpeg',
    category: 'Bracelet',
    description: 'A dainty gold chain adorned with intricate butterfly charms, capturing the essence of freedom and feminine grace.'
  },
  {
    name: 'Trinity-Layered Necklace',
    price: 979,
    image: 'images/layered necklace.jpeg',
    category: 'Necklace',
    description: 'A stunning trio of graduated gold chains featuring mixed textures, perfectly layered for a sophisticated, effortless look.'
  },
  {
    name: 'Bliss Bow Chain',
    price: 800,
    image: 'images/Bliss Bow Chain.jpeg',
    category: 'Necklace',
    description: 'A delicate gold-toned chain featuring a charming bow pendant, perfect for a graceful and feminine touch.'
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async function() {
    console.log('MongoDB Connected ✅');
    await Product.deleteMany();
    console.log('Old products cleared 🗑️');
    await Product.insertMany(products);
    console.log('All 15 products added to database! 🛍️');
    mongoose.connection.close();
    console.log('Done! ✅');
  })
  .catch(function(err) {
    console.log(err);
  });