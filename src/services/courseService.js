const Course = require('../models/courseModel')

const CourseServices = {
	getAllCourses: async () => {
		try {
			const result = await Course.findAll({
				order: [
					['id', 'ASC']
				]
			});
			return result;
		} catch (e) {
			return e;
		}
	},
	
	getCourse: async (id) => {
		try {
			const result = await Course.findByPk(id)
			return result;
		} catch (e) {
			return e;
		}
	},

	addCourse: async(data) => {
		try {
			return Course.create(data)
		} catch (e) {
			return e;
		}
	},

	updateCourse: async(id, data) => {
		try {
			return Course.update(data, {
				where: { id }
			})
		} catch (e) {
			return e;
		}
	}, 

	delete: async(id) => {
		try {
			return Course.destroy({
				where: { id }
			})
		} catch (e) {
			return e;
		}
	}
}

module.exports = CourseServices