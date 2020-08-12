var func = require('../JavaScript/Call&Apply');

var callFunc = func.callFunc;
var applayFunc = func.applayFunc;

test('call',()=>{
    expect(callFunc).toEqual( ["cody", "foo", "bar"])
    expect(applayFunc).toEqual( ["lisa", "foo", "bar"])

})