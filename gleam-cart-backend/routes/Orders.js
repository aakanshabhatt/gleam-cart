const router = require('express').Router();
const Order = require('../models/Order');
const protect = require('../middleware/auth');

router.post('/', protect, async (req, res) => {
    try {
        const { items, totalAmount } = req.body;
        console.log('User:', req.user);
        console.log('Items:', items);
        console.log('Total:', totalAmount);
        
        const order = await Order.create({ 
            user: req.user.userId, 
            items, 
            totalAmount 
        });
        res.status(201).json(order);
    } catch (err) {
        console.log('Order error:', err.message);
        res.status(500).json({ message: err.message });
    }
});

router.get('/myorders', protect, async (req, res) => {
    try {
        const orders = await Order.find({ 
            user: req.user.userId 
        }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.log('Orders fetch error:', err.message);
        res.status(500).json({ message: err.message });
    }
});
// Cancel a specific order
router.patch('/:id/cancel', protect, async (req, res) => {
    try {
        const order = await Order.findOne({ 
            _id: req.params.id, 
            user: req.user.userId 
        });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (order.status === 'cancelled') {
            return res.status(400).json({ message: 'Order already cancelled' });
        }

        order.status = 'cancelled';
        await order.save();
        res.json({ message: 'Order cancelled successfully', order });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

