function getUsers(callback) {
    setTimeout(() => {
        callback([{ username: 'Mahesh', email: 'mahesh@gmail.com' },
            { username: 'Manisha', email: 'manisha@gmail.com' }
        ]);
    }, 1000);
}

function findUser(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    });

}
findUser('Manisha', console.log);