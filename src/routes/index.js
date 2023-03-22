const router = require('express').Router();
const userRoute = require('./userRoute')
const courseRoute = require('./courseRoute')
const userEnrolledRoute = require('./userEnrolledRoute')

router.use('/users', userRoute)
router.use('/courses', courseRoute)
router.use('/usersenrolled', userEnrolledRoute)

module.exports = router

