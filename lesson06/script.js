'use strict';
function one() {
    let x = 99;

    function two(y) {
        return x <= y;
    }
    return two(+prompt('Угадай число от 1 до 100'));
}

console.log(one());

