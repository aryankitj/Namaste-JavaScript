//~ Creating Promise, Chaining & Error Handling

const cart =["shoes", "dress", "watch"];

const promise = createOrder(cart);

promise.then(    
    function(orderId){
        console.log(orderId);
        return proceedToPayment(orderId);
    })
    //* Promise Chaining
    .then(function(paymentStatus){
        return paymentInfo(paymentStatus);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function (finalStatus) {  // this will run even if there is an error
        console.log(finalStatus);
    });
    
function createOrder(cart){
    const promise = new Promise((resolve, reject) => {
        if (!validiateCart(cart)){
            const err = new Error("Invalid Cart");
            reject(err);
        }
        const orderId = "12345";
        if (orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    });
    return promise;
}

function validiateCart(cart){
    return true;
}

function proceedToPayment(orderId) { 
    return new Promise(function (resolve, reject) { 
    resolve("Wait for a moment"); 
      }); 
    } 

function paymentInfo(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Sucessfull");
        });
    }

// !  At any point of promise chaining, if promise is rejected, the execution will fallback to .catch and others promise won't run.