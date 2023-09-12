const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//USER

//user register
app.post("/api/v1/user/register", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//user login
app.post("/api/v1/user/login", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//user details
app.get("/api/v1/user/:id", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//update user
app.put("/api/v1/user/update/:id", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//user profile
app.get("/api/v1/user/profile/:id", (req, res) => {
  res.json({
    msg: "connected",
  });
});

//user password update
app.put("/api/v1/user/password-update/:id", (req, res) => {
  res.json({
    msg: "connected",
  });
});

//user img-profile update
app.put("/api/v1/user/profile-image-update/:id", (req, res) => {
  res.json({
    msg: "connected",
  });
});

//logout
app.get("/api/v1/user/logout", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//POSTS ===========================

//fetch all
app.get("/api/v1/post", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//get one
app.get("/api/v1/post/:id", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//create post
app.post("/api/v1/post/create", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//update post
app.put("/api/v1/post/update/:id", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

//delete post
app.delete("/api/v1/post/delete /:id", (req, res) => {
  res.json({
    msg: "connected....",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
