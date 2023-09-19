const Post = require("../../models/posts/post");
const User = require("../../models/users/user");
const errHandler = require("../../utils/errHandler");
const jwt = require("jsonwebtoken");
const getToken = require("../../utils/getToken");

//create
const createPost = async (req, res, next) => {
  const { title, description, category, author } = req.body;
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
    });

    //push and save the post into the user db
    foundAuthor.posts.push(post._id);
    await foundAuthor.save();

    res.json(foundAuthor);
  } catch (error) {
    next(errHandler(error));
  }
};

//delete
const deletePost = (req, res) => {
  res.json({
    msg: "Delete post route",
  });
};

//get all
const getAllPost = (req, res) => {
  res.json({
    msg: "Get all post route",
  });
};

//get one
const getOnePost = (req, res) => {
  res.json({
    msg: "Get one post route",
  });
};

//update
const updatePost = (req, res) => {
  res.json({
    msg: "Update post route",
  });
};

module.exports = { createPost, deletePost, getAllPost, getOnePost, updatePost };
