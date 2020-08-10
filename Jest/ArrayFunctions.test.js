var ArrayManipulations = require('../JavaScript/ArrayFunctions');

var myObject = new ArrayManipulations();
test('Array functions',()=>{
    var age = [23,45,1,3,67,8,33,555,300,9,200];
    age.push(111);
    expect(myObject.addElement(age,111)).toContain(111);

    age.pop();
    expect(myObject.removeElement(age)).not.toContain(111);

    // age.reverse();
    // expect(myObject.reverseArray(age)).toContain(age);

    // age.sort();
    // expect(myObject.sortArray(age)).toContain(age);

    expect(myObject.findMaxInElement(age)).toBe(555);

    expect(myObject.findIndexOfElement(age,3)).toBe(3);

    expect(myObject.findElementByIndex(age,7)).toBe(555)

    expect(myObject.serchElementIsPresent(age,9)).toBeTruthy();

    expect(myObject.removeAtSpecificIndex(age,1)).not.toContain(45);

    expect(myObject.addAtSpecificIndex(age,0,1000)).toContain(1000);
})