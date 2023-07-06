const app = require("./Server/app");
const connectDatabase = require("./Server/database/database")
const cors = require('cors')


// handling uncought Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

app.use(cors())

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "Server/.env" });
}


connectDatabase()

//server port
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:3100`);
});



// unhandled promise rejaection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
