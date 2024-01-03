const mysql = require("../db");

const handlePostMachines = (req, res) => {
  const { MachineName } = req.body;
  const sql = `INSERT INTO machines (MachineName) VALUES (?)`;
  mysql.query(sql, [MachineName], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully:", results);

      res.status(200).json({
        message: "Data inserted successfully",
        insertedMachineId: results.insertId,
      });
    }
  });
};

const handlePostProcesses = (req, res) => {
  const { ProcessName } = req.body;
  const sql = `INSERT INTO processes (ProcessName) VALUES (?)`;
  mysql.query(sql, [ProcessName], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully:", results);

      res.status(200).json({
        message: "Data inserted successfully",
        insertedProcessId: results.insertId,
      });
    }
  });
};

const handlePostApplications = (req, res) => {
  const { ApplicationName } = req.body;
  const sql = `INSERT INTO applications (ApplicationName) VALUES (?)`;
  mysql.query(sql, [ApplicationName], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully:", results);

      res.status(200).json({
        message: "Data inserted successfully",
        insertedApplicationId: results.insertId,
      });
    }
  });
};

const handlePostPasswords = (req, res) => {
  const { data } = req.body;
  const values = data.map(
    ({ MachineID, ProcessID, ApplicationID, PasswordExpirationDate }) => [
      MachineID,
      ProcessID,
      ApplicationID,
      PasswordExpirationDate,
    ]
  );
  const sql = `
  INSERT INTO passwords (MachineID, ProcessID, ApplicationID, PasswordExpirationDate)
  VALUES ?`;

  mysql.query(sql, [values], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully:", results);

      res.status(200).json({
        message: "Data inserted successfully",
        insertedPasswordId: results.insertId,
      });
    }
  });
};

module.exports = {
  handlePostMachines,
  handlePostProcesses,
  handlePostApplications,
  handlePostPasswords,
};
