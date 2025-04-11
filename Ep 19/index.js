//? Map Filter Reduce

//* Map 

const arr = [5,1,2,4]

function double(x){
    return x*2;
}

const output = arr.map(double);
console.log(output); // [10, 2, 4, 8]

const output2 = arr.map(x => x*2);
console.log(output2); // [10, 2, 4, 8]\

//! const output3 = arr.map(function binary(x){
//!     return x.toString(2);
//! });
const output3 = arr.map(x=> x.toString(2));
console.log(output3);


//* Filter

function isEven(x){
    return x % 2 === 0;
}
const output4 = arr.filter(isEven);
console.log(output4); // [5, 1, 4]

const output5 = arr.filter(x => x % 2 === 0);
console.log(output5); // [5, 1, 4]

//* reduce

function findSum(arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const output6 = findSum(arr);
console.log(output6); // 12

//! const output7 = arr.reduce(function (sum, current){
//!     sum = sum + current;
//!     return sum;
//! }, 0);
const output7 = arr.reduce((accumulator, current) => accumulator + current,0);
console.log(output7); // 12

function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

//! const output8 = arr.reduce(function(max,curr){
//!     if(curr>max){
//!         max = curr;
//!     } return max;
//! },arr[0])
const output8 = arr.reduce((max, current) => current > max ? current : max, arr[0]);
console.log(output8);

const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// Get array of full name : ["Alok Raj", "Ashish Kumar", ...]
const fullNameArr = users.map((user) => user.firstName + " " + user.lastName);
console.log(fullNameArr); // ["Alok Raj", "Ashish Kumar", ...]

// Get the count/report of how many unique people with unique age are there like: {29 : 2, 75 : 1, 50 : 1}
const report = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++ acc[curr.age] ;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(report) // {29 : 2, 75 : 1, 50 : 1}

//* Function Chaining

const output9 = users.filter((user) => user.age < 30).map((user) => user.firstName);
console.log(output9); // ["Alok", "Ashish", "Ankit"]

const output10 = users.reduce((acc, curr) => {
    if (curr.age < 30) {
      acc.push(curr.firstName);
    }
    return acc;
  }, []);
  console.log(output10); // ["Alok", "Ashish", "Ankit"]