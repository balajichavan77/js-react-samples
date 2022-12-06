function getUsers() {
    let users = [];

    setTimeout(() => {
        users = [
            { username: 'Mahesh', email: 'mahesh@gmail.com' },
            { username: 'Manisha', email: 'manisha@gmail.com' }
        ];
    }, 1000);
    return users;
}

function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}
console.log(findUser('Mahesh')); //undefined