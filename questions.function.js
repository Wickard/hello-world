module.exports = function Questions(callback) {
    console.log("1. What is your favorit colour \n 2. What is your favorite song? \n 3. What is your favorit sport? \n 4. Thats all.") 

    var prompt = require('prompt');
 
    prompt.start();

    prompt.get(['response'], function (err, result) {
        switch(result.response){
        case '1':
            console.log("Purple");
            callback();
            break;
        case '2':
            console.log("Call me Maybe");
            callback();
            break;
        case '3':
            console.log("Soccar");
            callback();
            break;
        case '4':
            console.log("ok Goodbye")
            break;
        default:
            console.log("Input error please enter a number 1-4.")
            callback();
            break;
        }

    }); 
};

  