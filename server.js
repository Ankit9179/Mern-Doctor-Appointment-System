const express = require("express"); //init express
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//config .env file
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(express.json()); // extract JSON data from the body of an HTTP request
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server is running",
  });
});

//port
const port = process.env.PORT || 8081;

//listen port
app.listen(port, () => {
  console.log(
    `server is listening on prot ${port} in ${process.env.DEV_MODE} mode`
      .bgGreen.white
  );
});
