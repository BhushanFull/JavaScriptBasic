var fun = require('../JavaScript/This');

test('this',()=>{
    // expect(fun.say).toEqual('foo');
    expect(fun.myObject.sayFoo()).toEqual('I am myObject.foo');
})