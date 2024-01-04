const mysql = require("../db");

const handleUpdatePasswordExpirationDate = (req, res) => {
  const passwordID = req.params.PasswordID;
  const { PasswordExpirationDate } = req.body;
  const sql =
    "UPDATE passwords SET PasswordExpirationDate = ? WHERE PasswordID = ?";

  mysql.query(sql, [PasswordExpirationDate, passwordID], (err, results) => {
    if (err) {
      console.error("Error executing update query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Password not found" });
      } else {
        res.status(200).json({ message: "Password updated successfully" });
      }
    }
  });
};

module.exports = {
  handleUpdatePasswordExpirationDate,
};
