import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
    departureTime: { type: Date, required: true },
    price: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
