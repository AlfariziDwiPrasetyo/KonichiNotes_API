//create
const createPost = (req, res) => {
  res.json({
    msg: "create post route",
  });
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
