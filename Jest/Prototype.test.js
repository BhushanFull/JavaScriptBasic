var myArray = require('../JavaScript/Prototype');

test('Prototype',()=>{
    expect(myArray.join()).toEqual('foo,bar')

    expect(myArray.name).toEqual('Bhushan');

    expect(myArray.location).toEqual('Ranchi')
})