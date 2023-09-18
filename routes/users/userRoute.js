const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
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

//middleware
const isLogin = require("../../middleware/isLogin");
const validateAuth = require("../../middleware/validateAuth");

const userRoutes = express.Router();

//multer
const upload = multer({ storage });

//post
userRoutes.post("/register", validateAuth, registerController);
userRoutes.post("/login", loginController);

//get
userRoutes.get("/profile", isLogin, userProfileController);
userRoutes.get("/logout", isLogin, logoutController);
userRoutes.get("/:id", userDetailsController);

//put
userRoutes.put("/update", isLogin, updateUserController);
userRoutes.put("/password-update", isLogin, passwordUpdateController);
userRoutes.put(
  "/profile-image-update/:id",
  isLogin,
  upload.single("profile"),
  profileImageUpdate
);

//export route
module.exports = userRoutes;
