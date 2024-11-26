const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// utM4zwX8u7nYGpwF
// bdrajuislam246
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on post 3000");
});
