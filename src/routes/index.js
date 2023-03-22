const router = require('express').Router();
const userRoute = require('./userRoute')
const courseRoute = require('./courseRoute')
const userEnrolledRoute = require('./userEnrolledRoute')

router.use('/users', userRoute)
router.use('/courses', userEnrolledRoute)
router.use('/usersenrolled', courseRoute)

module.exports = router

