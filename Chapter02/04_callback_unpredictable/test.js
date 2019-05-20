"use strict"

const fs = require('fs');
const cache = {};

function inconsistentRead(filename, callback) {
  if (cache[filename]) {
    // invoked synchronously
    console.log("Cache: " + cache[filename])
    callback(cache[filename]);
  } else {
    // asynchronous function
    fs.readFile(filename, 'utf8', (err, data) => {
      cache[filename] = data;
      console.log("Original: " + data)
      callback(data);
    });
  }
}

function createFileReader(filename) {
  const listeners = [];
  // listener: function
  inconsistentRead(filename, value => {
    console.log("After Read: " + value)
    listeners.forEach(listener => listener(value));
  });

  return {
    onDataReady: listener => listeners.push(listener)
  };
}

const reader1 = createFileReader('data.txt');
reader1.onDataReady(data => {
  console.log('First call data: ' + data);

  // ...sometime later we try to read again from
  // the same file
  const reader2 = createFileReader('data.txt');
  reader2.onDataReady(data => {
    console.log('Second call data: ' + data);
  });
});