const express = require("express");
const { seedContact } = require("../Controller/seedController");

const seedRouter = express.Router();

seedRouter.get("/contacts", seedContact);

module.exports = seedRouter;
