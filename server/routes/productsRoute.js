const express = require('express')
const { getAllProducts, getProduct } = require('../controller/productController')
const router = express.Router()

router.route('/products').get(getAllProducts)
router.route('/product/:id').get(getProduct)


module.exports = router