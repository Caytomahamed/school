const server = require("./app.js");
require("dotenv").config();

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`server run on **9000***`));
