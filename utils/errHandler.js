const errHandler = (message, statusCode) => {
  console.log("HALO PERTAMA");
  const error = new Error(message);
  error.stack = error.stack;
  error.statusCode = statusCode ? statusCode : 500;
  console.log(statusCode, error.stack, message);
  return error;
};

module.exports = errHandler;
