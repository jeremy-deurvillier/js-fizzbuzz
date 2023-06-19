//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

//'use strict';

var fizzbuzz = function (x) {
//
// YOUR CODE GOES HERE
//
    let result = x;

    // Multiple de 3
    if (x % 3 === 0 && x % 5 !== 0) {
        result = 'fizz';
    }

    // Multiple de 5
    if (x % 5 === 0 && x % 3 !== 0) {
        result = 'buzz';
    }

    // Multiple de 3 ET 5
    if (x % 3 === 0 && x % 5 === 0) {
        result = 'fizzbuzz';
    }
    
    
    return result;

    //return [is3Multiple, is5Multiple, bothMultiple];
};

//module.exports = { fizzbuzz: fizzbuzz };
