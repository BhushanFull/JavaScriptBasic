var x = false;
var foo = function() {
var x = false;
bar = function() {
 var x = true;
 return x;
}();
return bar;
}
module.exports = foo; 