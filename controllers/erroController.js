const AppError = require('../utils/appError');

const handleErrorDB = (err) => {
   return new AppError(`${err.message}`, 400)
};

const handleMissingRequireField = (err) => {
  return new AppError("missing same required fields ",422);
}

const handleInvalidTypeEntity = () => {
  return new AppError('Unexpected json error.check your json', 422);
}

const sentErrorDev = (err, res) => {
  console.log(`err.stack`.match());
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sentErrorProd = (err, res) => {
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
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sentErrorDev(err, res);
  } else if (process.env.NODE_ENV != 'production') {

    let error = {...err,};
    if (err.message === 'No course found with that ID') error = handleErrorDB(err);
    if (error.code === 'SQLITE_CONSTRAINT') error = handleMissingRequireField(err);
    if(error.type) error = handleInvalidTypeEntity(err)
    sentErrorProd(error, res);
  }
};
 