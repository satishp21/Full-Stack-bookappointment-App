const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()

const routes = require('./routes/routes')
const Appointment = require("./model/model")
const sequelize = require("./util/database")

const app = express()
app.use(cors('*'))
app.use(express.json());

app.use('/',routes)

sequelize.sync().then(()=>{
    app.listen(3000)
}).catch((err) => {
    console.log(err)
})