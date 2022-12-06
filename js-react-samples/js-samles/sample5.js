function increment() {
    var counter = 10; //scope is local to function increment
    console.log("Counter value is:" + counter);
}

increment();
//console.log(counter); //we cannot access the counter variable here