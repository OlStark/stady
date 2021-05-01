'use strict'

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let question,
    start = function() { 
        do{
        question = prompt('Ваш месячный доход?', 50000);
        }
        while (!isNumber(question)) 
        
    };

start();

let appData = {
    
    income: {},
    addIncome: [],
    expenses:{},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 7,
    budget: question,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {

        if(confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome = ' ';
            do {
            itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксо');
            }
            while(isNumber(itemIncome))
            let cashIncome = 0;
            do{
            cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
            }
            while(!isNumber(cashIncome))

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую:');
        appData.addExpenses = addExpenses.split(', ').map((key, i) => key[0].toUpperCase() + key.slice(1));
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        

        for (let i = 0; i < 2; i++) {
            let expenses = ' ';
            do{
            expenses = prompt('Введите обязательную статью расходов?');
            }
            while(isNumber(expenses)) 
            let expen = 0;
            do {
                expen = prompt('Во сколько это обойдется?');
            }
            while (!isNumber(expen)) 
            appData.expenses[expenses] = +expen;            
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
    getInfoDeposit: function(){

        let percentDeposit = 0;
        let moneyDeposit = 0;

        if(appData.deposit){

        do{
        percentDeposit = prompt('Какой годовой процент?', '10');
        }
        while(!isNumber(percentDeposit))
        
        do{
        moneyDeposit = prompt('Какая сумма заложена?' , 10000);
        }
        while(!isNumber(moneyDeposit))
        }

        appData.percentDeposit = percentDeposit;
        appData.moneyDeposit = moneyDeposit;
        },

    calcSaveMoney: function(){

        return appData.budgetMonth * appData.period;
    }
};


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

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

console.log(appData.addExpenses.join(', '));

let button = document.getElementById('start');

let buttonsPlus1 = document.getElementsByTagName('button')[0];

let buttonsPlus2 = document.getElementsByTagName('button')[1];

let checkbox = document.querySelector('#deposit-check');

let arrayInput = document.querySelectorAll('.additional_income-item');

let dayBudget = document.getElementsByClassName('budget_day-value')[0];

let monthExpenses = document.getElementsByClassName('expenses_month-value')[0];

let addIncome = document.getElementsByClassName('additional_income-value')[0];

let addExpenses = document.getElementsByClassName('additional_expenses-value')[0];

let accumulation = document.getElementsByClassName('income_period-value')[0];

let targetTime = document.getElementsByClassName('target_month-value')[0];

let monthIncome = document.querySelector('.salary-amount');

let addIncomeTitle = document.querySelector('.income-title');

let inputAddIncome = document.querySelector('.income-amount');

let expensesTitle = document.querySelector('.expenses-title');

let expenses = document.querySelector('.expenses-amount');

let addExpensesItem = document.querySelector('.additional_expenses-item');

let target = document.querySelector('.target-amount');

let range = document.querySelector('.period-select');