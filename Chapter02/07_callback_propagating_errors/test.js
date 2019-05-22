"use strict"

const fs = require("fs");

function readJSON(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    let parsed;
    if (err) {
      // propagete the error and exit the current function
      return callback(err);
    }

    try {
      // parse the file contents
      parsed = JSON.parse(data);
    } catch (err) {
      // catch parsing errors
      return callback(err);
    }
    // no errors, propagate just the data
    callback(null, parsed);
  })
}

let cb = (err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
}

readJSON('valid.json', cb);
readJSON('invalid.json', cb);