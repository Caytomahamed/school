const express = require('express');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
const chapterRouter = require("./routes/chapterRoutes")
const reviewRouter = require("./routes/reviewRoutes"); 
const videoRouter = require("./routes/videoRoutes");
const qandARouter = require("./routes/qandARoutes");
const replyRouter = require("./routes/replyRouter"); 

const AppError = require('./utils/appError');
const globalErroHandler = require('./controllers/erroController');

const app = express();
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/chapters', chapterRouter);
app.use('/api/v1/reviews', reviewRouter); 
app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/QandA', qandARouter);
app.use('/api/v1/reply', replyRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


app.use(globalErroHandler);
module.exports = app;
