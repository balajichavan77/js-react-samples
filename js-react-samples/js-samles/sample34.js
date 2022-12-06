function getUsers() {
    return [
        { username: 'Mahesh', email: 'mahesh@gmail.com' },
        { username: 'Manisha', email: 'manisha@gmail.com' }
    ];
}

function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}
console.log(findUser('Mahesh'));