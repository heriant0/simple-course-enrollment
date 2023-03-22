const UserEnrolledServices = require('../services/userEnrolledService')

class UserEnrolledController {
	static async getMyCourse(req, res)  {
		try {
			const userId = +req.params.userId
			const result = await UserEnrolledServices.myCourse(userId)
			return res.status(200).json({
				message: 'Get data succesfully',
				data: result
			})
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

	static async enrolledCourse(req, res) {
		try {
			const data = req.body
			const findCourse = await UserEnrolledServices.findCourse(data.userId, data.courseId)
			
			if (findCourse) {
				return res.status(400).json({
					message: 'Course already enrolled'
				})
			}
			const result = await UserEnrolledServices.enrolledCourse(data)
			if (result) {
				return res.status(200).json({
					message: 'Course has been enrolled'
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

}

module.exports = UserEnrolledController