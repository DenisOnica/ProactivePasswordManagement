const express = require("express");

const tableController = require("../Controllers/tableControllers");

const router = express.Router();

router.get("/passwords", tableController.handlePasswordsTable);

router.get("/machines", tableController.handleMachinesTable);

router.get("/processes", tableController.handleProcessesTable);

router.get("/applications", tableController.handleApplicationsTable);

module.exports = router;
