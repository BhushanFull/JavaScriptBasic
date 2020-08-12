var myFunction = function(){return 'foo'};
console.log(myFunction()); 
var myObject = {myFunction: function(){return 'bar';}}
console.log(myObject.myFunction()); 

var Cody = function(){
this.living = true;
this.age = 33;
this.gender = 'male';
this.getGender = function() {return this.gender;};
}
var cody = new Cody();
console.log(cody); 
var greet = {
runGreet: function(){
//  console.log(this.name,arguments[0],arguments[1]);
    var temp = [];
    temp.push(this.name);
    temp.push(arguments[0]);
    temp.push(arguments[1])
return temp;
}
}
var cody = {name:'cody'};
var lisa = {name:'lisa'};

module.exports.callFunc = greet.runGreet.call(cody,'foo','bar'); 
module.exports.applayFunc = greet.runGreet.apply(lisa, ['foo','bar']);