'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let mission = 500000;

let question;
console.log(typeof question);

let addExpenses = [prompt ('Перечислите возможные расходы за рассчитываемый период через запятую:')];
console.log(typeof addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let start = function() { 
    do {
    question = prompt('Ваш месячный доход?');
    }
    while (!isNumber(question)) {
    }
};

start();

let expenses = [];

let sum = 0;
let sums = 0;
let getExpensesMonth = function() {
    
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
        sums = +(prompt('Во сколько это обойдется?'));
        }
        while (!isNumber(sum)) {sum += sums}
    }
    console.log(expenses);

    return sum;
};

let expensesAmout = getExpensesMonth();

console.log(expensesAmout,'Расходы за месяц');


let getAccumulatedMonth = function(a,b){
    return a - b;
}

let AccumulatedMonth = getAccumulatedMonth(question,expensesAmout);
console.log(AccumulatedMonth, 'Остаток за месяц');


let getTargetMonth = function(){
    
    mission / AccumulatedMonth;
    
}

getTargetMonth();

if(getTargetMonth > 0) {

        console.log(Math.ceil(getTargetMonth), 'Месяцев для достижения цели');

        } else if(getTargetMonth < 0){

        console.log('Цель не будет достигнута');
        
    }

let budgetDay = AccumulatedMonth/30;
console.log(Math.floor(budgetDay), 'Дневной бюджет');

let getStatusIncome = function () {

    if (budgetDay > 1200){
    return('У Вас высокий уровень дохода.')

} else if (budgetDay >= 600){
    return('У вас средний уровень дохода.')

} else if (budgetDay >= 0){
return('У вас низкий уровень дохода.')

}else if (budgetDay < 0){
    return('Что то пошло не так')
}
};
console.log(getStatusIncome());
