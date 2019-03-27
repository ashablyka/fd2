const USER_PROTOTYPE = {
    hello() {
        alert(`${this.firstName} ${this.lastName}`);
    }
};

function createUser(firstName, lastName) {
    return Object.create(USER_PROTOTYPE, {
        firstName: {
            value: firstName
        },
        lastName: {
            value: lastName
        }
    });
}