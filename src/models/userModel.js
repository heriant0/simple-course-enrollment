const { DataTypes } = require('sequelize');
const sequelize  = require('../config/database')
const UserEnrolled = require('./userEnrolledModel')

const User = sequelize.define('users', {
  // Model attributes are defined here
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	userName: {
		type: DataTypes.STRING,
		allowNull: false,
		field: 'user_name'
	},
	userEmail: {
		type: DataTypes.INTEGER,
		allowNull: false,
		field: 'user_email'
	},
}, {
  // Other model options go here
	sequelize, 
    createdAt: false,
    updatedAt: false
});

User.hasMany(UserEnrolled);
UserEnrolled.belongsTo(User);

sequelize.sync({ force: false }).then(() => {
  console.log(`Tables Users created!`);
});

module.exports = User