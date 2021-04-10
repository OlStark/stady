let mission = 500000;

let question = Number(prompt('Ваш месячный доход?'));
console.log(typeof question);

let addExpenses = [prompt ('Перечислите возможные расходы за рассчитываемый период через запятую:')];
console.log(typeof addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);


let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = Number(prompt('Во сколько это обойдется?'));

let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = Number(prompt('Во сколько это обойдется?'));




let getExpensesMonth = function(a, b){
    return a + b;
    }

    let res = getExpensesMonth(amount1,amount2);
    console.log(res,'Расходы за месяц');


let getAccumulatedMonth = function(a,b){
    return a - b;
}

let AccumulatedMonth = getAccumulatedMonth(question,res);
console.log(AccumulatedMonth, 'Остаток за месяц');



let getTargetMonth = function(a,b){
   return a / b;
}

let TargetMonth = getTargetMonth(mission,AccumulatedMonth);
console.log(TargetMonth, 'Месяцев для достижения цели');

let budgetDay = AccumulatedMonth/30;
console.log(Math.floor(budgetDay, 'Дневной бюджет' ));

let getStatusIncome = function () {

    if (budgetDay > 1200){
    return('У Вас высокий уровень дохода.')

} else if (budgetDay >=600){
    return('У вас средний уровень дохода.')

} else if (budgetDay >= 0){
return('У вас низкий уровень дохода.')

}else if (budgetDay<0){
    return('Что то пошло не так')
}
};
console.log(getStatusIncome());
