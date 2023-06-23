const mongoose = require("mongoose");
const colores = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connection successfully${mongoose.connection.host}`.bgYellow.black
    );
  } catch (error) {
    console.log(`Mongo connection error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
