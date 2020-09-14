require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 7070
const {connect} = require('./database/db')
const user = require('./routes/users')
const product = require('./routes/product')

app.use(express.json())

app.use('/users', user);
app.use('/products', product);


app.listen(port, async () => {
    await connect()
    console.log(`server running at http://localhost:${port}`)
})
