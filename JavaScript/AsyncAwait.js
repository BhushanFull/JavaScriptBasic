var data;
const fetch = require("node-fetch");
async function covidData(){
    data = await fetch('https://api.covid19india.org/data.json');
   
    let response = await data.json();
    return response;
}
function stateWise(res){
    console.log(res.statewise[0]);
}

covidData()
.then(res=>stateWise(res))
.catch(err=>console.log(err));
