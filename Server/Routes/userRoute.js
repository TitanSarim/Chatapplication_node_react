const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {resgisterUser, loginUser, loggedUserProfile, searchUsersByUsername, getUserDetailById, logout} = require('../controllers/userController')


const router = express.Router();


router.route("/register").post(resgisterUser)

router.route('/loggedIn').post(loginUser)

router.route('/userDetail').get(isAuthenticatedUser, loggedUserProfile)

router.route('/searchUser').get(isAuthenticatedUser, searchUsersByUsername)

router.route('/getUser/:userid').get(isAuthenticatedUser, getUserDetailById)

router.route('/logout').get(logout)

module.exports = router