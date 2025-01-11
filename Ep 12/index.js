function outer(){
    var a=10;
    function inner(){
        console.log(a);  //10
        console.log(b);  //undefined
        console.log(c);  // refernce error
    }
    var b =15;
    let c =20
    return inner;
}
//^ let c =30;  //10 15 30

outer()();  // it calls the inner fn //10 15 20

//same as above
var close= outer()
close();  // it calls the inner fn  // 10 15 20\

//& Data Hinding and Encapsulation
// Hiding the data so that other function or other part code cannot access it.
// Data Hiding is a concept of encapsulation. It is a technique of hiding the internal stat
// Encapsulation is the bundling of data and the methods that operate on that data into a single unit.

function Counter(){
    var count = 0;
    return function increcounter(){
        count++;
        console.log(count);
    }
}

var counter1 = Counter(); //Creates a new closure with its own 'count'
counter1();  //1
counter1();  //2

var counter2 = Counter(); // Creates a separate closure with a new 'count'
counter2();  //1

//&Function Constructor
//Function Constructor is used to create a new function.
function Counterr(){
    var count =0;
    this.increcounterr = function(){
        count++;
        console.log(count);
    }
    this.decrecounterr = function(){
        count--;
        console.log(count);
    }
}
var counterr1 = new Counterr();  //new keyword is used to create a new object since this is function constructor
counterr1.increcounterr();  //1
counterr1.decrecounterr();  //0

//variables in the closure is not garbage collected till the program expires.
//&Garabage Collector 
//Garbage Collector is a process that automatically frees up the memory occupied by an object when it is no longer needed.

//&Smart Garbage Collector
//if any object is not referenced anywhere in the program, then it is eligible for garbage collection.