function loadImage(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.onload = () => resolve(img);
        img.onerror = err => reject(err);
        img.src = src;
    });
}

const IMG = new Image();

loadImage('./1.jpg')
    .catch(err => {
        return IMG;
    })
    .then(img => {
        document.body.append(img);
        return img;
    })
    .then(img => {

    });

