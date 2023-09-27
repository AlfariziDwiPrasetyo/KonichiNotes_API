const bcrypt = require("bcryptjs");
const User = require("../../models/users/user");
const generateToken = require("../../utils/generateToken");
const errHandler = require("../../utils/errHandler");
const getToken = require("../../utils/getToken");
const jwt = require("jsonwebtoken");

//register
const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //find user
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return next(errHandler("The Email has been taken"));
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
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //find user
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return next(errHandler("user not found"));
    }

    //compare password
    const decodedPassword = await bcrypt.compare(password, foundUser.password);

    if (decodedPassword) {
      const token = generateToken(foundUser._id);
      return res.json({
        foundUser,
        token,
      });
    }

    next(errHandler("The email or password are wrong "));
  } catch (error) {
    res.json(error);
  }
};

//update
const updateUserController = async (req, res, next) => {
  try {
    const id = jwt.decode(getToken(req)).user;
    const { name, email } = req.body;
    if (!name && !email) {
      return next(errHandler("Please filled the form"));
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { name, email } },
      { new: true }
    );
    console.log(updatedUser);
    res.json(updatedUser);
  } catch (error) {
    next(errHandler(error));
  }
};

//password-update
const passwordUpdateController = async (req, res) => {
  const password = req.body.password;
  const oldPassword = req.body.oldPassword;
  const id = jwt.decode(getToken(req)).user;
  const user = await User.findById(id);

  //not allow <6 length pw
  if (password.length < 6) {
    return next(errHandler("Sorry the password need to be 6 or longer"));
  }

  // //hash the password
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);

  //change the password
  const compareOldPassword = await bcrypt.compare(oldPassword, user.password);
  if (!compareOldPassword) {
    return next(errHandler("Sorry your Old password is wrong"));
  } else {
    await User.findByIdAndUpdate(
      id,
      { $set: { password: newPassword } },
      { new: true }
    );
    res.json({ status: "Success", msg: "Password succesfully updated" });
    return;
  }
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
