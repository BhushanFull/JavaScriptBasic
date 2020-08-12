 foo = 'foo';
var myObject = {foo: 'I am myObject.foo'};
var sayFoo = function() {
    return this['foo'];
};

myObject.sayFoo = sayFoo;

module.exports.myObject = myObject; 

// module.exports.say = sayFoo();

