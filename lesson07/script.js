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
           
            let spend = prompt('Введите обязательную статью расходов?');
            
            do{
                appData.expenses = +(prompt('Во сколько это обойдется?'));
            }
            while (!isNumber(appData.expenses)) 
            
        };
        
        
    },


    getExpensesMonth: function () {

        let sum = 0;
        
        for (let sum in appData.expenses) {

        sum +=appData.expenses
            
        }
        return appData.expensesMonth = sum
    },
        

    getBudget: function (a,b) {
        return a-b;
    },

    getTargetMonth: function(mission,AccumulatedMonth){
    
        return mission / AccumulatedMonth;

    }, 

    let result = getTargetMonth(mission,AccumulatedMonth),

    if(result > 0){ 

            console.log(Math.ceil(result), 'Месяцев для достижения цели');

            }else if(result < 0){

            console.log('Цель не будет достигнута');
        };

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

let AccumulatedMonth = appData.getBudget(question,expensesAmout);
console.log(AccumulatedMonth, 'Остаток за месяц');

let targetMonth = appData.getTargetMonth(appData.mission,AccumulatedMonth);

let budgetDay = AccumulatedMonth/30;
console.log(Math.floor(budgetDay), 'Дневной бюджет');

console.log(appData.getStatusIncome());