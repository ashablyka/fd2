function loadImage(src, callback) {
    let img = new Image();
    img.onload = () => callback(null, img);
    img.onerror = err => callback(err, null);
    img.src = src;
}

loadImage('./1.jpg', (err, img) => {
    if (err) {
        return;
    }
    document.body.append(img);
});
