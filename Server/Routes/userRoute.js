const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {resgisterUser} = require('../controllers/userController')


const router = express.Router();


router.route("/register").post(resgisterUser, isAuthenticatedUser)



module.exports = router