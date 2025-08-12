const User = require('../models/userSceham')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.resgisterUser = async (req, res, next) => {
    const { email, password , address} = req.body;
    if (!email || !password || !address) {
        return res.status(400).json({ success: false, message: 'Please enter credentials' })
    }

    if(password.length < 6){
        return res.status(400).json({ success: false, message: 'Minimum 6 digit password is required' })
    } 

    const userExist = await User.findOne({ email })

    if (userExist) {
        return res.status(404).json({
            success: false,
            message: "User Already Exist"
        })
    }

    try {
        const hashedPass = await bcrypt.hash(password, 10)
        const user = await User.create({
            email,
            password: hashedPass,
            address: address
        })


        res.status(200).json({
            sucess: true,
            message: 'Account Created!',
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.loginUser = async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User doesn't exists"
        })
    }

    let isValidPass = await bcrypt.compare(password, user.password)

    if (!isValidPass) {
       return res.status(400).json({
            sucess: false,
            message: "Invalid password"
        })
    }

    const payload = { userId: user.id, username: user.email }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })

    const options = {
        maxAge: 24 * 60 * 60 * 1000,
    }

    res.status(200).cookie('token', token, options).json({
        sucess: true,
        message: "Login sucessfull!",
        token,
        user
    })

}