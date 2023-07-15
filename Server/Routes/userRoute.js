const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {resgisterUser, loginUser, loggedUserProfile, searchUsersByUsername, getUserDetailById, logout} = require('../controllers/userController')


const router = express.Router();


router.route("/register").post(resgisterUser, isAuthenticatedUser)

router.route('/loggedin').post(loginUser, isAuthenticatedUser)

router.route('/userDetail').get(isAuthenticatedUser, loggedUserProfile)

router.route('/searchUser').get(isAuthenticatedUser, searchUsersByUsername)

router.route('/getUser/:userid').get(isAuthenticatedUser, getUserDetailById)

router.route('/logout').get(logout)

module.exports = router