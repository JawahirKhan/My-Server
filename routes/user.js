const express = require('express')
const router= express.Router()
const {getAllUsers} = require('../controler/user')


router.get('/',getAllUsers)


module.exports=router