function func1(a,b){
    return a+b;
}
var func2 = function(func1){
        
        return 10 * func1(3,5);
};
module.exports.func2 = func2;
module.exports.func1 = func1;
console.log(func2(func1));