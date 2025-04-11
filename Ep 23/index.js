//~ Async Await

//  async function always returns a promise, even if I return a simple string from function, async keyword will wrap it under Promise and then return. 
async function getData() { 
return "Namaste JavaScript"; 
} 
const dataPromise = getData(); 
console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'} 

dataPromise.then(res => console.log(res)); // Namaste JavaScript

//  async and await combo is used to handle promises

const p = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    resolve('Promise resolved value!!'); 
    }, 2000); 
}) 

const p2 = new Promise((resolve, reject) => { 
    setTimeout(() => { 
    resolve('Promise resolved value by p2!!'); 
    }, 3000); 
}) 

async function handlePromise() { 
    // JS Engine will waiting for promise to resolve. 
    const val = await p; 
    console.log('Hello There!');  // after 2 seconds
    console.log(val); 

    const val2 = await p2; 
    console.log('Hello There! 2'); // after next 1 second
    console.log(val2); 
} 
handlePromise();

//!  when JS sees await keyword it suspend the execution of function till promise is resolved

//! If it encounters another await then  same above process will repeat -> execution will be suspended until promise is resolved

//* api.github.com

async function handlePromise() { 
    // fetch() => Response Object which as body as Readable stream => Response.json() is also a promise which when resolved => value 
    const data = await fetch('https://api.github.com/users/alok722'); 
    const res = await data.json(); 
    console.log(res); 
}; 
handlePromise()

// error handling
async function handlePromise() { 
    try { 
    const data = await fetch('https://api.github.com/users/alok722'); 
    const res = await data.json(); 
    console.log(res); 
    } 
    catch (err) { 
    console.log(err) 
    } 
}; 
handlePromise();
// handlePromise().catch(err => console.log(err));

