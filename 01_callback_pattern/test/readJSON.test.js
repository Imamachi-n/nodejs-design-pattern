const {
  expect
} = require('chai');
const readJSON = require('../readJSON');

describe('readJSON', () => {
  it('should return the correct string', () => {
    let callback = (err, data) => {
      console.log("ERROR:");
      console.log(err);
      console.log("DATA:");
      console.log(data);
    }
    readJSON('./test/valid_json.json', callback)
    readJSON('./test/invalid_json.json', callback)
  });
});