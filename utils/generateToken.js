const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ user: id }, process.env.KEY_TOKEN, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = generateToken;
