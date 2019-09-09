const {
  expect
} = require('chai');
const Logger = require('../constructor-exports');

describe('constructor-exports', () => {

  const msg = "test";
  it('should return the correct log', () => {
    const logger = new Logger("NAME");
    logger.info(msg);
    logger.warn(msg);
    logger.error(msg);
  });
});