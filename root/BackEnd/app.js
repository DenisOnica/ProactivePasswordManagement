const express = require("express");
const mysql = require("./db");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/show", (req, res) => {
  let sql = `SELECT * FROM passwords`;
  mysql.execute(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});
