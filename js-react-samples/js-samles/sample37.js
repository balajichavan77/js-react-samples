function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: 'Mahesh', email: 'mahesh@gmail.com' },
                { username: 'Manisha', email: 'manisha@gmail.com' }
            ])
        }, 1000)
    });
}

function onFulfilled(users) {
    console.log(users);
}
const promise = getUser();
promise.then(onFulfilled);