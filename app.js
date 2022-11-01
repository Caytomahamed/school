const express = require('express');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
const chaptersRouter = require("./routes/chapterRoutes")

const AppError = require('./utils/appError');
const globalErroHandler = require('./controllers/erroController');

const app = express();
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/chapters', chaptersRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


app.use(globalErroHandler);
module.exports = app;
