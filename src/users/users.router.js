const router = require('express').Router()

const userServices = require('./users.services')

router.get("/", userServices.getAllUser) //? /api/v1/users
router.post("/", userServices.postUser) //? /api/v1/users
router.get("/users/:id", userServices.getUserById) //? /api/v1/users/:id


// router.delete("/users/:id") //? /api/v1/users/:id
// router.put("/users/:id") //? /api/v1/users/:id //Modificaciones generales
// router.patch("/users/:id") //? /api/v1/users/:id //Modificaciones parciales

// app.use('/api/v1/users', userRouter)
// app.use('/api/v1/auth', userRouter)
// app.use('/api/v1/posts', userRouter)
// app.use('/api/v1/categories', userRouter)

module.exports = router

