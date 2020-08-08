function state(){
    console.log('state is call....',this.name)
    return this.name;
}

function city(){
    var array = new Array();
    array.push(this.city);
    array.push(this.pincode);
    return array;
}
 
class  Country{
   constructor(name,city,pincode){
       this.name = name;
       this.city = city;
       this.pincode = pincode;
   }
    getName(){
        return state.call(this);
    }
    getCity(){
        return city.apply(this);
    }
    
}

var india = new Country('jharkhand','Ranchi',834005);
module.exports = Country;
console.log(india.getName());

console.log(india.getCity());

