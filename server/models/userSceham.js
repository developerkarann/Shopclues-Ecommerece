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
    orders: [{
        items: [
            {
                productId: { type: String },
                title: { type: String },
                image: { type: String },
                price: { type: String },
                discount: { type: String }
            }
        ],
        shippingAddress: [{
            street: { type: String },
            city: { type: String },
            state: { type: String },
            country: { type: String },
            zip: { type: Number },
            phone: { type: Number },
        }],
        paymentMethod: { type: String },
        totalAmount: { type: Number },
        status: { type: String, default: "PLACED" },
        createdAt: { type: Date, default: Date.now }
    }],
})

module.exports = mongoose.model('Users', userSchema)