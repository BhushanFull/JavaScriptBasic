const removeDublicate = require('./RemoveDublicate');

test('Remove Dublicate element',()=>{
    let array = [1,1,1,1,2,5,7,7,7,7,5,5,5]
    expect(removeDublicate(array)).toEqual([1,2,5,7])
})