const jwt = require("jsonwebtoken");
const getToken = require("../../utils/getToken");
const User = require("../../models/users/user");

const userDetailsController = async (req, res) => {
  const id = req.params.id;
  const foundUser = await User.findById(id);
  res.json(foundUser);
};

const profileImageUpdate = (req, res) => {
  res.json({
    msg: "Image Profile Update Route",
  });
};

const userProfileController = async (req, res) => {
  const userToken = jwt.decode(getToken(req)).user;
  const userProfile = await User.findById(userToken);
  console.log(userProfile);

  res.json({
    msg: "Success",
    user: userProfile,
  });
};

module.exports = {
  userDetailsController,
  profileImageUpdate,
  userProfileController,
};
