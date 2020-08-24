const countFrequency = require('./CountFrequency');

test('Frequency count',()=>{
    const marks = [45,66,77,88,45,45,77,77,77,77,33]
    expect(countFrequency(marks)).toEqual([[45,3],[66,1],[77,5],[88,1],[33,1]])
    
})