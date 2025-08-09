require('dotenv').config()
const app = require('./app')
const connectDatabase = require('./database/database')
const helper = require('./utils/Helper')
const PORT = process.env.PORT || 8000
connectDatabase()

app.get('/', (req, res) => {
    res.send('Server is running')
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

