const obj = { name: 'Bhushan' };
const obj1 = { name: 'Bhushan' };

console.log(Object.is(obj, obj))

console.log(Object.is(obj, obj1))

console.log(NaN == NaN)
console.log(Object.is(NaN, NaN))

console.log(0 == -0)
console.log(Object.is(0, -0))

console.log('' == false)
console.log(Object.is('', false))


