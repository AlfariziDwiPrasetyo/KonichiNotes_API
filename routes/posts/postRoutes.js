const express = require("express");
const {
  createPost,
  getAllPost,
  getOnePost,
  deletePost,
  updatePost,
} = require("../../controllers/posts/postController");
const isLogin = require("../../middleware/isLogin");

const postRoutes = express.Router();

postRoutes.post("/create", isLogin, createPost);
postRoutes.get("/", getAllPost);
postRoutes.get("/:id", getOnePost);
postRoutes.put("/update/:id", isLogin, updatePost);
postRoutes.delete("/delete/:id", isLogin, deletePost);

module.exports = postRoutes;
