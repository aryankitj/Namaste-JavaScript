console.log('Start');

setTimeout(function cb(){
    console.log('Callback');
}, 5000);

console.log('End');

let StartDate = new Date().getTime();
let EndDAte = StartDate;
while(EndDAte < StartDate + 10000){
    EndDAte = new Date().getTime();
}
console.log('After 10 sec');  
// Start
// End
// After 10 sec
// Callback

// since JS has single main thread or call satck, this while loop will block the execution of the code below it, and setTimeout also for 10 sec

//new Date().getTime() creates a new Date object representing the current date and time, and then retrieves the number of milliseconds

// Even if SetTimeout is called after 0 ms, it will not be executed until the whole code is finished, because of the single thread.

