//Logic for credentials
if (process.env.NODE_ENV === "production") {
  //return production
  module.exports = require("./prod");
} else {
  //return development - dev keys
  module.exports = require("./dev");
}
