'use strict';

    let tagField = createTagsField();
//let tagField2 = createTagsField();

    document.body.append(tagField.element);

//document.body.append(tagField2.element);

    function createTagsField() {

        let tagsFieldEl = document.createElement('div');
        tagsFieldEl.classList.add('tagsField');
        let inputEl = document.createElement('input');
        inputEl.type = 'text';
        tagsFieldEl.append(inputEl);
        let tagsSet = new Set();

        function controlTagsField() {

            inputEl.addEventListener('keypress', addTags);
            tagsFieldEl.addEventListener('click', removeTags);

            return tagsFieldEl;

        }

        function addTags() {

            if (inputEl.value && (event.key === ',' || event.key === 'Enter')) {

                while (tagsFieldEl.lastChild !== tagsFieldEl.firstChild) {
                    tagsFieldEl.firstChild.remove();
                }

                tagsSet.add(inputEl.value);

                tagsSet.forEach(tag => {
                    let tagEl = document.createElement('div');
                    tagEl.textContent = tag;
                    tagEl.classList.add('tag');
                    inputEl.before(tagEl);
                });

                inputEl.value = '';
                event.preventDefault();
            }

        }

        function removeTags() {

            let tagToRemove = event.target.closest('.tag');

            if (tagToRemove) {
                tagsSet.delete(tagToRemove.textContent);
                tagToRemove.remove();
            }

        }

        return {

            element: controlTagsField(),

            getTags() {

                return ([...tagsSet]);

            },

            destroy() {

                inputEl.removeEventListener('keypress', addTags);
                tagsFieldEl.removeEventListener('click', removeTags);
                tagsFieldEl.remove();

            }
        };

    }



