const { transports, format, createLogger } = require('winston');
const { printf, timestamp, combine } = format;

const console = new transports.Console({
  format: format.simple(),
  prettyPrint: true,
  colorize: true,
});
const myFormat = printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`);

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat,
  ),
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(console);
}

module.exports = logger;
