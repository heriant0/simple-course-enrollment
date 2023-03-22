const UserEnrolled = require('../models/userEnrolledModel')
const Course = require('../models/courseModel')


const UserEnrolledServices = {
	myCourse: async (userId) => {
		try {
			const result = await UserEnrolled.findAll({
				include: [{
					model: Course
				}],
				order: [
					['id', 'ASC']
				],
				where: {
					userId: userId
				}
			});
			return result;
		} catch (e) {
			return e;
		}
	},
	
	findCourse: async (userId, courseId) => {
		try {
			const result = await UserEnrolled.findOne({
				where: { 
					userId : userId,
					courseId : courseId
				 }
			})
			return result;
		} catch (e) {
			return e;
		}
	},

	enrolledCourse: async(data) => {
		try {
			return UserEnrolled.create(data)
		} catch (e) {
			return e;
		}
	},


}

module.exports = UserEnrolledServices