function* gen() {
    yield taskOne();
    yield taskTwo();
    //yield taskThree();
}
var iter = gen();
var it = iter.next();
// while (it.done == false) {
//     console.log(it.value)
//     it.value.then((res)=>console.log(res)).catch(err=>console.log(err));
//     it = iter.next();
// }
it.value.then((res)=>console.log(res)).catch(err=>console.log(err));
it = iter.next();
it.value.then((res)=>console.log(res)).catch(err=>console.log(err));



function taskOne() {
    return new Promise((resolve, reject) => {
        var a = true;
        if (a) {
            resolve("executedhihjh");
        }
        reject("Nope")
    }).then((message) => console.log(message)).catch(err => console.log(err));
}

function taskTwo() {
    return new Promise((resolve, reject) => {
        var b = 2;
        if (true) {
            reject("Failed");
        }
    }).then(message => console.log(message)).catch(err => console.log(err));
}