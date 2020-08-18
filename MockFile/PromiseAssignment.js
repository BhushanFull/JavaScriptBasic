function func1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            statewise={
                active:56000
            };
            res(statewise)
            rej('Something went wrong...');
        },10)
       
    })
}

module.exports = func1;