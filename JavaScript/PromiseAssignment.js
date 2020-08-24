  const fetch = require("node-fetch");
function func1(){
    console.log('hello')
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(fetch('https://api.covid19india.org/data.json'))
            rej('Something went wrong...');
        },10000)
       
    })
}

async function func3(){
   
    throw  await fetch('https://api.covid19india.org/data.json');
}

function func2(){
    func1()
    .then(res=>res.json())
    .then(res=>console.log(res.statewise[0]))
    .catch(rej=>console.log(rej));

    // func3().catch(a=>console.log(a));
   
}
console.log(func2());
module.exports = func1;

