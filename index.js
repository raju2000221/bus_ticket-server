const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user.route.js"); // User routes
const authRoute = require("./routes/auth.route.js"); // Auth routes
const verifyAdmin = require("./middleware/authMiddleware.js");
const admin = require("./routes/admin.route.js");
const cookieParser = require("cookie-parser");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express();
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser());

// Mount the routes
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/admin", verifyAdmin, admin);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
