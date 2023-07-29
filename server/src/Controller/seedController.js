const Contact = require("../Model/contactModel");
const data = require("../data");

const seedContact = async (req, res, next) => {
  try {
    // Deleteing all existing users
    await Contact.deleteMany({});

    // Inserting new user
    const users = await Contact.insertMany(data.users);

    //Successful Response
    return res.status(201).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { seedContact };
