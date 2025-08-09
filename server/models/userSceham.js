const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    wishlist: [{
        productId: {
            type: String
        },
        title: {
            type: String
        },
        image: {
            type: String
        },
        price: {
            type: String
        },
        discount: {
            type: String
        }
    }],
    cart: [{
        productId: {
            type: String
        },
        title: {
            type: String
        },
        image: {
            type: String
        },
        price: {
            type: String
        },
        discount: {
            type: String
        }
    }],
    myOrders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
})

module.exports = mongoose.model('Users', userSchema)