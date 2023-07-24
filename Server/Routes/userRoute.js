const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {resgisterUser, loginUser, loggedUserProfile, searchUsersByUsername, getUserDetailById, logout, updateProfile} = require('../controllers/userController')
const {uploadAvatar} = require('../utils/awsImageHandler');


const router = express.Router();


router.route("/register").post(resgisterUser)

router.route('/loggedIn').post(loginUser)

router.route('/updateProfile').put(uploadAvatar.single('avatar'), isAuthenticatedUser, updateProfile)

router.route('/userDetail').get(isAuthenticatedUser, loggedUserProfile)

router.route('/searchUser').get(isAuthenticatedUser, searchUsersByUsername)

router.route('/getUser/:userid').get(isAuthenticatedUser, getUserDetailById)

router.route('/logout').get(logout)

module.exports = router