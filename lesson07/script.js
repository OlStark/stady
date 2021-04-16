'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let question,
    start = function() { 
        do{
        question = prompt('Ваш месячный доход?');
        }
        while (!isNumber(question)) {
        }
    };

start();

let appData = {
    
    income: {},
    addIncome: [],
    expenses:{},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 7,
    asking: function () {
        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую:');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        appData.expenses = 
        
    },
    budget: question,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    getExpensesMonth: function () {
        let sum = 0;
        let sums = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');

        do{
        sums = +(prompt('Во сколько это обойдется?'));
        }
        while (!isNumber(sum)) {sum += sums}
    }
    console.log(expenses);
    return sum;
        
    },
    getAccumulatedMonth: function (a,b) {
        return a-b;
    },
    getTargetMonth: function (mission,AccumulatedMonth) {
        let TargetMonth = appData.mission / AccumulatedMonth;
    

    if(TargetMonth > 0){

        console.log(Math.ceil(TargetMonth), 'Месяцев для достижения цели');

        }else if(TargetMonth < 0){

        console.log('Цель не будет достигнута');
        
    }
    },
    getStatusIncome: function () {
        if (budgetDay > 1200){
            return('У Вас высокий уровень дохода.')
        
        } else if (budgetDay >=600){
            return('У вас средний уровень дохода.')
        
        } else if (budgetDay >= 0){
        return('У вас низкий уровень дохода.')
        
        }else if (budgetDay<0){
            return('Что то пошло не так')
        }
    },
};

appData.asking();

let expenses = [];

let expensesAmout = appData.getExpensesMonth();

console.log(expensesAmout,'Расходы за месяц');

let AccumulatedMonth = appData.getAccumulatedMonth(question,expensesAmout);
console.log(AccumulatedMonth, 'Остаток за месяц');

let targetMonth = appData.getTargetMonth(appData.mission,AccumulatedMonth);

let budgetDay = AccumulatedMonth/30;
console.log(Math.floor(budgetDay), 'Дневной бюджет');

console.log(appData.getStatusIncome());
