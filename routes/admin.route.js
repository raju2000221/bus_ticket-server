const express = require("express");
const {
  createBus,
  updateBus,
  deleteBus,
} = require("../controllers/bus.controller.js");
const {
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticket.controller.js");

const router = express.Router();

// Define the register endpoint
router.post("/bus", createBus);
router.put("/bus/:id", updateBus);
router.delete("/bus/:id", deleteBus);

router.post("/ticket", createTicket);
router.put("/ticket/:id", updateTicket);
router.delete("/ticket/:id", deleteTicket);

module.exports = router;
