//& Function Statement or Declaration
function a(){
    console.log("a called");
}
a();

//& Function Expression
var b = function (){
    console.log("b called");
}
b();

//function statement is hoisted to the top of the script while function expression is not.
// function statement is treated as a declaration
// function expression is treated as an expression

//& Anonymous Function
//it is a function without a name
//it is used as a value  (functon expression)

//& Named Function Expression
//it is a function with a name but it is not accessible from outside the function but as a local variable
var b = function xyz(){
    console.log("b called");
}
//? xyz();  //Reference Error: xyz is not defined

//& Parameters and Arguments
//Parameter (formal) is the variable that is declared in the function definition
//Argument (actual parameter) is the value that is passed to the function when it is called

//& First Class Function
//A function is first class if it can be passed as an argument to another function, returned from a function and stored in a variable.
//The Ability of fn to use a as value, pass as an argument and return from a function
//^ i.e. Functions are First Class Citizens


//& Arrow Function
//it is a shorthand for a function expression
