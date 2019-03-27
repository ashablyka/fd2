function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.hello = function () {
    alert(`${this.firstName} ${this.lastName}`);
};