const User = require("../../models/users/user");

//register
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //found user
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.json({
        msg: "The email has been taken",
      });
      return;
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });
    console.log(newUser);

    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
};

//login
const loginController = (req, res) => {
  res.json({
    msg: "Login Route",
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
