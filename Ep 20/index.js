//~ Callback

// Callback are super important while writing asynchronous code in JS

// Using callback we can face issue:
// Callback Hell
// Inversion of control

console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2"); 

// Callback Hell 
api.createOrder(cart, function () { 
    api.proceedToPayment(function () { 
      api.showOrderSummary(function () { 
        api.updateWallet(); 
      }); 
    }); 
  }); 

// Inversion of control ( Pyramid of Doom )
api.createOrder(cart, function () { 
    api.proceedToPayment(); 
  });
//  we are blindly trusting `createOrder` to call `proceedToPayment`

//*  Async programming in JavaScript exists because callback exits.