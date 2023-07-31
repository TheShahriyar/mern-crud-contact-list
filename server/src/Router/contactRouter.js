const express = require("express");
const {
  getAllContactList,
  handleDeleteContact,
  handleCreateContact,
} = require("../Controller/contactController");
const contactRouter = express.Router();

contactRouter.get("/", getAllContactList);
contactRouter.post("/", handleCreateContact);
contactRouter.delete("/:id", handleDeleteContact);

module.exports = contactRouter;
