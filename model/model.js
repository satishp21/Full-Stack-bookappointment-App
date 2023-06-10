const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Appointment = sequelize.define('appointment',{
    id :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type :Sequelize.STRING,
    },
    phonenumber : {
        type:Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING 
    }
})

module.exports = Appointment

