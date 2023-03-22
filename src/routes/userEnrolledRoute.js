const router = require('express').Router();
const userEnrolledController = require('../controllers/userEnrolledController')

router.post('/', userEnrolledController.enrolledCourse )
router.get('/:userId', userEnrolledController.getMyCourse )

module.exports = router