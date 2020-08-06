var Vechile = function Vechile(type,price,name){
    this.type = type;
    this.price = price;
    this.name = name;
}

var bike = new Vechile('two wheelar',150000,'Dukati');
console.log(typeof bike);
console.log(bike);
console.log(bike.constructor);
