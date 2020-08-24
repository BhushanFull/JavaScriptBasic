class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getName(){
        return this.name;
    }
}

const perseon1 = new Person('bhushan',23,'male');
console.log(perseon1);
console.log(perseon1.getName());

class College extends Person{
    constructor(name,age,gender,collegeName){
        super(name,age,gender);
        this.collegeName = collegeName;
    }
    getName(){
        return super.getName();
    }
}
const college1 = new College('bhushan',23,'male','NIT Raipur');
console.log(college1);
console.log(college1.getName());
