const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    busName: { type: String, required: true },
    busNumber: { type: String, required: true, unique: true },
    busType: { type: String, required: true },
    schedule: [
      {
        departureTime: { type: Date, required: true },
        arrivalTime: { type: Date, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
