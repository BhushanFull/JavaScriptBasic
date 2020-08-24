const obj = {
    name: 'bhushan',
    age: 23,
    location: 'India'
};

const { name: firstName } = obj;
console.log(firstName);

const { city = 'Ranchi', pincode = 834001 } = {}

console.log(city, pincode)


const obj1 = {};
({ foo: obj1.name } = { foo: 'bhushan' });
console.log(obj1)

const { name, age } = obj;

console.log(name, age)