require('dotenv').config({ path: './config.env' });

// NOTE: UncaughtException accurs inside middleware in production mode error become a global erro
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 🔥 Shutting down...');
  console.log(err.name, err.message,err.stack);
  process.exit(1);
}); 

const server = require('./app.js');
const port = process.env.PORT || 8000;

const listenServer = server.listen(port, () =>
  console.log(`server run on **9000***`)
);

// all unhandle promise errors such db password erro
// they need to restart a server 😢

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLE REJECTION! 🔥 Shutting down...');
  console.log(err.name, err.message,err.stack);
  
  listenServer.close(() => {
    process.exit(1);
  });
});
 