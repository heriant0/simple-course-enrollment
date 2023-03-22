const CourseServices = require('../services/courseService')

class CourseController {
  static async getAllCourses(req, res) {
		try {
			const result = await CourseServices.getAllCourses()
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

	static async getCourse(req, res) {
		try {
			const id = req.params.id
			const result = await CourseServices.getCourse(id)
			if (result) {
				return res.status(200).json({
					message: 'Get data succesfully',
					data: result
				}) 
			} else {
				return res.status(200).json({
					message: 'Data not found',
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

	static async addCourse(req, res) {
		try {
			const data = req.body
			const result = await CourseServices.addCourse(data)
			if (result) {
				return res.status(200).json({
					message: 'Course has been saved'
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

	static async updateCourse(req, res) {
		try {
			const id = req.params.id
			const data = {
				courseName: req.body.courseName,
				coursePrice: req.body.coursePrice,
				courseDescription: req.body.courseDescription
			}
			const result = await CourseServices.updateCourse(id, data)
			if (result) {
				return res.status(200).json({
					message: 'Course has been updated'
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

	static async delete(req, res) {
		try {
			const id = req.params.id
			const findUser = await CourseServices.getCourse(id)
			if (!findUser) {
				return res.status(400).json({
					message: 'Data not found'
				})
			} else {
				await CourseServices.delete(id)
				return res.status(200).json({
					message: 'Course has been deleted'
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}
}

module.exports = CourseController