let employee = {
    id: 1001,
    name: {
        firstName: 'Mahesh',
        lastName: 'Chavan'
    }
};
let {
    name: {
        firstName,
        lastName
    }
} = employee;
console.log(firstName);
console.log(lastName);