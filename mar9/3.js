(function () {
    'use strict';

    const COLORS = [
        '#ffd329',
        '#178008',
        '#7f807f',
        '#643a2a',
        '#db0cff'
    ];

    let testEl = document.getElementById('test'),
        colorsEl = document.getElementById('colors');

    createColorSamples();

    colorsEl.addEventListener('click', event => {
        let colorEl = event.target.closest('.color');
        if (colorEl) {
            testEl.style.backgroundColor = /*getComputedStyle(colorEl).backgroundColor;*/ colorEl.dataset.color;
        }
    });

    testEl.addEventListener('click', () => {
        testEl.style.removeProperty('background-color');
    });

    function createColorSamples() {
        let fragment = document.createDocumentFragment();
        for (let color of COLORS) {
            let el = document.createElement('div');
            el.classList.add('color');
            el.style.backgroundColor = color;
            el.dataset.color = color;
            fragment.append(el);
        }
        colorsEl.append(fragment);
    }

})();