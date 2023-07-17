const app = require("./Server/app");
require('dotenv').config()
const cors = require('cors')
const { setIO } = require('./socket');
const http = require('http').Server(app)
const io = require('socket.io')(http);


app.use(cors())


// handling uncought Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}


// websocket
const ios =  io.on('connection', socket=> {
  console.log(socket.id);
  console.log('User id connected');

  socket.on('disconnect', () =>{
    console.log("A user is diconnected");
  })

})
setIO(ios)
// websocketend


//server port
const server = http.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});




// unhandled promise rejaection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
