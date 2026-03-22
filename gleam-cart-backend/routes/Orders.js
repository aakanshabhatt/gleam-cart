const router = require('express').Router();
const Order = require('../models/Order');
const protect = require('../middleware/auth');

router.post('/', protect, async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    const order = await Order.create({ user: req.user.userId, items, totalAmount });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/myorders', protect, async (req, res) => {
  const orders = await Order.find({ user: req.user.userId }).populate('items.product');
  res.json(orders);
});

module.exports = router;