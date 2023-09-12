const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, process.env.KEY_TOKEN, (err, decoded) => {
    if (err) {
      return false;
    }
    console.log(decoded);
    return decoded;
  });
};

module.exports = verifyToken;
