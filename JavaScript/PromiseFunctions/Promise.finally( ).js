const promise1 = new Promise((resolve,reject)=>{
    resolve('Executed...');
    reject('Faild...');
});

promise1.then(resolve=>console.log(resolve))
    .catch(reject=>console.log(reject))
    .finally(()=>console.log('windup..'));