const india = Object();
india.pm = 'Modi';
india.population = 1300000000;
india.countryCode = '+91';

const nepal = Object.create(india);

console.log(nepal.pm)

nepal.pm = 'Oli';

console.log(india.pm)

console.log(nepal.pm)

const bangladesh = Object.create(null)
console.log(bangladesh)
