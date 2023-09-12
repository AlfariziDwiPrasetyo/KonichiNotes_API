const express = require("express");
const {
  registerController,
  passwordUpdateController,
  updateUserController,
  loginController,
  logoutController,
} = require("../../controllers/users/authController");

const {
  userDetailsController,
  userProfileController,
  profileImageUpdate,
} = require("../../controllers/users/profileController");

const userRoutes = express.Router();

//post
userRoutes.post("/register", registerController);
userRoutes.post("/login", loginController);

//get
userRoutes.get("/profile/:id", userProfileController);
userRoutes.get("/logout", logoutController);
userRoutes.get("/:id", userDetailsController);

//put
userRoutes.put("/password-update/:id", passwordUpdateController);
userRoutes.put("/update/:id", updateUserController);
userRoutes.put("/profile-image-update/:id", profileImageUpdate);

//export route
module.exports = userRoutes;
