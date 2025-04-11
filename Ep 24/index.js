//! 4 Promise APIs which are majorly used:
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

//* Promise.all()   to handlemultiple promises at once, in parallel, and get the results in a single aggregate array.
// waits for all input promises to resolve and returns a new promise with their results in an array. If any promise rejects, it immediately rejects with that error.

//* Promise.allSettled()  returns a new promise that resolves after all the input promises have settled, either resolved or rejected.

//* Promise.race() returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects

//* Promise.any() as first promise will be successful, it will give the output. if all promises got failed, so the returned result will be aggregated error i.e. [err1, err2, err3].

const p1 = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    resolve('P1 Success'); 
    }, 3000); 
}); 
const p2 = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    reject('P2 Fail'); 
    }, 1000);
}); 
const p3 = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    resolve('P3 Success'); 
    }, 2000); 
}); 

Promise.all([p1, p3]).then((results) => { 
    console.log(results); // ['P1 Success', 'P3 Success'] -> took 3 secs 
});

Promise.all([p1, p2, p3]) 
  .then(results => console.log(results)) 
  .catch(err => console.error(err)); // throws error after 1 sec i.e. 'P2 Fails'

Promise.allSettled([p1, p2, p3]) 
  .then((results) => console.log(results)) 
  .catch(err => console.error(err)); // [ {status: 'fulfilled', value: 'P1 Success'}, {status: 'fulfilled', value: 'P2 Success'}, {status: 'rejected', reason: 'P3 Fail'} ] 

Promise.race([p1, p2, p3]) 
  .then((results) => console.log(results)) 
  .catch(err => console.error(err)); // "P2 Fail" 

Promise.any([p1, p2, p3]) 
  .then((results) => console.log(results)) 
  .catch(err => console.error(err)); // "P2 Success"
// if all fails  ['P1 Fail', 'P2 Fail', 'P3 Fail']