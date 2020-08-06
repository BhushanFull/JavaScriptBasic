var myArray = ['bhushan','singh','roushan'];
console.log(myArray.sort());

var marks = new Array(5,1,3,7,2);
console.log(marks);
console.log(marks.toString());


var myObject = [{
    name:'bhushan',
    age:23
},{
    name:'Jai',
    age:25
}];
console.log(myObject)

for(var key in myObject){
    if(myObject.hasOwnProperty(key)){
        console.log(myObject[0])
        console.log(key);
    }
}