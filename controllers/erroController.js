const sentErrorDev = (err, res) => {
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
  }else {
    // log error
    console.log("ERROR 🔥", err);
    res.status(500).json({
      status: "error",
      message:"Something went very wrong!"
    })
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sentErrorDev(err, red);
  }else if(process.env.NODE_ENV === "production"){
    sentErrorProd(err,res)
  }
};
