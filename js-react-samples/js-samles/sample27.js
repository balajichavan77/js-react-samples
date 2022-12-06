class User {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'Name cannot be empty';
        }
        this.name = newName;
    }
}
let obj = new User('Mahesh');
console.log(User);

User.setName('Julie');
console.log(User.getName());