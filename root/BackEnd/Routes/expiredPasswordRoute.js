const express = require("express");
const router = express.Router();

const expiredPasswordsController = require("../Controllers/expiredPasswordsController");

router.get("/passwords", expiredPasswordsController.handleExpiredPasswords);

module.exports = router;
