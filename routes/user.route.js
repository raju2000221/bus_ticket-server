const express = require("express");
const {
  getAllBuses,
  getAvailableTickets,
  purchaseTicket,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/buses", getAllBuses);
router.get("/tickets", getAvailableTickets);
router.post("/tickets/purchase", purchaseTicket);

module.exports = router;
