const express = require("express");
const getAllPost = require("../../controllers/posts/getAllPostController");
const getOnePost = require("../../controllers/posts/getOnePostController");
const createPost = require("../../controllers/posts/createPostController");
const deletePost = require("../../controllers/posts/deletePostController");
const updatePost = require("../../controllers/posts/updatePostController");

const postRoutes = express.Router();

postRoutes.get("/", getAllPost);
postRoutes.get("/:id", getOnePost);
postRoutes.put("/update/:id", updatePost);
postRoutes.post("/create", createPost);
postRoutes.delete("/delete/:id", deletePost);

module.exports = postRoutes;
