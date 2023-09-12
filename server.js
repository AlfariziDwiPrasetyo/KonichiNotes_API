const express = require("express");
const userRoutes = require("./routes/users/userRoute");
const postRoutes = require("./routes/posts/postRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

//body parse
app.use(express.json());

//USER ROUTE
app.use("/api/v1/user/", userRoutes);

//POSTS ROUTE
app.use("/api/v1/post/", postRoutes);

//NOT FOUND ROUTE
app.use("/", (req, res) => {
  res.json({ msg: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
