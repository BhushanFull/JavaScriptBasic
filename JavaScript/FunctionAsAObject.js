var function1 = function(){};
var function2 = [function(){}];
var function3 = {function(){}};

var function4 = function(function1){
    return function1;
}
module.exports = function4;
console.log(function4('bhushan'));