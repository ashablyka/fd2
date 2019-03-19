(function () {
    'use strict';

    const IMAGES_MAP = new Map();

    let galleryEl = document.querySelector('.gallery'),
        figures = [...galleryEl.querySelectorAll('figure')];

    galleryEl.addEventListener('click', event => {
        let figureEl = event.target.closest('figure');
        if (figureEl) {
            let index = figures.indexOf(figureEl);
            getImage(index, (err, img) => {
                if (!err) {
                    displayImage(img, index);
                }
            });
        }
    });

    function getImage(index, callback) {
        let figure = typeof index === 'number' ? figures[index] : index,
            smallSrc = figure.querySelector('img').src,
            largeSrc = smallSrc.replace('/small/', '/large/');
        loadImage(largeSrc, callback);
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

    function displayImage(img, index) {
        let previewEl = document.createElement('div'),
            counterEl = document.createElement('span'),
            nextBtn = document.createElement('button'),
            prevBtn = document.createElement('button');
        counterEl.classList.add('counter');
        previewEl.classList.add('preview');
        nextBtn.type = 'button';
        prevBtn.type = 'button';
        counterEl.textContent = `${index + 1}/${figures.length}`;
        previewEl.append(counterEl, prevBtn, img, nextBtn);
        previewEl.addEventListener('click', () => {
            previewEl.remove();
        }, {once: true});
        nextBtn.addEventListener('click', event => {
                event.stopPropagation();
                getImage(++index, (err, nextImg) => {
                    counterEl.textContent = `${index + 1}/${figures.length}`;
                    previewEl.replaceChild(nextImg, img);
                    img = nextImg;
                });
            });
        document.body.append(previewEl);
    }
})();