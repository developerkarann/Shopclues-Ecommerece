const Product = require('../models/productSchema')

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        if (!products) {
            return res.status(401).json({ success: false, message: 'Failed to fetch the products' })
        }
        return res.status(200).json({ sucess: true, message: 'All products fetched!', products })

    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })
    }
}


exports.getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.find({ id })
        if (!product) {
            return res.status(401).json({ success: false, message: 'Failed to fetch the product details' })
        }
        return res.status(200).json({ sucess: true, message: 'Product details fetched!', product })
    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })
    }
}