
function vechle(name,tyreNumber,tyre){
    setTimeout(()=>{
        tyre(name +' has '+tyreNumber + ' tyres');
    }, 1000 );
}

var bike = vechle('Dukati',2,bike=>{
    console.log(bike)
});
console.log(1==='1');