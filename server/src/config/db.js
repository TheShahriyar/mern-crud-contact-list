const mongoose = require("mongoose");
const { mongoDBUrl } = require("../secret");

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongoDBUrl, options);
    console.log("DB connection successful");

    mongoose.connection.on("error", (error) => {
      console.error("DB connection error: ", error);
    });
  } catch (error) {
    console.error("Couldn't connect to DB", error.toString());
  }
};

module.exports = connectDB;
