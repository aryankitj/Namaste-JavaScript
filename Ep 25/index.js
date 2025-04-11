//! this 
// In JavaScript, the this keyword refers to an object, which object depends on how this is being invoked (used or called).

console.log(this); // refers to global object i.e. window in case of browser 
// global object differs based on runtime environment,

function x() { 
    // the below value depends on strict/non-strict mode 
    console.log(this); 
    //& in strict mode - undefined
    //& in non-strict mode - refers to global window object 
}
x();

x(); // undefined   
// window.x(); // global window object

const obj = {
    a: 10,
    x: function () {
    console.log(this); // {a: 10, x: f()} 
    console.log(this.a); // 10 
    } 
} 
obj.x(); // value of `this` is referring to current object i.e. `obj`

//& call, apply & bind methods
const student = { 
    name: 'Alok', 
    printName: function () { 
    console.log(this.name); 
        } 
    } 
student.printName(); // Alok 
    const student2 = { 
    name: 'Kajal', 
    } 
// student2.printName(); // throw error 
student.printName.call(student2); // Kajal 

let printName2 = function(hometown){
    console.log(this.name + " from " + hometown);
}
printName2.call(student, "Siwan")

printName2.apply(student2, ["Siwan"])

let printMyName = printName2.bind(student, "Siwan")
console.log(printMyName);
printMyName()

//& inside arrow fn
const obj1 = { 
    a: 10, 
    x: () => { 
    console.log(this); // window object 
    // Above the value of `this` won't be obj anymore instead it will be enclosing lexical context i.e. window object in current scenario. 
    } 
} 
obj1.x(); 
const obj2 = { 
    a: 10, 
    x: function () { 
    const y = () => { 
    console.log(this); 
    // Above the value of `this` will be obj2 as function y's enclosing lexical context is function `x`. 
    }; 
    y(); 
    } 
} 
obj2.x(); 

//& inside DOM
{/* <button onclick="alert(this)">Click Me</button>  */}
// [object HTMLButtonElement] Button element