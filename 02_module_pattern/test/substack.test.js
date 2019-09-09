const {
  expect
} = require('chai');
const logger = require('../substack-exports');

describe('substack', () => {

  const msg = "test";
  it('should return the correct log', () => {
    logger(msg);
    logger.verbose(msg);
  });
});