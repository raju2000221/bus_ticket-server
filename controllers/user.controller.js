const Bus = require("../models/bus.model.js");
const Ticket = require("../models/ticket.model");

const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find(); // Fetch all buses
    res.status(200).json(buses);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error retrieving buses",
      error: error.message,
    });
  }
};

const getAvailableTickets = async (req, res) => {
  const { busId, departureTime } = req.query;

  try {
    const query = {};
    if (busId) query.bus = busId; // Filter by bus ID if provided
    if (departureTime) query.departureTime = new Date(departureTime); // Filter by departure time if provided

    const tickets = await Ticket.find(query).populate("bus"); // Fetch tickets and populate bus details
    res.status(200).json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error retrieving tickets",
      error: error.message,
    });
  }
};

const purchaseTicket = async (req, res) => {
  const { ticketId, quantity } = req.body;

  try {
    // Find the ticket by ID
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    // Check if seats are available
    if (ticket.availableSeats <= 0) {
      return res
        .status(400)
        .json({ message: "No seats available for this ticket" });
    }

    // Decrease available seats
    ticket.availableSeats -= quantity;

    // Save the updated ticket
    await ticket.save();

    res.status(200).json({
      message: "Ticket purchased successfully",
      ticket,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error purchasing ticket",
      error: error.message,
    });
  }
};

module.exports = { getAvailableTickets, getAllBuses, purchaseTicket };
