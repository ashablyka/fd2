(function () {

    'use strict';

    let testEl = document.getElementById('test');

    testEl.addEventListener('click', () => {
        testEl.classList.toggle('active');
    })

    /*testEl.addEventListener('click', function () {
        this.classList.toggle('active');
    })*/

})();