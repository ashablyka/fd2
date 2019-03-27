(() => {
    'use strict';


    function createTagsField () {
        const BREAK_KEYS = new Set([',', 'Enter']);
        let fieldElement = document.createElement('div'),
            inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.classList.add('input-row');
        fieldElement.classList.add('tag-field');
        fieldElement.append(inputEl);

        let tags = new Set(),
            deleteListener = event => {
                let tagEl = event.target.closest('.tag-item');
                if (tagEl) {
                    tagEl.remove();
                    tags.delete(tagEl.textContent);
                }
            },
            inputListener = event => {
                if (BREAK_KEYS.has(event.key)) {
                    event.preventDefault();
                    let text = inputEl.value.trim();
                    if (text && !tags.has(text)) {
                        tags.add(text);
                        let tagEl = document.createElement('span');
                        tagEl.classList.add('tag-item');
                        tagEl.append(text);
                        inputEl.value = '';
                        fieldElement.insertBefore(tagEl, inputEl);
                    }
                }
            };

        inputEl.addEventListener('keydown', inputListener);
        fieldElement.addEventListener('click', deleteListener);

        return {
            getTags () {
                return [...tags];
            },
            destroy () {
                fieldElement.remove();
                inputEl.removeEventListener('keydown', inputListener);
                fieldElement.removeEventListener('click', deleteListener);
            },
            element: fieldElement
        };
    }

    let tagField = createTagsField();

    document.body.append(tagField.element);

    //tagField.destroy();


})();