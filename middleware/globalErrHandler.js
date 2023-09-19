const globalErrHandler = (err, req, res, next) => {
  const stack = err.stack;
  const message = err.message;
  const statusCode = err.statusCode ? err.statusCode : 500;

  res.status(statusCode).json({
    message,
    stack,
  });
};

module.exports = globalErrHandler;
