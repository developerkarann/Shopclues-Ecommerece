const express = require('express')
const { resgisterUser, loginUser } = require('../controller/userController')
const router  = express.Router()

router.route('/register').post(resgisterUser)

router.route('/login').post(loginUser)

module.exports = router