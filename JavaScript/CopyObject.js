var myObject = {};
var copyMyObject = myObject;
console.log(myObject +' '+ copyMyObject);
myObject.name="bhushan";
console.log(myObject.name +' '+ copyMyObject.name);


var person = {
    name:"bhushan",
    age:23,
    weight:67.5
};
var person2 = person;
var person3 = {
    name:"bhushan",
    age:23,
    weight:67.5
};

console.log(person)
console.log(person2===person)
console.log(person2===person3)
console.log(person3);