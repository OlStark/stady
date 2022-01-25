function useRequest (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа:', xhr.ststus);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    }

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа:', xhr.ststus);
    };

    xhr.send();
}

//Нода для вывода
const resultNode = document.querySelector('.result');

//Кнопка при нажатии на которую запрос будет выполняться
const btnNode = document.querySelector('.submit');

//Обработка полученного результата

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;

    });

    resultNode.innerHTML = cards;

//Записываю изображение в local storage
    localStorage.setItem("img", JSON.stringify(cards));

}
//Получаю и распарщиваю объект из local storage
    var saveImg = localStorage.getItem("img");

    saveImg = JSON.parse(saveImg);
    
//Вывод запросов на страницу 
    resultNode.innerHTML = saveImg;


//Обработчик на кнопку для запроса

btnNode.addEventListener('click', () => {

    let val1;
    let val2;

    val1 = Number(document.querySelector('.numpage').value);
    val2 = Number(document.querySelector('.limit').value);

// Проверяем числа

    if (typeof val1 == 'number' || !isNaN(val1) || typeof val2 == 'number' || !isNaN(val2)) {
        if ((val1 < 1 || val1 > 10) && (val2 >= 1 && val2 <= 10)) {
            alert('Номер страницы вне диапазона от 1 до 10');
        } else if ((val2 < 1 || val2 > 10) && (val1 >= 1 && val1 <= 10)) {
            alert('Лимит вне диапазона  от 1 до 10');
        } else if ((val1 < 1 || val1 > 10) && (val2 < 1 || val2 > 10)) {
            alert('Номер страницы и лимит вне диапазона от 1 до 10');
        } else {
            useRequest(`https://picsum.photos/v2/list?page=${val1}&limit=${val2}`, displayResult);
        }
    }
});

