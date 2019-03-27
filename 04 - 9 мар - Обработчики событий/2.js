(function () {
    'use strict';

    let testEl = document.getElementById('test'),
        colorsEl = document.getElementById('colors');

    colorsEl.addEventListener('click', event => {
        let colorEl = event.target.closest('.color');
        if (colorEl) {
            testEl.style.backgroundColor = getComputedStyle(colorEl).backgroundColor;
        }
    });

    testEl.addEventListener('click', () => {
        testEl.style.removeProperty('background-color');
    });

})();