const userDetailsController = (req, res) => {
  res.json({
    msg: "User Details Route",
  });
};

const profileImageUpdate = (req, res) => {
  res.json({
    msg: "Image Profile Update Route",
  });
};

const userProfileController = (req, res) => {
  res.json({
    msg: "Profile Route",
  });
};

module.exports = {
  userDetailsController,
  profileImageUpdate,
  userProfileController,
};
