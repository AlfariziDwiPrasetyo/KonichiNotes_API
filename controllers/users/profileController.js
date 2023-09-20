const jwt = require("jsonwebtoken");
const getToken = require("../../utils/getToken");
const User = require("../../models/users/user");
const errHandler = require("../../utils/errHandler");

const userDetailsController = async (req, res) => {
  const id = req.params.id;
  const foundUser = await User.findById(id);
  res.json(foundUser);
};

const profileImageUpdate = async (req, res, next) => {
  try {
    const profileImg = req.file.path;
    const userId = jwt.decode(getToken(req)).user;

    //update image
    const updateImage = await User.findByIdAndUpdate(
      userId,
      { $set: { profileImg } },
      { new: true }
    );
    res.json(updateImage);
  } catch (error) {
    next(errHandler(error));
  }
};

const userProfileController = async (req, res) => {
  const userToken = jwt.decode(getToken(req)).user;
  const userProfile = await User.findById(userToken).populate("posts");
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
