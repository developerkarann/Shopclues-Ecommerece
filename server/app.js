const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoute')
const productRoutes = require('./routes/productsRoute')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const paymentRoute = require('./routes/paymentRoutes')


app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)
app.use('/api', orderRoutes)
app.use('/api', paymentRoute)




module.exports = app