const mongoose = require("mongoose");
require("../../config/dbConnect");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    passowrd: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
    },
    posts: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
