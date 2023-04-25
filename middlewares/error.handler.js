function logErrors(err, request, response, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, request, response, next) {
  response.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, request, response, next) {
  if (err.isBoom) {
    const { output } = err;
    response.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}
module.exports = { logErrors, errorHandler, boomErrorHandler };
