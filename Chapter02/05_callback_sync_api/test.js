"use strict"

const fs = require('fs');
const cache = {};

function consistentReadSync(filename, callback) {
  if (cache[filename]) {
    // invoked synchronously
    console.log("Cache: " + cache[filename])
    return cache[filename];
  } else {
    // asynchronous function
    cache[filename] = fs.readFileSync(filename, 'utf8')
    console.log("Original: " + cache[filename])
    return cache[filename];
  }
}

console.log(consistentReadSync('data.txt'));
// the next call will read from the cache
console.log(consistentReadSync('data.txt'));