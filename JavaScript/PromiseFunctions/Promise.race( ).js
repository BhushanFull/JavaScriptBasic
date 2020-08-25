const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve in 5000');
        reject('Reject in 5000');
    }, 5000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve in 10000');
        reject('Reject in 10000');
    }, 10000);
})


Promise.race([promise1, promise2])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


Promise.race([])
    .then(res => console.log(res))
    .catch(err => console.log(err));

const promise3 = 'Kamesh';
const promise4 = 'Jai';

Promise.race([promise4, promise3])
    .then(res => console.log(res))
    .catch(err => console.log(err));