const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {sendMessage} = require('../controllers/messageController') 

const router = express.Router();


router.route('/sendMessage/:userid').post(isAuthenticatedUser, sendMessage)

// router.route('/allConversations').get(isAuthenticatedUser, getAllConversations)

// router.route('/singleConversation').get(isAuthenticatedUser, getConversation)


module.exports = router