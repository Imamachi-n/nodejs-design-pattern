class Logger {
  constructor(name) {
    this.name = name;
  }

  info(msg) {
    console.log(`INFO: [${this.name}] ${msg}`)
  }

  warn(msg) {
    console.warn(`WARN: [${this.name}] ${msg}`)
  }

  error(msg) {
    console.error(`ERROR: [${this.name}] ${msg}`)
  }
}

module.exports = Logger;