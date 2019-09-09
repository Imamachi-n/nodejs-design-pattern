module.exports = (message) => {
  console.log(message);
}

module.exports.verbose = (message) => {
  console.log("DEBUG: " + message);
}