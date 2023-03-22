const { DataTypes } = require('sequelize');
const sequelize  = require('../config/database')
const UserEnrolled = require('./userEnrolledModel')


const Course = sequelize.define('courses', {
  // Model attributes are defined here
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	courseName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'course_name'
	},
	coursePrice: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: 'course_price'
	},
	courseDescription: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'course_description'
	}
}, {
  // Other model options go here
	sequelize, 
    createdAt: false,
    updatedAt: false
});

Course.hasMany(UserEnrolled);
UserEnrolled.belongsTo(Course);

sequelize.sync({ force: false }).then(() => {
  console.log(`Tables Courses created!`);
});

module.exports = Course;