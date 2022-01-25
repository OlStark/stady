/*Создаем функцию useRequest, которая будет осуществлять запрос*/

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
          console.log('Статус ответа: ', xhr.status);
        } else {
          const result = JSON.parse(xhr.response);
          if (callback) {
            callback(result);
          }
        }
      };

      xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
      };
      
      xhr.send();
    };

// Ищем ноду для вставки результата запроса

const resultNode = document.querySelector('.result');

// Ищем кнопку, по нажатии на которую будет запрос

const btnNode = document.querySelector('.j-btn-request');

//Результирующая функция//

function displayResult(apiData){
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
          <div class='card'>
              <img src='${item.download_url}' class='card-image'/>
          </div>`;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}


//Обработчик на кнопку для запроса

btnNode.addEventListener('click', () => {
  let value = Number(document.querySelector('input').value);


  //Проверка числа

  if (typeof value == 'number') {
      if(value > 0 && value <11) {
        useRequest(`https://picsum.photos/v2/list?limit=${value}` , displayResult);
      } else {
        alert('Введите число от 1 до 10')
      }
  }
});