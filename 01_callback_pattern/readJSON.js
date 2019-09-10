const fs = require('fs');

function readJSON(filename, callback) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      // propagate the error and exit the current function 'readJSON'
      return callback(err);
    }

    let parsed;
    try {
      // parse the file contents
      parsed = JSON.parse(data);
    } catch (err) {
      // catch the parsing errors and propagate the error
      return callback(err);
    }

    // propagate just the data if no errors
    return callback(null, parsed);
  })
}

module.exports = readJSON;