'use strict';

class TagsField {
    static BREAK_KEYS = new Set([',', 'Enter']);
    tags = new Set();
    element = document.createElement('div');
    input = document.createElement('input');

    constructor(tags) {
        this.tags = Array.isArray(tags) ? new Set(tags) : new Set();
        this.input.type = 'text';
        this.element.classList.add('tag-field');
        this.input.classList.add('input-row');
        this.element.append(this.input);
        this.fillTags();
        this.element.addEventListener('click', this);
        this.element.addEventListener('keydown', this);
    }

    handleEvent(event) {
        switch (event.type) {
            case 'click':
                let tagEl = event.target.closest('.tag-item');
                return tagEl && this.onTagClick(tagEl);
            case 'keydown':
                let input = event.target.closest('input');
                if (input && TagsField.BREAK_KEYS.has(event.key)) {
                    event.preventDefault();
                    return this.onTagEnter();
                }
        }
    }

    onTagClick(tagEl) {
        let tagValue = tagEl.dataset.value;
        this.tags.delete(tagValue);
        tagEl.remove();
    }

    onTagEnter() {
        let value = this.input.value.trim().toLocaleLowerCase();
        if (value && !this.tags.has(value)) {
            let tagEl = TagsField.createTagEl(value);
            this.tags.add(value);
            this.element.insertBefore(tagEl, this.input);
        }
        this.input.value = '';
    }

    fillTags() {
        this.element.insertBefore(this.getTags().reduce((fragment, value) => {
            fragment.append(TagsField.createTagEl(value));
            return fragment;
        }, document.createDocumentFragment()), this.input);
    }

    static createTagEl(value) {
        let tagEl = document.createElement('span');
        tagEl.classList.add('tag-item');
        tagEl.dataset.value = value;
        return tagEl;
    }

    getTags() {
        return [...this.tags];
    }

    destroy() {
        this.element.remove();
        this.element.removeEventListener('click', this);
        this.element.removeEventListener('keydown', this);
    }
}

let tagField = new TagsField(['sports', 'movie']);

document.body.append(tagField.element);
