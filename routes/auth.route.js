const express = require("express");
const {
  register,
  login,
  logout,
} = require("../controllers/auth.controller.js");

const router = express.Router();

// Define the register endpoint
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
