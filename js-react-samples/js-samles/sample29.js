let numbers = [4, 2, 6];

//numbers.sort(function(a, b) {
//return a - b;
//})

numbers.sort((a, b) => b - a);

console.log(numbers);