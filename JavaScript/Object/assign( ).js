const obj = new Object({ name: 'Bhushan', age: 23 });
const jai = new Object('Jai');

console.log(obj)

obj.qualification = 'MCA'
console.log(obj)

console.log(jai)

jai.age = 26;

console.log(jai)

for (var [key, val] of Object.entries(jai)) {
    console.log(key, val)
}

const india = Object();
india.pm = 'Modi';
india.population = 1300000000;
india.countryCode = '+91';
india.printPm = ()=>console.log(`PM of india is ${india.pm}`)

console.log(india)

const nepal = Object.assign(india);
console.log(nepal == india)

nepal.area = 25000;
console.log(nepal)
console.log(india)
