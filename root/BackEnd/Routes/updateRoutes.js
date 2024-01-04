const express = require("express");
const router = express.Router();
const updateController = require("../Controllers/updateControllers");

router.put(
  "/password/:PasswordID",
  updateController.handleUpdatePasswordExpirationDate
);

module.exports = router;
