const sentErrorDev = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sentErrorProd = (err, res) => {
  console.log(err);
  // errors we trusted
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // programing(databases) or unknow erro
  } else {
    // log error
    console.log('ERROR 🔥', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

module.exports = (err, req, res, next) => {
  console.log(typeof process.env.NODE_ENV, `$process.env.NODE_ENV1}` === 'production');
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sentErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    console.log('hello');
    sentErrorProd(err, res);
  }
};
