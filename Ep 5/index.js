var a= 10
function b(){
    var x= 10
}
console.log(window.a);  //10
console.log(a);         // not defined
console.log(this.a);  //10
