(function () {
    'use strict';


    let s = 0;

    render(() => {
        document.body.textContent = (++s).toString();
    });

    /**
     * @param {Function} actions
     */
    function render(actions) {
        requestAnimationFrame(() => {
            actions();
            render(actions);
        });
    }

})();