const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isEmployee :
  {

    type: Boolean,
    default: false,

  },
  
  isDoctor: {
    type: Boolean,
    default: false,
  },
  
  notifications: {
    type: Array,
    default: [],
  },
  seenNotifications: {
    type: Array,
    default: [],
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
