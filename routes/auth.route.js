const express = require("express");
const register = require("../controllers/auth.controller.js");

const router = express.Router();

// Define the register endpoint
router.post("/register", register);

module.exports = router;
