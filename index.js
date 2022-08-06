// IMPORTS:
const express = require("express");
const cors = require("cors");
const pool = require("./dbConfig");

// GLOBAL Definations:
const app = express();
const port = 8080;

// MIDDLEWARE:
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Live");
});

app.get("/players", (req, res) => {
  let hasMore = false;
  let { page, limit } = req.query;
  if (!page) page = 1;
  if (!limit) limit = 10;

  const offset = page * limit - limit;

  pool.query(
    "Select * from football_players LIMIT $1 OFFSET $2;",
    [limit, offset],
    (err, results) => {
      if (err) {
        res.status(400).json({ message: "Some Error Occurred", error: err });
      } else {
        if (results.rows.length % limit === 0) hasMore = true;
        res.status(200).json({
          message: "success",
          hasMore: hasMore,
          players: results.rows,
        });
      }
    }
  );
});

app.get("/stadiums", (req, res) => {
  // let hasMore = false;
  let { page, limit } = req.query;
  if (!page) page = 1;
  if (!limit) limit = 10;

  const offset = page * limit - limit;

  pool.query(
    "Select * from football_stadiums LIMIT $1 OFFSET $2;",
    [limit, offset],
    (err, results) => {
      if (err) {
        res.status(400).json({ message: "Some Error Occurred", error: err });
      } else {
        // if (results.rows.length % limit === 0) hasMore = true;
        res.status(200).json({
          message: "success",
          // hasMore: hasMore,
          stadiums: results.rows,
        });
      }
    }
  );
});

app.listen(process.env.PORT || port, (error) => {
  if (!error) console.log("Server is running ");
  else console.log("Error occurred, server can't start", error);
});
