(function () {
    'use strict';

    const IMAGES_MAP = new Map();

    let galleryEl = document.querySelector('.gallery');

    galleryEl.addEventListener('click', event => {
        let figureEl = event.target.closest('figure');
        if (figureEl) {
            onFigureClick(figureEl);
        }
    });

    function onFigureClick(figure) {
        let smallSrc = figure.querySelector('img').src,
            largeSrc = smallSrc.replace('/small/', '/large/');
        loadImage(largeSrc, (err, img) => {
            if (!err) {
                displayImage(img);
            }
        });
    }

    function loadImage(src, callback) {
        if (IMAGES_MAP.has(src)) {
            callback(null, IMAGES_MAP.get(src));
        } else {
            let img = new Image();
            img.onerror = err => callback(err, null);
            img.onload = () => {
                IMAGES_MAP.set(src, img);
                callback(null, img);
            };
            img.src = src;
        }
    }

    function displayImage(img) {
        let previewEl = document.createElement('div');
        previewEl.classList.add('preview');
        previewEl.append(img);
        previewEl.addEventListener('click', () => {
            previewEl.remove();
        }, {once: true});
        document.body.append(previewEl);
    }
})();