const express = require('express')

const app = express()
const { port } = require('../config').api

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.listen(port, () => {
    console.log(`Server Started at port ${port}`)
})

