const {
  EventEmitter
} = require('events');
const fs = require('fs');

function findPattern(files, regex) {
  const emitter = new EventEmitter();
  files.forEach((file) => {
    fs.readFile(file, 'utf-8', (err, content) => {
      if (err) {
        return emitter.emit('error', err);
      }

      emitter.emit('readFile', file);
      let match;
      if (match = content.match(regex)) {
        match.forEach(element => emitter.emit('found', file, element));
      }
    });
  });
  return emitter;
}

module.exports = {
  findPattern
}