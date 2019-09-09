const {
  EventEmitter
} = require('events');
const fs = require('fs');

class FindPattern extends EventEmitter {
  constructor(regex) {
    super();
    this.files = [];
    this.regex = regex;
  }

  addFile(file) {
    this.files.push(file);
    return this;
  }

  find() {
    this.files.forEach((file) => {
      fs.readFile(file, 'utf-8', (err, content) => {
        if (err) {
          return this.emit('error', err);
        }

        this.emit('readFile', file);
        let match;
        if (match = content.match(this.regex)) {
          match.forEach(element => this.emit('found', file, element));
        }
      });
    });
    return this;
  }
}

module.exports = {
  FindPattern
}