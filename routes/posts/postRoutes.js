const express = require("express");
const {
  createPost,
  getAllPost,
  getOnePost,
  deletePost,
  updatePost,
} = require("../../controllers/posts/postController");
const isLogin = require("../../middleware/isLogin");
const multer = require("multer");
const storage = require("../../config/cloudinary");

//instance of cloudinary
const upload = multer({ storage });

const postRoutes = express.Router();

postRoutes.post("/create", isLogin, upload.single("postImg"), createPost);
postRoutes.get("/", getAllPost);
postRoutes.get("/:id", getOnePost);
postRoutes.put("/update/:id", isLogin, upload.single("postImg"), updatePost);
postRoutes.delete("/delete/:id", isLogin, deletePost);

module.exports = postRoutes;
