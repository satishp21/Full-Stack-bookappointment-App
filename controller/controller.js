const path = require('path')

const Appointment = require('../model/model')

const page = (req,res)=>{
    return res.sendFile(path.join(__dirname,'../view','index.html'))
}

const getusers = async(req,res)=>{
    const users = await Appointment.findAll()
    return res.json(users)
}

const postuser = (req,res)=>{
    const { name, phonenumber, email } = req.body;
    console.log(name, phonenumber, email)
    Appointment.create({name:name,phonenumber:phonenumber,email:email}).then(()=>{
        res.json(name,phonenumber,email)
    })
}

const deleteuser = (req,res)=>{
    Appointment.destroy({where:{id:req.params.id}}).then(()=>{
        res.json({success:true,message:"deleted successfully"})
    })
}

const edituser = (req,res)=>{
    const { name, phonenumber, email } = req.body;
    Appointment.update({name:name, phonenumber:phonenumber, email:email},{where:{id:req.params.id}}).then(()=>{
        res.json({success:true,message:"edited successfully"})
    })
}

module.exports = {
    page,
    getusers,
    postuser,
    deleteuser,
    edituser
}