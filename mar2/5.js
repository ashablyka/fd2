(function () {
    'use strict';

    let user = {
        name: 'Jhon',
        age: 23,
        hello() {
            alert(`Hello, my name is ${this.name}. I'm ${this.age} years old.`)
        }
    };

    let numbers = [1, 2, -5, 8];

    Math.max( ...numbers);
    Math.max.apply(null, numbers);
    Math.max.apply(Math, numbers);
})();