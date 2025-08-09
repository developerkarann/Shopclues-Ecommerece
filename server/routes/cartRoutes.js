const express = require('express')

const { addToCart, getCart, removeFromCart } = require('../controller/cartController')
const { authentication } = require('../middleware/authentication')
const router = express.Router()

router.route('/cart').get( authentication, getCart)
router.route('/cart').post(authentication ,addToCart)
router.route('/cart/:productId').delete( authentication, removeFromCart)



module.exports = router