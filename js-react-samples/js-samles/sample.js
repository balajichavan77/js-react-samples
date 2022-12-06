function greet(name, callback) {
    console.log('Hii' + ' ' + name);
    callback();
}

function callMe() {
    console.log("I am Callback function")
}
greet('Mahesh', callMe); //passingfunction as a parameeter