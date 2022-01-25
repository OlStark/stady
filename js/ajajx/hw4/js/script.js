//Находим кнопку
const submit = document.querySelector('.submit');

//Находим поле для вывода
const result = document.querySelector('.result');

//Обработчик при нажатии на кнопку

submit.addEventListener('click', () => {
    let par1;
    let par2;

    par1 = Number(document.querySelector('.in1').value);
    par2 = Number(document.querySelector('.in2').value);

//Проверяем числа

if (typeof par1 == 'number' || !isNaN(par1) || typeof par2 == 'number' || !isNaN(par2)) {
    if (par1 >= 100 && par1<= 300 && par2 >= 100 && par2<= 300) {
         // Делаем запрос за данными
        fetch(`https://picsum.photos/${par1}/${par2}`)
        .then((response) =>{
        result.innerHTML = 
        `<div class="card">
        <img src="${response.url}"/>
        </div>`;
        });
    }else {
        alert('Одно из чисел вне диапазона от 100 до 300');
    }
} 
});