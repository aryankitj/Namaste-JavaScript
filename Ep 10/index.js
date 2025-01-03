function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    a= 100
    return y
}
var z = x();
console.log(z);  // function y(){console.log(a)}

z()  // 100

//same as above
function x(){
    var a = 7;
    return function y(){
        console.log(a)
    }
}