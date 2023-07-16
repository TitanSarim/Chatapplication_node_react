const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {newConversation, getAllConversations, getConversation} = require('../controllers/conversationController') 

const router = express.Router();


router.route('/newConversation/:userid').post(isAuthenticatedUser, newConversation)

router.route('/allConversations').get(isAuthenticatedUser, getAllConversations)

router.route('/singleConversation').get(isAuthenticatedUser, getConversation)


module.exports = router