// var myarray = ['Kamesh','Jai','Sandeep','Chandra'];
// i=0;
// var iterator={
//      next:()=>{
//         if(i!==myarray.length)
//         obj = {
//                 value:myarray[i],
//                 done:false
//             }
//         else
//         obj = {
//             value:undefined,
//             done:true
//         }
//         return obj;
//     }
// }
// result = iterator.next();
// while(result.done === false){
//      console.log(result);
//      i++;
//      result = iterator.next()
// }

// class Iterator{
//     static next(i,myarray){
//         var obj;
//         if(i!==myarray.length)
//             obj = {
//                     value:myarray[i],
//                     done:false
//                 }
//             else
//             obj = {
//                 value:undefined,
//                 done:true
//             }
//             return obj;
//     }
// }
// myarray = ['Kamesh','Jai','Sandeep','Chandra'];
// var i=0;
// result = Iterator.next(i,myarray);
// while(result.done === false){
//      console.log(result);
//      i++;
//      result = Iterator.next(i)
// }

class PrintArray{
    constructor(myarray) {
        this.myarray = myarray;
    }
    [Symbol.iterator]() {
        let myarray = this.myarray;
        let i=myarray.length-1;
        return { 
            next() { 
                if (i<0) {
                    return { done: true }
                } else {
                    return { value: myarray[i--], done: false }
                }
            }
        }
    }
}
var myarray = ['Kamesh','Jai','Sandeep','Chandra'];
  
var printArray = new PrintArray(myarray)
let print = printArray[Symbol.iterator]();
while (true) {
    let obj = print.next();
    console.log(obj);
    if (obj.done) {
        break;
    }
}

