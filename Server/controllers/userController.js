const ErrorHander = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');
const User = require("../models/User");
const sendToken = require("../utils/jwtToken")
const bcrypt = require('bcryptjs');

const resgisterUser = catchAsyncError(async(req, res, next) => {

    const {username, email, password} = req.body;

    


})
