const User = require('../models/userModel')

const UserServices = {
	getAllUsers: async () => {
		try {
			const result = await User.findAll({
				order: [
					['id', 'ASC']
				]
			});
			return result;
		} catch (e) {
			return e;
		}
	},
	
	getUser: async (id) => {
		try {
			const result = await User.findByPk(id)
			return result;
		} catch (e) {
			return e;
		}
	},

	addUser: async(data) => {
		try {
			return User.create(data)
		} catch (e) {
			return e;
		}
	},

	updateCourse: async(id, data) => {
		try {
			return User.update(data, {
				where: { id }
			})
		} catch (e) {
			return e;
		}
	}, 

	findbyEmail: async(email) => {
		try {
			const result = User.findOne({
				where: {userEmail: email}
			})

			return result
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

module.exports = UserServices