require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 7070
const {connect} = require('./database/db')

app.use(express.json())

app.listen(port, async () => {
    await connect()
    console.log(`server running at http://localhost:${port}`)
})
