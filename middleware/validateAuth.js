const errHandler = require("../utils/errHandler");

const validateAuth = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(errHandler("All Form need to be filled"));
  }
  next();
};

module.exports = validateAuth;
