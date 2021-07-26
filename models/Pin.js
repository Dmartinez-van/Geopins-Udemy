const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    // Do not need _ID field, it is automatically created upon new user creation by DB.
    title: String,
    content: String,
    image: String,
    latitude: Number,
    longitude: Number,
    author: { type: mongoose.Schema.ObjectId, ref: "User" }, // Connect to a specific OBJECTID in DB, ref: tells which schema that ID uses
    comments: [
      {
        text: String,
        createdAt: { type: Date, default: Date.now },
        author: { type: mongoose.Schema.ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
