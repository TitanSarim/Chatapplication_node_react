const mongoose = require("mongoose")
require("dotenv").config();


const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Mongodb Connected with server ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};


module.exports = connectDatabase