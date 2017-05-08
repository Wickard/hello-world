const Say = require("./say.function");
const GetName = require("./get-name.function");
const Questions = require("./questions.function");

(function HelloWorld(sayFunction, getNameFunction, QuestionsFunction) {

var name;
Say("Greetings Human! What is your name?");
GetName(["username"], function OnNameGotten(err, result) {
    name = result.username;
    console.log( "Hello " + name + ". My name is siri.");

    var OnQuestionAnswered = function () {
        Questions(function() { OnQuestionAnswered(); })
    };

    Questions(function() { OnQuestionAnswered() });
});
})();




