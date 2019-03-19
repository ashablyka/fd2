let textEl = document.getElementById('text');

textEl.addEventListener('input', () => {

    textEl.classList.toggle('error', !isValid(textEl.value))

});

const CRITERIA = [
    value => !!value.length,
    value => value.length < 10,
    value => isFinite(Number(value))
];

function isValid(value) {
    return CRITERIA.every(criterion => criterion(value));
}