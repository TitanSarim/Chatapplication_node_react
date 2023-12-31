const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());




// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:5173'
}));




//import routes
const user = require('./routes/userRoute')
const conversation = require('./routes/conversationRoute')
const message = require('./routes/messageRoute')

//use routes
app.use("/api/v1", user)
app.use("/api/v1", conversation)
app.use("/api/v1", message)



module.exports = app;
