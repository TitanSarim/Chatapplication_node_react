const mongoose = require("mongoose")
const validator  = require("validator");

const userSchema = new mongoose.Schema({


    username:{
        type:String,
        required: [true, "Please Enter Your username"],
        unique: true,
    },

    email:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },

    password:{
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password Should be greater then 8 Characters"],
        validate: {
            validator: validator.isStrongPassword,
            message: "Passoword must be a combination of Capital, Small, Numerical & Special Characters",
        },
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },



})


module.exports = mongoose.model("User", userSchema);