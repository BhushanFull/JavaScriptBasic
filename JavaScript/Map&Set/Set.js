const set = new Set();
set.add(1).add(2).add(3).add(1).add(4).add(5);

console.log(set)

set.forEach(value=>{
    console.log(value)
})

for(let i of set){
    console.log(i)
}

console.log([...set])
