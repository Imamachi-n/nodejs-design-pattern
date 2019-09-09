function Logger(name) {
  this.name = name;
}

Logger.prototype.info = function (message) {
  console.log(`INFO: [${this.name}] + ${message}`)
}

Logger.prototype.warn = function (message) {
  console.warn(`WARN: [${this.name}] + ${message}`)
}

Logger.prototype.error = function (message) {
  console.error(`ERROR: [${this.name}] + ${message}`)
}

module.exports = Logger;