const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//import routes
const user = require('./routes/userRoute')
const conversation = require('./routes/conversationRoute')

//use routes
app.use("/api/v1", user)
app.use("/api/v1", conversation)




module.exports = app;
