const mysql = require("../db");

const handlePasswordsTable = (req, res) => {
  let sql = `SELECT * FROM passwords`;
  mysql.execute(sql, (err, result) => {
    res.json(result);
  });
};

const handleMachinesTable = (req, res) => {
  const sql = `SELECT * FROM machines`;
  mysql.execute(sql, (err, result) => {
    res.json(result);
  });
};

const handleProcessesTable = (req, res) => {
  const sql = `SELECT * FROM processes`;
  mysql.execute(sql, (err, result) => {
    res.json(result);
  });
};

const handleApplicationsTable = (req, res) => {
  const sql = `SELECT * FROM applications`;
  mysql.execute(sql, (err, result) => {
    res.json(result);
  });
};

module.exports = {
  handlePasswordsTable,
  handleMachinesTable,
  handleProcessesTable,
  handleApplicationsTable,
};
