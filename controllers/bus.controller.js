const { model } = require("mongoose");
const Bus = require("../models/bus.model.js"); // Import the Bus model

// Controller for creating a new bus
const createBus = async (req, res) => {
  const { busName, busType, schedule, busNumber } = req.body;

  try {
    // Create a new bus instance with the provided data
    const newBus = new Bus({
      busName,
      busType,
      schedule,
      busNumber,
    });
    if (
      !busName ||
      !busType ||
      !schedule ||
      !busNumber ||
      busName === "" ||
      busType === "" ||
      schedule === "" ||
      busNumber === ""
    ) {
      return res.send.status(400).json({ message: "All field are required" });
    }
    // Save the new bus to the database
    await newBus.save();

    // Respond with a success message and the created bus data
    res.status(201).json({
      message: "Bus created successfully",
      bus: newBus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating bus",
      error: error.message,
    });
  }
};

// Controller for updating a bus
const updateBus = async (req, res) => {
  const { id } = req.params;
  const { busName, busType, schedule, busNumber } = req.body;

  try {
    // Find the bus by ID and update it with the provided data
    const updatedBus = await Bus.findByIdAndUpdate(
      id,
      { busName, busType, schedule, busNumber },
      { new: true }
    );

    if (!updatedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    res.status(200).json({
      message: "Bus updated successfully",
      bus: updatedBus,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error updating bus",
      error: error.message,
    });
  }
};

// Controller for deleting a bus
const deleteBus = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the bus by ID and delete it
    const deletedBus = await Bus.findByIdAndDelete(id);

    if (!deletedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    res.status(200).json({
      message: "Bus deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting bus",
      error: error.message,
    });
  }
};

// Export the controllers for use in the routes
module.exports = { createBus, updateBus, deleteBus };
