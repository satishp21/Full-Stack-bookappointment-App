const express = require('express')
const path = require('path')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()

// const Sequelize = require('sequelize');
const routes = require('./routes/routes')
const Appointment = require("./model/model")
const sequelize = require("./util/database")

const app = express()
app.use(cors('*'))
// const bodyparser = require('body-parser')
app.use(express.json());
// app.use(bodyparser.urlencoded({extended:false}))

// app.get('/get-users',async(req,res)=>{
//     const users = await Appointment.findAll()
//     return res.json(users)
// })

app.use('/',routes)

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"index.html"))
// })

// app.post('/',(req,res)=>{
//     const { name, phonenumber, email } = req.body;
//     console.log(name, phonenumber, email)
//     Appointment.create({name:name,phonenumber:phonenumber,email:email}).then(()=>{
//         res.json(name,phonenumber,email)
//     })
// })

// app.delete('/delete-user/:id',(req,res)=>{
//     // console.log(req.params.id,">>>>>>>>>>>>>>>>")

//     Appointment.destroy({where:{id:req.params.id}}).then(()=>{
//         res.json({success:true,message:"deleted successfully"})
//     })
// })

// app.put('/edit-user/:id',(req,res)=>{
//     const { name, phonenumber, email } = req.body;
//     Appointment.update({name:name, phonenumber:phonenumber, email:email},{where:{id:req.params.id}}).then(()=>{
//         res.json({success:true,message:"edited successfully"})
//     })
// })

sequelize.sync().then(()=>{
    app.listen(3000)
}).catch((err) => {
    console.log(err)
})