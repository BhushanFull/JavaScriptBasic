// const marks = [88,45,67,45,88,45,45,67,23,88];

function countFrequency(marks){
    const mapCount = new Map();
    for( let i of marks)
    if(mapCount.has(i)){
        let temp = mapCount.get(i);
        mapCount.set(i,temp + 1);
    }
    else{
        mapCount.set(i,1);
        console.log(i)
    }
    return [...mapCount]
}
// console.log([...countFrequency(marks)]);
module.exports = countFrequency;
