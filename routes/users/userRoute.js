const express = require("express");
const loginController = require("../../controllers/users/loginController");
const registerController = require("../../controllers/users/registerController");
const updateUserController = require("../../controllers/users/updateUserController");
const userDetailsController = require("../../controllers/users/userDetailsController");
const userProfileController = require("../../controllers/users/userProfileController");
const passwordUpdate = require("../../controllers/users/passwordUpdate");
const profileImageUpdate = require("../../controllers/users/profileImageUpdate");
const logout = require("../../controllers/users/logoutController");

const userRoutes = express.Router();

//get
userRoutes.get("/register", registerController);
userRoutes.get("/login", loginController);
userRoutes.get("/profile/:id", userProfileController);
userRoutes.get("/logout", logout);
userRoutes.get("/:id", userDetailsController);

//put
userRoutes.put("/password-update/:id", passwordUpdate);
userRoutes.put("/update/:id", updateUserController);
userRoutes.put("/profile-image-update/:id", profileImageUpdate);

//export route
module.exports = userRoutes;
