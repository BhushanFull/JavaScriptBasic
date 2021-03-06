//  var age = [23,25,1,78,10,44,51,45,20,30,4,34,56,78,2,455,77,88,1000,123231,213];

class ArrayManipulations{

    //Time complexity 0(1)
    addElement(age,value){
        var startTime = new Date().getTime();
        age.push(value);
        var endTime = new Date().getTime();
        console.log("total time for add : ",endTime-startTime);
        return age;
    };

    //Time complexity 0(1)
     removeElement(age){
        var startTime = new Date().getTime();
        age.pop();
        var endTime = new Date().getTime();
        console.log("total time for remove : ",endTime-startTime);
        return age;
    }

    //Time complexity 0(n)
     reverseArray(age){
        var startTime = new Date().getTime();
        age.reverse();
        var endTime = new Date().getTime();
        console.log("total time for reverse : ",endTime-startTime);
        return age;
    }

    //Time complexity 0(nlogn) 
     sortArray(age){
        var startTime = new Date().getTime();
        age.sort(function(a,b){return a-b;});
        var endTime = new Date().getTime();
        console.log("total time for sorting : ",endTime-startTime);
        return age;
    }

    // function lengthOfArray(age){
    //     return age.length;
    // }

    //Time complexity 0(n)
     findMaxInElement(age){
        return Math.max(...age);
        
    }

    //Time complexity 0(1)
     findIndexOfElement(age,value){
        return age.indexOf(value);
    }

    //Time complexity 0(1)
    findElementByIndex(age,index){
        return age[index];
    }

    //Time complexity 0(n)
     serchElementIsPresent(age,value){
        return age.includes(value);
    }

    //Time complexity 0(n)
    removeAtSpecificIndex(age,index){
        age.splice(index,1);
        return age;
    }

    //Time complexity 0(n)
    addAtSpecificIndex(age,index,value){
        age.splice(index,0,value);
        return age;
    }
}

module.exports = ArrayManipulations;


// console.log(age.reduce(function(a,b){
//     return Math.max(a,b);
// }));

// console.log(addElement(age,111));
// console.log(removeElement(age));
// console.log(reverseArray(age));
// console.log(sortArray(age));
// console.log(lengthOfArray());
// console.log(findMaxInElement(age));
// console.log(findIndexOfElement(age,45));
// console.log(serchElementIsPresent(age,111));
