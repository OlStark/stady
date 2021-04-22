'use strict'

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
    budget: question,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую:');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        

        for (let i = 0; i < 2; i++) {

            appData.expenses[prompt('Введите обязательную статью расходов?')] = (() =>{
            let expen = 0;
            do {
                expen = prompt('Во сколько это обойдется?');
            }
            while (!isNumber(expen)) 
            return +expen;
        })();
        }
        
        
    },


    getExpensesMonth: function () {
        for (let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key]
        }
    },
        

    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function(){
    
        return Math.ceil(appData.mission / appData.budgetMonth);

    }, 

    getStatusIncome: function () {
        if (appData.budgetDay > 1200){
            return('У Вас высокий уровень дохода.')
        
        } else if (appData.budgetDay >= 600){
            return('У вас средний уровень дохода.')
        
        } else if (appData.budgetDay >= 0){
        return('У вас низкий уровень дохода.')
        
        }else if (appData.budgetDay < 0){
            return('Что то пошло не так')
        }
    },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

let targetMonth = appData.getTargetMonth();

console.log(appData.expensesMonth +'-расходы за месяц.');

console.log(targetMonth + '-месяцев для достижения цели.');

console.log(appData.budgetMonth + '-месячные накопления.');

 if(targetMonth > 0){ 

    console.log(Math.ceil(targetMonth), 'Месяцев для достижения цели');

    }else if(targetMonth < 0){

    console.log('Цель не будет достигнута');
    };

let expensesAmout = appData.getExpensesMonth();

console.log('Наша программа включает в себя:');
for (let key in appData){
    console.log(key, appData[key]);
}
  