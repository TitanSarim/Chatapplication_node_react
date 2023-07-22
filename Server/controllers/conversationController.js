const ErrorHander = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();



const newConversation = catchAsyncError(async(req, res, next) => {

    try {

        const senderId = req.user.userid;
        const receiverId = parseInt(req.params.userid)

        const exist = await prisma.conversation.findFirst({
            where: {
              AND: [
                { sender_id: senderId },
                { receiver_id: receiverId },
              ],
            },
        });

        if(exist){
            return res.status(200).json("Conversation already exist") 
        }

        const conversation = await prisma.conversation.create({
            data: {
                sender_id: senderId,
                receiver_id: receiverId
            }
        })

        res.status(200).json({
            success: true,
            message: 'User Successfully Added',
            conversation
        })


    } catch (error) {
        return next(new ErrorHander(error, 500));
    }

})

const getAllConversations = catchAsyncError(async(req, res, next)=>{

    try {

        const userId = req.user.userid

        const conversations = await prisma.conversation.findMany({
            where:{
                OR: [
                    { sender_id: userId },
                    { receiver_id: userId },
                ],
            }
        })

        if(!conversations){
            return res.status(203).json('You dont have any conversation')
        }

        const receiver_data = conversations.map((conversation) => conversation.receiver_id);

        const user_data = await prisma.user.findMany({
            where:{
                userid:{ 
                in: receiver_data
                }
            }
        })

        const data = conversations.map((conversation) => {
            const receiverUser = user_data.find((user) => user.userid === conversation.receiver_id);
            return {
              ...conversation,
              receiverUser,
            };
        });
          

        res.status(200).json({
            status: true,
            message: 'All conversations are retrived',
            data
        })


    } catch (error) {
        return next(new ErrorHander(error, 500));
    }

})

const getConversation = catchAsyncError(async(req, res, next) => {

    try {

        const {conversationID} = req.body

        const conversation = await prisma.conversation.findUnique({
            where:{
                conversation_id: conversationID
            }
        })

        if(!conversation){
            return res.status(203).json('You dont have any conversation with this id')
        }

        res.status(200).json({
            status: true,
            message: 'Conversation are retrived',
            conversation
        })


    } catch (error) {
        return next(new ErrorHander(error, 500));
    }

})


module.exports={
    newConversation,
    getAllConversations,
    getConversation
}