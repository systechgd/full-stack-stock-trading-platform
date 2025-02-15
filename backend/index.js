require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3333;
const uri = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log(`App started and listening on port ${PORT} `);
  mongoose.connect(uri);
  console.log("DB Connected");
});
