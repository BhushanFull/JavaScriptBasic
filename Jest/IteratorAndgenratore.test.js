var fun = require('../JavaScript/IteratorAndgenratore');

var genrater = fun.genrater;

var it = genrater();
var re = it.next();
var array = new Array();
test('Genrator',()=>{
    let i=0;
    while(re.done == false){
        array[i++]=re.value;
        re = it.next();
    }
    expect(array).toEqual(['Kamesh','Jai','Sandep','Chandra'])
})