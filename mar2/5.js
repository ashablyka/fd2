(function () {
    'use strict';

    let numbers = [1, 2, -5, 8];

    console.log(Math.max(...numbers));
    console.log(Math.max.apply(null, numbers));
    console.log(Math.max.apply(Math, numbers));
})();