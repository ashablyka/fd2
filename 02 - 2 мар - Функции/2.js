(function () {
    'use strict';

    let user = {
        name: 'John',
        age: 23,
        hello() {
            alert(`Hello, my name is ${this.name}. I'm ${this.age} years old.`)
        }
    };

    //user.hello();
    let {hello} = user;
    //hello();
    hello.call(user);
})();