const mysql = require("../db");

const handleExpiredPasswords = (req, res) => {
  const date = new Date().toISOString().substr(0, 10);
  const sql = `
    SELECT
        Machines.MachineName,
        Processes.ProcessName,
        Applications.ApplicationName,
        Passwords.PasswordExpirationDate
    FROM
        Passwords
    JOIN Machines ON Passwords.MachineID = Machines.MachineID
    JOIN Processes ON Passwords.ProcessID = Processes.ProcessID
    JOIN Applications ON Passwords.ApplicationID = Applications.ApplicationID
    WHERE
        Passwords.PasswordExpirationDate = '${date}';
    `;
  mysql.execute(sql, (err, result) => {
    res.json(result);
    console.log(sql);
  });
};

module.exports = {
  handleExpiredPasswords,
};
