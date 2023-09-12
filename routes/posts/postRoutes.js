const express = require("express");
const {
  createPost,
  getAllPost,
  getOnePost,
  deletePost,
  updatePost,
} = require("../../controllers/posts/postController");

const postRoutes = express.Router();

postRoutes.get("/", getAllPost);
postRoutes.get("/:id", getOnePost);
postRoutes.put("/update/:id", updatePost);
postRoutes.post("/create", createPost);
postRoutes.delete("/delete/:id", deletePost);

module.exports = postRoutes;
