var  Country = require('../JavaScript/CallAndApply');

var india = new Country('Jharkhand','Ranchi',834005)
test('Call to access the value',()=>{
    expect(india.getName()).toMatch('Jharkhand');
    expect(india.getCity()).toContain('Ranchi',834005)
})