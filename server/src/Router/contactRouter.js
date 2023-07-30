const express = require("express");
const {
  getAllContactList,
  handleDeleteContact,
} = require("../Controller/contactController");
const contactRouter = express.Router();

contactRouter.get("/", getAllContactList);
contactRouter.delete("/:id", handleDeleteContact);

module.exports = contactRouter;
