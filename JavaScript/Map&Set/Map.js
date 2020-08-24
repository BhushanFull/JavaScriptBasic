const map = new Map();
map.set(1, 'Kamesh')
    .set(2, 'Jai')
    .set(3, 'Sandeep')
    .set(4, 'Chandra');

console.log(map);

console.log(map.values());

console.log(map.keys());

for (let [key, value] of map.entries()) {
    console.log(key, value)
}


const arr = [...map];
console.log(arr)