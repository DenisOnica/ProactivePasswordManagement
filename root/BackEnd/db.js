const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "proactivepasswordmanagement",
  password: "waterfall1",
});

let sql = "SELECT * FROM passwords;";

pool.execute(sql, (err, result) => {
  if (err) throw err;
  console.log("conected");
});

module.exports = pool;
