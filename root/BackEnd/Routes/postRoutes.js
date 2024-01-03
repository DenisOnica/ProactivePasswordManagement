const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postControllers");

router.post("/machines", postController.handlePostMachines);

router.post("/processes", postController.handlePostProcesses);

router.post("/applications", postController.handlePostApplications);

router.post("/passwords", postController.handlePostPasswords);

module.exports = router;
