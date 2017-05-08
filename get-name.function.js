var prompt = require('prompt');
var Questions = require("./questions.function");

module.exports = function GetName(question, callback) {
  prompt.start();
  prompt.get(question, callback);
};