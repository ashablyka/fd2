function asyncMap(arr, fn) {
    return Promise.all(arr.map(fn));
}

function asyncMap2(arr, fn) {
    return arr.reduce((promise, el, index, a) => {
        return promise.then((results) => {
            return fn(el, index, a)
                .then(result => {
                    results.push(result);
                    return results;
                });
        });
    }, Promise.resolve([]))
}
