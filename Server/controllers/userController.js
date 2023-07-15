const ErrorHander = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const generatedToken = require("../utils/jwtToken")
const setTokenCookie = require("../utils/sendToken")
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const resgisterUser = catchAsyncError(async(req, res, next) => {

    const {username, email, password} = req.body;

    try {

        const emails = await prisma.user.findUnique({
            where: {email}
        })

        const userNames = await prisma.user.findUnique({
            where: {username}
        })

        if(emails !== null && userNames !== null){
            return next (new ErrorHander('User with email or username already exists', 401))
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data:{
                username,
                email,
                password: hashedPassword
            }
        })

        const token = generatedToken(user.userid, user.email, user.username)
        setTokenCookie(res, token)

        console.log("Agent created successfully");


        res.status(201).json({
            success: true,
            message: "Account created successfully",
            token
        })


    } catch (error) {
        return next(new ErrorHander(error, 500))
    }


})


const loginUser = catchAsyncError(async(req, res, next) => {

    const {email, password} = req.body;

    try {
        
    } catch (error) {
        
    }

})


module.exports = {
    resgisterUser
}