let value = Number(prompt('Введите целое положительное число меньше 100'));

if (Number.isInteger(value) && value > 0 && value < 100) {
    /*let result = '';
    for (let i = 0; i < value; i++) {
        result += value.toString();
    }
    alert(result);*/
    // alert(new Array(value).fill(value).join(''));
    alert(value.toString().repeat(value));
} else {
    alert('Нет результата');
}
