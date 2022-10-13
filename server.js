const express = require("express");
const server = express();
const userRouter = require("./users/users-router");
const courseRouter = require("./courses/courses-router")

server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/courses", courseRouter);
 
module.exports = server; 
