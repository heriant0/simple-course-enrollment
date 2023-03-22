const UserEnrolled = require('../models/userEnrolledModel')
const Course = require('../models/courseModel')


const UserEnrolledServices = {
	mycourse: async (userId) => {
		console.log(userId,' userid')
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
			console.log(result, 'rseult')
			return result;
		} catch (e) {
			return e;
		}
	},
	
	findCourse: async (userId, courseId) => {
		console.log(userId, 'user id')
		console.log(courseId, 'course id')
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
		console.log(data, 'data')
		try {
			return UserEnrolled.create(data)
		} catch (e) {
			return e;
		}
	},


}

module.exports = UserEnrolledServices