(function f() {
    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 0);
    console.log(foo());
    console.log(3);

    function foo() {
        let s = 0;
        for (let i = 0; i < 1000000; i++) {
            s += i;
        }
        return s;
    }
})();
// 1
// 499999500000
// 3
// 2

/*(function f() {
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
})(); // 1*/
