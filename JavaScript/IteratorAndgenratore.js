var myArray = [1,2,3,4 ,5 ,6,7,8,9];
let itrator = myArray[Symbol.iterator]();

var result = itrator.next();
while(result.done === false){
    console.log(result);
    result = itrator.next();
}

function *genrater(){
    yield 'Kamesh';
    yield 'Jai';
    yield 'Sandep';
    yield 'Chandra';
}

var it = genrater();

var re = it.next();
while(re.done == false){
    console.log(re);
    re = it.next();
}
