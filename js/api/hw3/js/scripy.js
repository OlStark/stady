//Ссылка на сервер
const wsUrl =  "wss://echo-ws-service.herokuapp.com";

//Получение нод
const input = document.querySelector(".text");
const btnSend = document.querySelector(".send");
const btnLocation = document.querySelector(".location");
const output = document.querySelector(".corresp");

//Объект для хранения данных с сервера

let soket = new WebSocket(wsUrl);

soket.onmessage = (event) => {
    writeToScreen(event.data, true);
};

btnSend.addEventListener('click', sendMessage);

function sendMessage() {
    if (!input.value) return;
    soket.send(input.value);
    writeToScreen(input.value, false);
    input.value === "";
}

//Функция для вывода ответа на страницу

function writeToScreen (message) {
    let pre = document.createElement('div');
    pre.style.wordWarp = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

// Функция, выводящая текст об ошибке
const error = () => {
    output.textContent = 'Невозможно получить ваше местоположение';
  }

//Слушаем кнопку вызова навигации

btnLocation.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          writeToScreen (`
          <a href="https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}" target="_blank">Гео-локация</a>`);
        });
      }
  });
