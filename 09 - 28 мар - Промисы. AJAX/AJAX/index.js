function ajax(url, userConfig = {}) {
    return new Promise((resolve, reject) => {
        let config = {
            method: 'GET',
            body: null,
            headers: {},
            responseType: '',
            ...userConfig
        };
        let xhr = new XMLHttpRequest();
        xhr.open(config.method, url, true);
        xhr.responseType = config.responseType;
        for (let [header, value] of Object.entries(config.headers)) {
            xhr.setRequestHeader(header, value);
        }
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = err => reject(err);
        xhr.send(config.body);
    });


}

ajax('menu.html', {responseType: 'text'})
    .then(menuDocument => {
        document.body.innerHTML = menuDocument;
    });















