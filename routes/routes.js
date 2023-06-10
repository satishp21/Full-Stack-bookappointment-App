const express = require('express')

const router = express.Router()

const controller = require('../controller/controller')

router.get('/',controller.page)

router.get('/get-users',controller.getusers)

router.post('/',controller.postuser)

router.delete('/delete-user/:id',controller.deleteuser)

router.delete('/edit-user/:id',controller.edituser)

module.exports = router