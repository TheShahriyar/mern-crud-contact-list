const express = require("express");
const {
  getAllContactList,
  handleDeleteContact,
  handleCreateContact,
  handleUpdateContact,
  handleGetContact,
} = require("../Controller/contactController");
const contactRouter = express.Router();

contactRouter.get("/", getAllContactList);
contactRouter.post("/", handleCreateContact);
contactRouter.delete("/:id", handleDeleteContact);
contactRouter.put("/:id", handleUpdateContact);
contactRouter.get("/:id", handleGetContact);

module.exports = contactRouter;
