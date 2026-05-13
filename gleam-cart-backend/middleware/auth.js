const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).json({ message: 'No token, access denied' });
        }

        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'No token, access denied' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log('Decoded token:', decoded); // debugging
        next();
    } catch (err) {
        console.log('Auth error:', err.message);
        res.status(401).json({ message: 'Invalid token' });
    }
};