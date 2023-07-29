const express = require("express");
const { getAllContactList } = require("../Controller/contactController");
const contactRouter = express.Router();

contactRouter.get("/", getAllContactList);

module.exports = contactRouter;
