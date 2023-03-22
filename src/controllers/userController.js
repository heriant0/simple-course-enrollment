const UserServices = require('../services/userService')

class UserController {
	static async getAllUsers(req, res)  {
		console.log('masuk sini gak?')
		try {
			const result = await UserServices.getAllUsers()
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

	static async getUser(req, res) {
		try {
			const id = req.params.id
			const result = await UserServices.getUser(id)
			if (result) {
				return res.status(200).json({
					message: 'Get data succesfully',
					data: result
				}) 
			} else {
				return res.status(200).json({
					message: 'Data not found, please register!',
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

	static async addUser(req, res) {
		try {
			const data = req.body
			const findUser = await UserServices.findbyEmail(req.body.userEmail)
			if (findUser) {
				return res.status(400).json({
					message: 'User already exists'
				})
			}
			const result = await UserServices.addUser(data)
			if (result) {
				return res.status(200).json({
					message: 'User has been saved'
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}

	static async updateUser(req, res) {
		try {
			const id = req.params.id
			const data = {
				userName: req.body.userName,
				userEmail: req.body.userEmail
			}
			const result = await UserServices.updateUser(id, data)
			if (result) {
				return res.status(200).json({
					message: 'User has been updated'
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
			const findUser = await UserServices.getUser(id)
			if (!findUser) {
				return res.status(400).json({
					message: 'Data not found'
				})
			} else {
				await UserServices.deleteUser(id)
				return res.status(200).json({
					message: 'User has been deleted'
				})
			}
		} catch (e) {
			return res.status(500).json({
				message: "Internal server error"
			})
		}
	}
}

module.exports = UserController