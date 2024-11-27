const express = require("express");
const {
  createBus,
  updateBus,
  deleteBus,
} = require("../controllers/bus.controller");

const router = express.Router();

// Define the register endpoint
router.post("/bus", createBus);
router.put("/bus/:id", updateBus);
router.delete("/bus/:id", deleteBus);

module.exports = router;
