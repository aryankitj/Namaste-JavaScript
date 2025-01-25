//& Callback FUnction
//fn which is passed as an argument
setTimeout(function () {
    console.log("timer");
}, 5000);
function x(y) {
console.log("x");
y();
}
x(function y() {
console.log("y");
});
// x y timer
// setTimeout is async fn

document.getElementById("clickMe").addEventListener("click", function xyz() {
  //when event click occurs, this callback function (xyz) is called into callstack
  console.log("Button clicked");
});

//Counting Button clicked using closure
function attachEventList() {
    //creating new function for closure
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button clicked", ++count); //now callback function forms closure with outer scope(count)
    });
}
attachEventList();