function checkNumbers (num) {
    if (num > 1000) {
        return "Данные неверны";
    } if (num == 0 || num == 1) {
       return "Неверно";
  
    } else {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                return "Составное число";
          } else {
                return "Простое число";
             }
        }
    }
  }
  console.log(checkNumbers(prompt('введите любое число от 1 до 1000')));    