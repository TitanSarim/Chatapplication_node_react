const ErrorHander = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const { PrismaClient } = require('@prisma/client');
const { getIO } = require('../../socket');

const prisma = new PrismaClient();


const sendMessage = catchAsyncError(async(req, res, next, io) => {

    try {
        
        const {conversationId, message} = req.body
        const receiverId = parseInt(req.params.userid)
        const senderId = req.user.userid

        const chatting = await prisma.messages.create({
            data: {
                conversation: conversationId,
                sender_id: senderId,
                receiver_id: receiverId,
                message: message
            }
        })

        const io = getIO();
        io.emit('newMessage', chatting);

        res.status(200).json({
            success: true,
            message: "Message send successfully",
            chatting
        })


    } catch (error) {
        return next(new ErrorHander(error, 500));
    }

})

const getAllMessages = catchAsyncError(async(req, res, next) => {

    try {

        const {conversationId, } = req.body
        const receiverId = parseInt(req.params.userid)
        const senderId = req.user.userid

        const messages = await prisma.messages.findMany({
            where:{
                conversation: conversationId
            }
        })

        if(!messages){
            return res.status(203).json('You dont have any Messages')
        }

        res.status(200).json({
            success: true,
            message: "Messages retrived successfully",
            messages
        })


    } catch (error) {
        return next(new ErrorHander(error, 500));
    }

}) 

module.exports={
    sendMessage,
    getAllMessages
}