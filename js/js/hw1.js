let value = prompt('введите значение');
value = +value;
if (typeof value != 'number') {
    alert('упс, кажется, вы ошиблись');
} else if (isNaN(value)) {
    alert('упс, кажется, вы ошиблись');
} else if (value % 2 === 0) {
    alert('это четное число');
} else {
    alert('это нечетное число');
}
