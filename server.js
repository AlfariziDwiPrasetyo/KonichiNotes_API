const express = require("express");
require("./config/dbConnect");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
