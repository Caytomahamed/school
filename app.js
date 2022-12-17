const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');

const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
const chapterRouter = require('./routes/chapterRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const videoRouter = require('./routes/videoRoutes');
const qandARouter = require('./routes/qandARoutes');
const replyRouter = require('./routes/replyRouter');
const AppError = require('./utils/appError');
const globalErroHandler = require('./controllers/erroController');

const app = express();

// set security HTTP headers
app.use(helmet());

// Data sanitization again XSS
// app.use(xss());

// Limit request from same API
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 100 requests per `window` (here, per 1hour)
  message: 'Too many requests from this IP.please try again in an hour',
});
app.use('/api', limiter);

// body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// routes
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

// Global errors handler
app.use(globalErroHandler);
module.exports = app;
