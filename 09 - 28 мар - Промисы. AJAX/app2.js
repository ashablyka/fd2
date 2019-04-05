function loadImage(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = err => reject(err);
        img.src = src;
    })
}

loadImage('./1.jpg')
    .then(img => {
        document.body.append(img);
    })
    .catch(err => {
        alert(err);
    });

