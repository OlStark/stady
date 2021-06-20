'use strict'

let button = document.getElementById('start'); //Получение кнопки "Рассчитать"

let buttonsPlus1 = document.getElementsByTagName('button')[0];

let buttonsPlus2 = document.getElementsByTagName('button')[1];

let checkbox = document.querySelector('#deposit-check');

let arrayInput = document.querySelectorAll('.additional_income-item');

let dayBudget = document.getElementsByClassName('budget_day-value')[0];

let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];

let monthExpenses = document.getElementsByClassName('expenses_month-value')[0];

let addIncome = document.getElementsByClassName('additional_income-value')[0];

let addExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];

let accumulation = document.getElementsByClassName('income_period-value')[0];

let targetTime = document.getElementsByClassName('target_month-value')[0];

let monthIncome = document.querySelector('.salary-amount');

let addIncomeTitle = document.querySelector('.income-title');

let inputAddIncome = document.querySelector('.income-amount');

let expensesTitle = document.querySelector('.expenses-title');

let expensesItems = document.querySelectorAll('.expenses-items');

let addExpensesItem = document.querySelector('.additional_expenses-item');

let target = document.querySelector('.target-amount');

let range = document.querySelector('.period-select');

let periodAmount = document.querySelector('.period-amount');

let additionalExpensesItem = document.querySelector('.additional_expenses-item');

let incomeItem = document.querySelectorAll('.income-items');

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};



let appData = {
    
    income: {},
    incomeMonth: {},
    addIncome: [],
    expenses:{},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function () { 

        appData.budget = + monthIncome.value;

        appData.getExpenses();

       
        appData.getExpensesMonth();
        appData.getBudget();
        appData.getInfoDeposit();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncome();

        appData.showResult();
        
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        dayBudget.value = appData.budgetDay;
        monthExpenses.value = appData.expensesMonth;
        addExpensesValue.value = appData.addExpenses.join(', ');
        addIncome.value = appData.addIncome.join(', ');
        targetTime.value = Math.ceil(appData.getTargetMonth());
        

        range.addEventListener('input', function() {

            accumulation.value = appData.calcSaveMoney();
        });
        
    

    },
    addExpensesBlock: function() {

        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonsPlus2);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            buttonsPlus2.style.display = 'none';
        }
    },

    getExpenses: function() {
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = +item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== ''){
               appData.expenses[itemExpenses] = cashExpenses;
            }
          
        });
    },

    getIncome: function() {
        incomeItem.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = +item.querySelector('.income-amount').value;

        if (itemIncome !=='' && cashIncome !== ''){
            appData.incomeMonth[itemIncome] = cashIncome;
            }
        });
    },

    getAddExpenses: function() {
        let addExpen = additionalExpensesItem.value.split(',');
        addExpen.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        })

    },

    getAddIncome: function () {
        arrayInput.forEach(function(item){
            let itemValue = item.value.trim();
            if (item.value !== ''){
                appData.addIncome.push(itemValue);
            }
        });
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

    getTargetMonth: function() {
    
        return target.value / appData.budgetMonth;

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

        return appData.budgetMonth * range.value;
    },
    

};

    let changeFunc = function(event){

        accumulation.value = appData.calcSaveMoney();

        periodAmount.innerHTML = event.target.value;
    };
    range.addEventListener('input', changeFunc);
    

    button.addEventListener('click', function(event){
        if(monthIncome.value === ''){

        event.preventDefault();

        alert('Ошибка, поле "Месячный доход" должно быть заполнено!');

            return;
        }
    });

start.addEventListener('click' , appData.start);

buttonsPlus2.addEventListener('click' , appData.addExpensesBlock);

let targetMonth = appData.getTargetMonth();


 //if(targetMonth > 0){ 

    //console.log(Math.ceil(targetMonth), 'Месяцев для достижения цели');

    //}else if(targetMonth < 0){

    //console.log('Цель не будет достигнута');
    //};

let expensesAmout = appData.getExpensesMonth();

//console.log('Наша программа включает в себя:');

for (let key in appData){

   //console.log(key, appData[key]);
}

//console.log(appData.addExpenses.join(', '));

