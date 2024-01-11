const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    img:{
      type: String,
    },
  },{ timestamps: true }
);

var UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
