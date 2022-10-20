const express = require("express");
const server = express();
const userRouter = require("./routes/userRoutes");
const courseRouter = require("./routes/courseRoutes")

server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/courses", courseRouter);
 
module.exports = server; 
 