(function () {
    'use strict';

    const arrayToPoints = arr => {
        let points = '';
        arr.forEach(point => {
            let {x, y} = point;
            points += `${x},${y} `;
        });
        return points.substr(0, points.length - 1);
    };

    console.log(arrayToPoints([{x: 12, y: 13}, {x: 56, y: 45}, {x: 25, y: 18}]));
})();


