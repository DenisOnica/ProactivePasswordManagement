const express = require("express");
const mysql = require("./db");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/table/passwords", (req, res) => {
  let sql = `SELECT * FROM passwords`;
  mysql.execute(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.get("/table/machine", (req, res) => {
  const sql = `SELECT * FROM machines`;
  mysql.execute(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.get("/table/processes", (req, res) => {
  const sql = `SELECT * FROM processes`;
  mysql.execute(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.get("/table/applications", (req, res) => {
  const sql = `SELECT * FROM applications`;
  mysql.execute(sql, (err, result) => {
    console.log(result);
    res.json(result);
  });
});
