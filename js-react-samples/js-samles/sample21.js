let person = {
    firstName: 'Mahesh',
    lastName: 'Chavan',
    currentAge: 21
}
let {
    firstName,
    lastName,
    middleName = ' ',
    currentAge: age = 18
} = person;
console.log(middleName);
console.log(age);