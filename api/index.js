const server = require('./src/server');
const logger = require('./src/providers/logger');
const config = require('./config');

console.info(config);

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

server
  .start(port, host)
  .then((data) => {
    logger.info(`Server listening on port ${port}`);
    process.on('SIGTERM', () => process.exit(1));
    process.on('SIGINT', () => process.exit(1));
  })
  .catch(err => {
    logger.error(`Something went wrong launching the server: ${err}`);
    process.exit(1);
  });
