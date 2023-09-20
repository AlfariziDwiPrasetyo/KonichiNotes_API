const Post = require("../../models/posts/post");
const User = require("../../models/users/user");
const errHandler = require("../../utils/errHandler");
const jwt = require("jsonwebtoken");
const getToken = require("../../utils/getToken");
const mongoose = require("mongoose");

//create
const createPost = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    //find author
    const authorId = jwt.decode(getToken(req)).user;
    const foundAuthor = await User.findById(authorId);

    //create post
    const post = await Post.create({
      title,
      description,
      category,
      author: foundAuthor._id,
      image: req.file.path,
    });

    //validate
    if (!title || !description || !category) {
      return next(errHandler("All form are required"));
    }

    //push and save the post into the user db
    foundAuthor.posts.push(post._id);
    await foundAuthor.save();

    res.json(post);
  } catch (error) {
    next(errHandler(error));
  }
};

//get all
const getAllPost = async (req, res, next) => {
  try {
    const allPost = await Post.find();
    res.json(allPost);
  } catch (error) {
    next(errHandler(error));
  }
};

//get one
const getOnePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id))
      return next(errHandler("Not Found", 404));
    const post = await Post.findById(id);
    if (post === undefined) return next(errHandler("Not Found", 404));
    res.json({
      post,
    });
  } catch (error) {
    next(errHandler(error.message));
  }
};

//update
const updatePost = async (req, res, next) => {
  try {
    const { title, description, category } = req.body;
    const postId = req.params.id;
    const foundPost = await Post.findByIdAndUpdate(
      postId,
      {
        $set: {
          title,
          description,
          category,
        },
      },
      { new: true }
    );
    res.json(foundPost);
  } catch (error) {
    next(errHandler(error.message));
  }
};

//delete
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    if (!mongoose.isValidObjectId(postId))
      return next(errHandler("Not Found", 404));
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) return next(errHandler("Not Found", 404));
    res.json({
      msg: "Post deleted successfully",
    });
  } catch (error) {
    next(errHandler(error.message));
  }
};

module.exports = { createPost, deletePost, getAllPost, getOnePost, updatePost };
