// 'use strict'
(function () {
    'use strict';

    function sum(a, b) {
        this;
        return a + b;
    }

    //window.sum = sum;

    console.log(sum(1, 5));

}());


