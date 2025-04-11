function x(){
    console.log('callback');
}

function y(x){
    console.log('Inside Higher Order Function'); 
}

// Here x is the callback fn while y is the higher order function


// using const to declare the variables and functions because it ensures that these variables and functions can't be reassigned. This is a good practice for ensuring the integrity of your data and logic.

// we can also use arrow fn

const radius = [3,4,2,8]

const calculate = function (radius, logic){
    const output = []
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
};

const area = function (radius){
    return Math.PI * radius * radius;
}

const circumfrence = function (radius){
    return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2 * radius;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumfrence));
console.log(calculate(radius, diameter));

// Here we dont need to make function for each logic. We can pass the logic as a function to the higher order function.
// Here functional programming helps to optimize the code

//& Polyfill of map
// Over here calculate is nothing but polyfill of map function
// console.log(radiusArr.map(area)) == console.log(calculate(radiusArr, area));

Array.prototype.calculate = function(logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));
console.log(radius.map(area));
