const express = require("express");
const userRouter = require("./routes/userRoutes");
const courseRouter = require("./routes/courseRoutes");
const AppError = require("./utils/appError");
const globalErroHandler = require("./controllers/erroController");

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/courses", courseRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErroHandler);
module.exports = app;
