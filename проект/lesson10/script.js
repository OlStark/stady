'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');

//Расставил книги по порядку//
books[0].append(book[0]);
books[0].append(book[4]);
books[0].append(book[3]);
books[0].append(book[5]);
books[0].append(book[2]);

//Поменял заголовок в 3 книге//
let chengedHeader = document.getElementsByTagName('a')[2];
chengedHeader.replaceWith('Книга 3. this и Прототипы Объектов');

//Поменял фон//
document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//Изменил порядок глав в 5 книге//

let elems = document.querySelectorAll('.book')[4].querySelectorAll('li');

elems[4].after(elems[2]);
elems[3].before(elems[9]);
elems[7].after(elems[5]);


//Добавил главу в 6 книгу//

let heads = document.querySelectorAll('.book')[5].querySelectorAll('li'),
    newHead = document.createElement('li');

newHead.textContent = 'Глава 8: За пределами ES6';

heads[8].after(newHead);


//Удалил рекламу//
let spam = document.querySelector('.adv');
spam.remove();