const {
  expect
} = require('chai');
const {
  FindPattern
} = require('../es6-version');

describe('basics', () => {
  it('should be listened by event listeners', () => {
    const file1 = './test/test1.txt';
    const file2 = './test/invalid.txt';
    const findPatternObj = new FindPattern(/test\w+/g);
    findPatternObj
      .addFile(file1)
      .addFile(file2)
      .find()
      .on('readFile', file => {
        console.log(file + " wad read")
        expect(file).to.equal(file1);
      })
      .on('found', (file, match) => {
        console.log('Matched "' + match + '" in file: ' + file);
        expect(file).to.equal(file1);
        expect(match).to.equal("test1");
      })
      .on('error', err => console.log("error: " + err.message));
  });
});