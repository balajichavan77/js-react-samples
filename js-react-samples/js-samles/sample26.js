class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let obj = new User("Mahesh Chavan");
console.log(obj.getName());