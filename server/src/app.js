const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const xssClean = require("xss-clean");
const contactRouter = require("./Router/contactRouter");

app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/contacts", contactRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World! This is testing",
  });
});

//Client Error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found!",
  });
  next();
});

// Server error
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
