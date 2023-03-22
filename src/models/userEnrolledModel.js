const { DataTypes } = require('sequelize')
const sequelize  = require('../config/database')
// const User = require('./userModel')
// const Course = require('./courseModel')

const UserEnrolled = sequelize.define('user_enrolls', {
  // Model attributes are defined here
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'user_id'
		},
		courseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'course_id'
		},
		enrolledDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'enrolled_date'
		},
}, {
  // Other model options go here
	sequelize, 
    createdAt: false,
    updatedAt: false
});

// UserEnrolled.belongsTo(User);
// UserEnrolled.belongsTo(Course);

sequelize.sync({ force: false }).then(() => {
  console.log(`Tables Users Enrolled created!`);
});

module.exports = UserEnrolled