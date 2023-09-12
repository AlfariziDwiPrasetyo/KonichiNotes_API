const express = require("express");
const userRoutes = require("./routes/users/userRoute");
const postRoutes = require("./routes/posts/postRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

//USER ROUTE
app.use("/api/v1/user/", userRoutes);

//POSTS ROUTE
app.use("/api/v1/post/", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
