const express=require('express')
const router=express.Router()
const {authenticateUser}=require('../app/middleware/authenticate')

const usersController=require('../app/controllers/userController')


router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)



module.exports=router