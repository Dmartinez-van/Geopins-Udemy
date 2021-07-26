const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // Do not need _ID field, it is automatically created upon new user creation by DB.
  name: String,
  email: String,
  picture: String,
});

module.exports = mongoose.model("User", UserSchema);
