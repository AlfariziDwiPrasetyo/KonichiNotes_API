//login
const loginController = (req, res) => {
  res.json({
    msg: "Login Route",
  });
};

//register
const registerController = (req, res) => {
  res.json({
    msg: "Register Route",
  });
};

//update
const updateUserController = (req, res) => {
  res.json({
    msg: "Update Route",
  });
};

//password-update
const passwordUpdateController = (req, res) => {
  res.json({
    msg: "Password update Route",
  });
};

//logout
const logoutController = (req, res) => {
  res.json({
    msg: "logout Route",
  });
};

module.exports = {
  loginController,
  registerController,
  updateUserController,
  passwordUpdateController,
  logoutController,
};
