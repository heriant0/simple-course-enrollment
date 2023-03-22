const router = require('express').Router();
const courseController = require('../controllers/courseController')

router.get('/', courseController.getAllCourses )
router.post('', courseController.addCourse )
router.get('/:id', courseController.getCourse )
router.put('/:id', courseController.updateCourse )
router.delete(':id', courseController.delete )

module.exports = router