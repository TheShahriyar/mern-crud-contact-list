const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Contact name is required"],
      trim: true,
      minlength: [3, "Contact name must me minimum 3 character"],
      maxlength: [31, "Contact name can be maximum 31 character"],
    },
    email: {
      type: String,
      required: [true, "Contact email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (v) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    phone: {
      type: String,
      required: [true, "Address is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      minlength: [3, "Address can be minimum 3 character"],
    },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);

module.exports = Contact;
