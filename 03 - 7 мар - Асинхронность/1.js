(function () {
    'use strict';

    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 0);
    console.log(foo());
    console.log(3);

    function foo() {
        let s = 0;
        for (let i = 0; i < 10000000; i++) {
            s += i;
        }
        return s;
    }
})();

// 1
// 499999500000
// 3
// 2

/*(function () {
    'use strict';

    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 0);
    console.log(foo());
    console.log(3);

    function foo() {
        while (true) {

        }
    }
})();*/

// 1
// foo() выполняется вечно. console.log(2) и console.log(3) не выполняются.
