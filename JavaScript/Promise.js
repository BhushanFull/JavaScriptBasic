// const fetch = require("node-fetch");

function myFunc(){
    return fetch('https://api.covid19india.org/data.json');
}

var response = new Promise(()=>{
    myFunc();
});

function stateWise(res){
    console.log(res.statewise)

}

var data = response.then(res=>stateWise(res));
console.log(data);