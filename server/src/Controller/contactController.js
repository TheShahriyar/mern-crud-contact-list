const createError = require("http-errors");
const Contact = require("../Model/contactModel");
const { successResponse } = require("./responseController");

const getAllContactList = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 4;

    const searchRegEx = new RegExp(".*" + search + ".*", "i");

    const filter = {
      $or: [
        { name: { $regex: searchRegEx } },
        { email: { $regex: searchRegEx } },
        { phone: { $regex: searchRegEx } },
        { address: { $regex: searchRegEx } },
      ],
    };

    const contacts = await Contact.find(filter)
      .limit(limit)
      .skip((page - 1) * limit);

    const count = await Contact.find(filter).countDocuments();

    if (!contacts) throw createError(404, "No Contacts Found!!");

    return successResponse(res, {
      statusCode: 200,
      message: "Contacts returned successfully",
      payload: {
        contacts,
        pagination: {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          previousPage: page - 1 > 0 ? page - 1 : null,
          nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllContactList };
