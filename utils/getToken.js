const getToken = (req) => {
  const token = req.headers.authorization;
  if (token !== undefined) {
    return token.split(" ")[1];
  }
  return {
    msg: "Token not found or invalid",
  };
};

module.exports = getToken;
