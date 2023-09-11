const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the Database......");
  } catch (error) {
    console.log("Connection Failed", error.message);
  }
};

dbConnect();
