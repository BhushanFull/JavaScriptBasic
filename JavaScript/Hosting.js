a = -1;
b = 10;

function sum(){
    if(a === 0){
        console.log("a is +ve");
        var a = 5;
    }
    console.log("a = ",a," b = ",b);
    return a + b;
}

var a;
var b;

console.log(sum());
