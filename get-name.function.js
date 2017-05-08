  module.exports = function GetName() {
  var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['username'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log( "Hello " + result.username + ". My name is Siris.");
  });};