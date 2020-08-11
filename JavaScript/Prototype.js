var myArray = new Array('foo', 'bar');

Array.prototype.name='Bhushan';
Object.prototype.location='Ranchi';

module.exports  = myArray;

console.log(myArray.name)
console.log(myArray.location)
console.log(myArray.join()); 
