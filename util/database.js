const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_name,process.env.DB_user,process.env.DB_password,{
    dialect : "mysql",
    host : process.env.HOST
})

module.exports = sequelize