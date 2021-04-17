'use strict';
function one() {

    let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
        };
        
        let x = Math.floor(Math.random() * 100);

        function two() {
            let number;
            number = prompt('Угадай число от 1 до 100!');
            console.log(number);
            if(number === null){
                alert('Игра окончена!');
            } else if(number > x){
                alert('Загаданное число меньше!');
                two();
            } else if ( number < x){
                alert('Загаданное число больше!');
                two();
            } else if(!isNumber(number)){
                alert('Введите число!');
                two();
            } else {
                alert('Поздравляю вы угадали!');
            }
        };

    return two();
    
}


one();