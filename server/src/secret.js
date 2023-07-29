require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongoDBUrl = process.env.MONGODB_ATLAS_URL;
const defaultImagePath =
  process.env.DEFAULT_CONTACT_IMAGE || "public/images/user.png";

module.exports = { serverPort, mongoDBUrl, defaultImagePath };
