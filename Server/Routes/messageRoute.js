const express = require('express')
const {isAuthenticatedUser} = require('../middleware/auth')
const {sendMessage, getAllMessages} = require('../controllers/messageController') 
const { getIO } = require('../../socket');


const router = express.Router();
const io = getIO();

router.route('/sendMessage/:userid').post(isAuthenticatedUser, (req, res, next) => {
    sendMessage(req, res, next, io);
});

router.route('/allmessages').get(isAuthenticatedUser, getAllMessages)



module.exports = router