const Ticket = require("../models/ticket.model.js"); // Import the Ticket model
const Bus = require("../models/bus.model.js"); // Import the Bus model to associate tickets with buses

// Controller for creating a new ticket
const createTicket = async (req, res) => {
  const { bus, price, availableSeats } = req.body;

  try {
    // Check if the bus exists before creating a ticket
    const busExists = await Bus.findById(bus);
    if (!busExists) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // Create a new ticket instance
    const newTicket = new Ticket({
      bus,
      price,
      availableSeats,
    });

    // Save the new ticket to the database
    await newTicket.save();

    // Respond with the created ticket data
    res.status(201).json({
      message: "Ticket created successfully",
      ticket: newTicket,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating ticket",
      error: error.message,
    });
  }
};

// Controller for updating a ticket
const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { bus, price, availableSeats } = req.body;

  try {
    // Find the ticket by ID and update it
    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      { bus, price, availableSeats },
      { new: true }
    );

    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({
      message: "Ticket updated successfully",
      ticket: updatedTicket,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error updating ticket",
      error: error.message,
    });
  }
};

// Controller for deleting a ticket
const deleteTicket = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the ticket by ID and delete it
    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({
      message: "Ticket deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting ticket",
      error: error.message,
    });
  }
};

// Export the controllers for use in routes
module.exports = { createTicket, updateTicket, deleteTicket };
