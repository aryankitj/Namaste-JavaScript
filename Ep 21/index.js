//~ Promise

// Promises are used to handle async operations in JavaScript.
// > A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//  Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.

// Promise Object are immutable

//  Promise guarantee, it will callback the attached function once it has the fulfilled data. And it will call it only once. Just once.

//!  fetch is a web-api which is utilized to make api call and it returns a promise.

const URL = "https://api.github.com/users/alok722"; 
const user = fetch(URL); 
// User above will be a promise. 
console.log(user); // Promise {<Pending>} 

// `promise` object has 3 things 
//  * `prototype`, `promiseState` & `promiseResult`
//   `prototype` is the object that is used to create the object.
//   `promiseState` is the state of the promise. It can be either `pending ` or `fulfilled` or `rejected`
//   `promiseResult` is the result of the promise.

// ! NOTE: chrome browser has some in-consistency, the moment console happens it shows in pending state but if you will expand that it will show fulfilled because chrome updated the log when promise get fulfilled. 

// Once fulfilled data is there in promiseResult and it is inside body in ReadableStream format and there is a way to extract data. 

createOrder(cart) 
  .then(function (orderId) { 
return proceedToPayment(orderId); 
  }) 
  .then(function (paymentInf) { 
return showOrderSummary(paymentInf); 
  }) 
  .then(function (balance) { 
return updateWalletBalance(balance); 
  });

// Above can also written with arrow fn
createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInfo => showOrderSummary(paymentInfo))
  .then(balance => updateWalletBalance(balance));
