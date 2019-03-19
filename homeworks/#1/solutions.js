function transform(coordinates) {
    let points = new Array(coordinates.length);
    for (let i = 0; i < coordinates.length; i++) {
        let {x, y} = coordinates[i];
        points[i] = `${x},${y}`;
    }
    return points.join(' ');
}

console.log(transform([{x: 12, y: 13}, {x: 56, y: 45}, {x: 25, y: 18}]));

function transformByMap(coordinates) {
    return coordinates.map(({x, y}) => `${x},${y}`).join(' ');
}

console.log(transformByMap([{x: 12, y: 13}, {x: 56, y: 45}, {x: 25, y: 18}]));

function getUniqueNumbers(numbers) {
    let countInfo = {},
        results = [];
    for (let value of numbers) {
        if (countInfo.hasOwnProperty(value)) {
            countInfo[value]++;
        } else {
            countInfo[value] = 1;
        }
    }
    for (let [value, count] of  Object.entries(countInfo)) {
        if (count === 1) {
            results.push(Number(value));
        }
    }
    return results;
}

console.log(getUniqueNumbers([2, 2, -4, 3, 15, 2, 3, 0]));

function getUniqueNumbersByMap(numbers) {
    let countInfo = new Map(),
        results = [];
    for (let value of numbers) {
        if (countInfo.has(value)) {
            countInfo.set(value, countInfo.get(value) + 1);
        } else {
            countInfo.set(value, 1);
        }
    }
    for (let [value, count] of countInfo.entries()) {
        if (count === 1) {
            results.push(Number(value));
        }
    }
    return results;
}

console.log(getUniqueNumbersByMap([2, 2, -4, 3, 15, 2, 3, 0]));

function getNumbersWithoutRepeats(numbers) {
    let set = new Set(numbers);
    return [...set.keys()];
    //return [...set.values()];
    //return [...set.entries()];
}

console.log(getNumbersWithoutRepeats([2, 2, -4, 3, 15, 2, 3, 0]));

function transformToHTML(text) {
    let strings = text.split('\n'),
        htmlStrings = new Array(strings.length);
    for (let i = 0; i < strings.length; i++) {
        htmlStrings[i] = i ? `<p>${strings[i]}</p>` : `<h1>${strings[i]}</h1>`;
    }
    return htmlStrings.join('');
}

console.log(transformToHTML('Weather Forecast\nBrest 10&deg;C\nVitebsk 1&deg;C\nHave a good day!'));