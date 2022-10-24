
const server = require("./app.js");
require("dotenv").config({path:"./config.env"});

console.log(process.env.NODE_ENV);
const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server run on **9000***`));
