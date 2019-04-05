function _async(fn) {
    return (id) => {
        const iterator = fn(id);
        return new Promise((resolve, reject) => {
            function step(prev) {
                const {done, value} = iterator.next(prev);

                if (done) {
                    resolve(value);
                } else if (value instanceof Promise) {
                    value.then(step, reject)
                } else {
                    step(value);
                }
            }

            step();
        })
    }

}