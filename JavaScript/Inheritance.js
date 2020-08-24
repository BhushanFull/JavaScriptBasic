class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    static getAge(){
        return 1;
    }
}

console.dir(Person);

// class Bhushan extends Person{
//     constructor(qualification,name,age){
//         super(name,age);
//         this.qualification = qualification;
//     }
//     getName(){
//         return this.name;
//     }
// }

// // const bks = new Bhushan('MCA','bhushan',23);

// // console.log(bks.getName())
// console.log(Bhushan.getAge())
