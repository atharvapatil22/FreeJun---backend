const Pool = require("pg").Pool;
const pool = new Pool({
  user: "vjlnxbsmltgasx",
  host: "ec2-54-85-56-210.compute-1.amazonaws.com",
  database: "d762r96fctmdid",
  password: "2c8f582d0b7bb653edd0bc11f9e746e31a6239c738e3bd09cc312a445ca6b991",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
