const express = require('express')
const { getOrders, createOrder } = require('../controller/orderControllers')
const { authentication } = require('../middleware/authentication')


const router = express.Router()

router.route('/orders').get( authentication, getOrders )
router.route('/neworder').post(authentication , createOrder)



module.exports = router