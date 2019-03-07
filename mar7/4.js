(function () {
    'use strict';
    const SYMBOLS = 'abcdefghijklmnopqrstuvwxyz';
    const COMB = 'abcdefghijklmnopqrstuvwxyz';
    let stage = 'numbers';
    render(() => {
        document.body.textContent = getBodyContent();
    });

    function getBodyContent() {
        switch (stage) {
            case 'numbers':
                return numbers();
            case 'strings':
                return strings();
            case 'combinations':
                return combinations();
        }
    }

    function numbers() {
        return Math.round(Math.random() * 100);
    }

    function strings() {
        let length = 20, symbols = new Array(length);
        for (let i = 0; i < length; i++) {
            symbols[i] = SYMBOLS.charAt(getRandomNumber(0, SYMBOLS.length - 1));
        }
        return symbols.join('');
    }

    function combinations() {
        let length = 30, symbols = new Array(length);
        for (let i = 0; i < length; i++) {
            symbols[i] = COMB.charAt(getRandomNumber(0, SYMBOLS.length - 1));
        }
        return symbols.join('');
    }

    function getRandomNumber(from = 0, to = 9) {
        from = Math.ceil(from);
        to = Math.floor(to);
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }

    function render(actions) {
        requestAnimationFrame(() => {
            actions();
            render(actions);
        });
    }
})

();
