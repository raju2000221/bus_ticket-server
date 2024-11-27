const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user.route.js"); // User routes
const authRoute = require("./routes/auth.route.js"); // Auth routes
const verifyAdmin = require("./middleware/authMiddleware.js"); // Middleware
const adminRoute = require("./routes/admin.route.js"); // Admin routes
const cookieParser = require("cookie-parser");

dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

// Mount the routes
app.use("/auth", authRoute);
app.use("/admin", verifyAdmin, adminRoute);
app.use("/", userRoute);

// Catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
