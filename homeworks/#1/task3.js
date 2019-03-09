(function () {
    function stringToHTML (str) {
        let arr = str.split('\n');
        arr[0] = `<h1>${arr[0]}</h1>`;
        for (let i = 1; i < arr.length; i++) {
            arr[i] = `<p>${arr[i]}</p>`;
        }
        return arr.join('\n');
    }

    console.log(stringToHTML('Weather Forecast\nBrest 10&deg;C\nVitebsk 1&deg;C\nHave a good day!'));
})();

