const {
  expect
} = require('chai');
const spider = require('../spider-01-sequential-iteration');

describe('spider-01-sequential-iteration', () => {
  it('should', () => {
    spider("https://imamachi-n.com/", 1, (err) => {
      if (err) {
        console.log(err);
        process.exit();
      } else {
        console.log('Download complete');
      }
    });
  })
})