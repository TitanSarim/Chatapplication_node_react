const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config.env" });
}

const app = express();

app.use(express.json);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// connect databases

// require('./server/database/user');

//import routes

//use routes

module.exports = app;
