require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 7070

app.use(express.json())

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})
