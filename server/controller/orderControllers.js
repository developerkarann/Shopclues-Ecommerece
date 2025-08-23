const User = require('../models/userSceham')

exports.getOrders = async (req, res) => {
    const { userId } = req.user;
    if (!userId) {
        return res.status(401).json({ suceess: false, message: 'User not found' })
    }
    try {
        const user = await User.findById(userId);
        res.status(200).json({ orders: user.orders });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch cart items', error: err.message });
    }
}

exports.createOrder = async (req, res) => {
    const userId = req.user.userId;
    const { items, shippingAddress, paymentMethod, totalAmount } = req.body;

    if ( !items || !shippingAddress || !paymentMethod || !totalAmount) {
        return res.status(401).json({ suceess: false, message: 'Required data is not provided' })
    }

    try {
        const user = await User.findById({ _id: userId })

        user.orders.push({ items, shippingAddress, paymentMethod, totalAmount });

        await user.save();

        return res.status(200).json({ message: 'Order Placed!', orders: user.orders });

    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })
    }
}



