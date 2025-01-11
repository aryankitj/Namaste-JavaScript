//here i refers to same memory location
function x(){
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
    console.log("Namaste Js");
}
x()  //Namaste Js 6 6 6 6 6 6

//let has a block scope
//when loop run, each time new value to j altogether
function x(){
    for (let j = 1; j <= 5; j++) {
        setTimeout(function() {
            console.log(j);
        }, j*1000);
    }
    console.log("Namaste Js");
}
x()  //Namaste Js 1 2 3 4 5

//here close fn helps to create a scope
//so every time settimeout is called, it creates a new copy of x[k] altogether
function x(){
    for (let k = 1; k <= 5; k++) {
        function close(x){
            setTimeout(function() {
                console.log(x);
            }, x*1000);
        }
        close(k)
    }
    console.log("Namaste Js");
}
x()  //Namaste Js 1 2 3 4 5

    