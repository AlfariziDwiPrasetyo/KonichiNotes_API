const errHandler = require("../utils/errHandler");
const getToken = require("../utils/getToken");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  const token = getToken(req);
  const verify = verifyToken(token);
  if (!verify) {
    next(errHandler("You need to login first"));
  } else {
    next();
  }
};

module.exports = isLogin;
