const express = require('express')

const app = express()
const  port  = require('../config').api.port
const db = require('./utils/database')
const userRouter = require('./users/users.router')

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(()=> console.log('Database Synced'))
    .catch((err) => console.log(err))

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.use('/api/v1/users', userRouter)

app.listen(port, () => {
    console.log(`Server Started at port ${port}`)
})

