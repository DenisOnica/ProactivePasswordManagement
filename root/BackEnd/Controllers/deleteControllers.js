const mysql = require("../db");

const handleDeleteMachine = (req, res) => {
  const machineID = req.params.MachineID;

  const sql = "DELETE FROM machines WHERE MachineID = ?";
  mysql.query(sql, [machineID], (err, results) => {
    if (err) {
      console.error("Error executing delete query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Machine not found" });
      } else {
        res.status(200).json({ message: "Machine deleted successfully" });
      }
    }
  });
};

const handleDeleteProcess = (req, res) => {
  const processID = req.params.ProcessID;

  const sql = "DELETE FROM processes WHERE ProcessID = ?";
  mysql.query(sql, [processID], (err, results) => {
    if (err) {
      console.error("Error executing delete query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Process not found" });
      } else {
        res.status(200).json({ message: "Process deleted successfully" });
      }
    }
  });
};

const handleDeleteApplication = (req, res) => {
  const applicationID = req.params.ApplicationID;

  const sql = "DELETE FROM applications WHERE ApplicationID = ?";
  mysql.query(sql, [applicationID], (err, results) => {
    if (err) {
      console.error("Error executing delete query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Application not found" });
      } else {
        res.status(200).json({ message: "Application deleted successfully" });
      }
    }
  });
};

const handleDeletePassword = (req, res) => {
  const passwordID = req.params.PasswordID;

  const sql = "DELETE FROM passwords WHERE PasswordID = ?";
  mysql.query(sql, [passwordID], (err, results) => {
    if (err) {
      console.error("Error executing delete query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Password not found" });
      } else {
        res.status(200).json({ message: "Password deleted successfully" });
      }
    }
  });
};

module.exports = {
  handleDeleteMachine,
  handleDeleteProcess,
  handleDeleteApplication,
  handleDeletePassword,
};
