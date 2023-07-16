const ErrorHander = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const sendMessage = catchAsyncError(async(req, res, next) => {

    try {
        
        const {conversationId, message} = req.body
        const receiverId = req.params.userid
        const senderId = req.user.userid

        const chatting = await prisma.messages.create({
            data: {
                conversation: conversationId,
                sender_id: senderId,
                receiver_id: receiverId,
                message: message
            }
        })

        res.status(200).json({
            success: true,
            message: "Message send successfully",
            chatting
        })


    } catch (error) {
        return next(new ErrorHander(error, 500));
    }

})

module.exports={
    sendMessage
}