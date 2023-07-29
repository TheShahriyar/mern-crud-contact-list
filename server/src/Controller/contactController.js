const getAllContactList = (req, res, next) => {
  try {
    res.status(200).send({
      message: "All contacts are returned!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllContactList };
