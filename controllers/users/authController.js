const bcrypt = require("bcryptjs");
const User = require("../../models/users/user");
const generateToken = require("../../utils/generateToken");

//register
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //find user
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.json({
        msg: "The email has been taken",
      });
      return;
    }

    //hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //save user to db
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
};

//login
const loginController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //find user
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      res.json({
        msg: "Account not found",
      });
      return;
    }

    //compare password
    const decodedPassword = await bcrypt.compare(password, foundUser.password);

    if (decodedPassword && name === foundUser.name) {
      const token = generateToken(foundUser._id);
      res.json({ foundUser, token });
      return;
    }

    res.json({
      msg: "Username or Password is wrong",
    });
  } catch (error) {
    res.json(error);
  }
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
