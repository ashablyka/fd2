(function () {
    'use strict';

    const withoutRepeat = arr => {
        return arr.filter((value) => {
            let repeats = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    repeats++;
                }
            }
            return repeats === 1;
        });
    };

    console.log(withoutRepeat([2, 2, -4, 3, 15, 2, 3, 0]));
})();
