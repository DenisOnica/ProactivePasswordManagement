const express = require("express");
const router = express.Router();

const deleteController = require("../Controllers/deleteControllers");

router.delete("/machine/:MachineID", deleteController.handleDeleteMachine);

router.delete("/process/:ProcessID", deleteController.handleDeleteProcess);

router.delete(
  "/application/:ApplicationID",
  deleteController.handleDeleteApplication
);

router.delete("/password/:PasswordID", deleteController.handleDeletePassword);

module.exports = router;
