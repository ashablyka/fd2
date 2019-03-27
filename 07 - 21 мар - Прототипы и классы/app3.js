function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.hello = function () {
    alert(`${this.firstName} ${this.lastName}`);
};

function _new(Constructor, args) {
    let _this = Object.create(Constructor.prototype);
    let result = Constructor.apply(_this, args);
    if (result instanceof Object) {
        return result;
    }
    return _this;
}