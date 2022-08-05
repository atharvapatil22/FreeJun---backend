// IMPORTS:
const express = require("express");
const cors = require("cors");
// const pool = require("./dbConfig");

// GLOBAL Definations:
const app = express();
const port = 8080;

// MIDDLEWARE:
app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested, Content-Type, Accept Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
//     return res.status(200).json({});
//   }
//   next();
// });

app.get("/", (req, res) => {
  res.send("Server is Live");
});

app.listen(process.env.PORT || port, (error) => {
  if (!error) console.log("Server is running ");
  else console.log("Error occurred, server can't start", error);
});
