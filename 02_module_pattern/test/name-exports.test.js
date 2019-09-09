const {
  expect
} = require('chai');
const logger = require('../name-exports');

describe('name-exports', () => {

  const msg = "test";
  it('should return the correct log', () => {
    logger.info(msg);
    logger.warn(msg);
    logger.error(msg);
  });
});