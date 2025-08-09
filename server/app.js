const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoute')
const productRoutes = require('./routes/productsRoute')
const cartRoutes = require('./routes/cartRoutes')

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use('/api', userRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)




module.exports = app