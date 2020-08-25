
const srilanka = Object();
srilanka.continent = 'Asia';

// console.log(india)
console.log(srilanka)

Object.freeze(srilanka);
srilanka.population = 100000
srilanka.continent = 'Africa';

console.log(srilanka)